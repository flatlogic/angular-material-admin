const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const { createRequire } = require('node:module');

function dependencyOf(parent, name) {
  const parentRequire = createRequire(require.resolve(parent));
  return parentRequire(name);
}

test('scoped CLI glob/minimatch updates retain file traversal and matching APIs', async context => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'angular-cli-globs-'));
  context.after(() => fs.rm(directory, { recursive: true, force: true }));
  await fs.mkdir(path.join(directory, 'src'));
  await fs.writeFile(path.join(directory, 'src/main.ts'), '');
  await fs.writeFile(path.join(directory, 'src/main.spec.ts'), '');
  const cliRequire = createRequire(path.resolve('node_modules/@angular/cli/package.json'));
  const packageRequire = createRequire(cliRequire.resolve('@npmcli/package-json'));
  const { glob } = packageRequire('glob');
  assert.deepEqual(await glob('src/**/*.ts', { cwd: directory, ignore: '**/*.spec.ts' }), ['src/main.ts']);
  const globRequire = createRequire(packageRequire.resolve('glob'));
  const { minimatch, Minimatch } = globRequire('minimatch');
  assert.equal(minimatch('src/main.ts', '**/*.{ts,js}'), true);
  assert.equal(new Minimatch('**/*.spec.ts', { dot: true }).match('src/main.spec.ts'), true);
  assert.equal(minimatch('src/main.css', '**/*.ts'), false);
  const ignoreWalk = dependencyOf('@angular/cli/bin/ng.js', 'ignore-walk');
  const files = await ignoreWalk({ path: directory });
  assert.deepEqual(files.sort(), ['src/main.spec.ts', 'src/main.ts']);
});

test('critical CSS optimization uses the same DOM node implementation', async () => {
  const Beasties = require('beasties');
  const output = await new Beasties({ logLevel: 'silent' }).process('<!doctype html><html><head><style>.used { color: red }.unused { color: blue }</style></head><body><p class="used">Demo</p></body></html>');
  assert.match(output, /class="used"/);
  assert.match(output, /color:red/);
});

test('updated Stylus glob imports still compile', async context => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'angular-stylus-'));
  context.after(() => fs.rm(directory, { recursive: true, force: true }));
  await fs.writeFile(path.join(directory, 'colors.styl'), 'brand = #536dfe');
  const stylus = require('stylus');
  const output = stylus('@import "*.styl"\n.card\n  color brand').set('paths', [directory]).render();
  assert.match(output, /color: #536dfe/);
});
