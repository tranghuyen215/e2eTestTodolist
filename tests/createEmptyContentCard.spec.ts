import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test create card content empty', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnCreate }).click();
  await page.locator(locators.inputName).click();
  await page.locator(locators.inputName).fill('Card 5');
  await page.getByRole('button', { name: locators.btnSumit }).click();
  await page.getByText(locators.errorEmptyContent).click();
  await page.getByRole('button', { name: locators.btnCancel }).click();
});