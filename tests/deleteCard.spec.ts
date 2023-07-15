import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test delete card successfully', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnDelete }).nth(2).click();
});