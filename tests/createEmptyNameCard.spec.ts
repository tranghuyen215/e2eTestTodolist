import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test create card name empty', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnCreate }).click();
  await page.locator(locators.inputContent).click();
  await page.locator(locators.inputContent).fill('Verify Defect 5');
  await page.getByRole('button', { name: locators.btnSumit }).click();
  await page.getByText(locators.errorEmptyName).click();
  await page.getByRole('button', { name: locators.btnCancel }).click();
});