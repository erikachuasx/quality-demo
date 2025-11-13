const { test, expect } = require('@playwright/test');
const path = require('path');

test('button click updates message', async ({ page }) => {
  const filePath = 'file://' + path.join(__dirname, '../index.html');
  await page.goto(filePath);

  await page.click('#clickMe');
  await expect(page.locator('#message')).toHaveText('Button clicked!');
});
