const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(process.env.PLAYWRIGHT_DOCS ? 'docs' : 'dist');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png' };
http.createServer(async (request, response) => {
  const relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).replace(/^\/angular-material-admin\//, '/');
  const target = path.resolve(root, '.' + (relative === '/' ? '/index.html' : relative));
  if (!target.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
  try {
    const body = await fs.readFile(target);
    response.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' }).end(body);
  } catch (error) {
    if (error.code !== 'ENOENT') { console.error(error); response.writeHead(500).end(); return; }
    response.writeHead(404).end();
  }
}).listen(4337, '127.0.0.1');
