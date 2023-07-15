import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test cancel Edit card', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnEdit }).first().click();
  await page.getByRole('button', { name: locators.btnCancel }).click();
  await page.getByRole('heading', { name: locators.headingTitle }).click();
});