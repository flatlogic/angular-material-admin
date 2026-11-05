const { test, expect } = require('@playwright/test');

async function login(page) {
  await page.goto('./#/login');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('security@example.test');
  await page.getByLabel('Password', { exact: true }).fill('security-password');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page).toHaveURL(/#\/dashboard$/);
}

test('demo login, dashboard charts, chart selectors, menus and logout', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await login(page);
  await expect(page.locator('app-daily-line-chart .apexcharts-line-series path').first()).toBeVisible();
  await expect(page.locator('app-revenue-chart canvas')).toBeVisible();
  await expect(page.locator('app-server-chart .apexcharts-svg')).toHaveCount(3);
  const select = page.locator('app-daily-line-chart mat-select');
  await select.click();
  await page.getByRole('option', { name: 'Daily', exact: true }).click();
  await expect(select).toContainText('Daily');
  const cardWidths = await page.locator('.charts-wrapper > .chart mat-card').evaluateAll(cards => cards.map(card => card.getBoundingClientRect().width));
  expect(Math.max(...cardWidths) - Math.min(...cardWidths)).toBeLessThan(3);
  await expect(page.locator('mat-toolbar.page-header h1')).toHaveCSS('font-size', '38.4px');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('option', { name: 'Daily', exact: true })).toHaveCount(0);
  await expect(page.locator('.cdk-overlay-backdrop')).toHaveCount(0);
  await expect.poll(() => page.locator('app-revenue-chart canvas').evaluate(canvas => {
    const context = canvas.getContext('2d');
    let colored = 0;
    for (let point = 0; point < 24; point++) {
      const angle = point * Math.PI / 12;
      const x = canvas.width * .24 + canvas.height * .3 * Math.cos(angle);
      const y = canvas.height * .5 + canvas.height * .3 * Math.sin(angle);
      if (context.getImageData(Math.round(x), Math.round(y), 1, 1).data[3] > 128) colored++;
    }
    return colored;
  })).toBeGreaterThan(22);
  await expect(page.locator('app-visits-chart h5')).toHaveText('Visits Today');
  await expect(page.locator('app-visits-chart mat-card')).toHaveCSS('box-sizing', 'content-box');
  await page.screenshot({ path: 'test-results/angular-material-admin-dashboard.png' });
  await page.locator('app-user button').first().click();
  await expect(page.getByText('John Smith', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sign out', exact: true }).click();
  await expect(page).toHaveURL(/#\/login$/);
  expect(errors).toEqual([]);
});

test('tables, filters, selection, charts, icons, typography and notifications', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await login(page);
  await page.goto('./#/tables');
  const table = page.locator('app-employee-table');
  const rows = table.locator('tbody tr');
  await expect(rows.first()).toBeVisible();
  const name = await rows.first().locator('td').nth(1).innerText();
  await table.locator('mat-card-title button').last().click();
  await table.locator('input.employee-table-wrapper__search-input').fill(name);
  await table.locator('input.employee-table-wrapper__search-input').press('a');
  await table.locator('input.employee-table-wrapper__search-input').press('Backspace');
  await expect(rows.first()).toContainText(name);
  await table.getByRole('checkbox').first().check();
  await expect(table.getByRole('checkbox').first()).toBeChecked();
  await page.goto('./#/ui/charts');
  await expect(page.locator('apx-chart .apexcharts-svg')).toHaveCount(4);
  await expect(page.locator('apx-chart .apexcharts-series path').first()).toBeVisible();
  await page.goto('./#/ui/icons');
  await expect(page.locator('mat-tab-group')).toBeVisible();
  await page.goto('./#/typography');
  await expect(page.getByRole('heading', { name: 'Typography', exact: true }).first()).toBeVisible();
  await page.goto('./#/notification');
  await page.getByRole('button', { name: 'Info Message', exact: true }).click();
  await expect(page.locator('.toast-container .ngx-toastr')).toBeVisible();
  await expect(page.locator('.toast-container')).toHaveClass(/toast-top-right/);
  expect(errors).toEqual([]);
});

test('mobile login, drawer and layout fit the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await login(page);
  await expect(page.locator('app-header mat-toolbar')).toBeVisible();
  await page.locator('.header__title-button').click();
  await expect(page.locator('mat-sidenav')).toBeVisible();
  await page.locator('mat-sidenav mat-list-item').filter({ hasText: 'Typography' }).click();
  await expect(page).toHaveURL(/#\/typography$/);
  await page.screenshot({ path: 'test-results/angular-material-admin-mobile.png' });
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
