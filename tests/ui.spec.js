import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('button click updates message', async ({ page }) => {
  const filePath = 'file://' + path.join(__dirname, '../index.html');
  await page.goto(filePath);

  await page.click('#clickMe');
  await expect(page.locator('#message')).toHaveText('Button clicked!');
});
