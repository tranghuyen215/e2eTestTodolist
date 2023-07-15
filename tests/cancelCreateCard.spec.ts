import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test cancel Create card', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnCreate }).click();
  await page.locator(locators.inputName).fill('Card name');
  await page.getByRole('button', { name: locators.btnCancel }).click();
  await page.getByRole('heading', { name: locators.headingTitle }).click();
});