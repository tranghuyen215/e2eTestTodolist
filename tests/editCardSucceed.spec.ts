import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test edit card successfully', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnEdit }).first().click();
  await page.locator(locators.inputContent).click();
  await page.locator(locators.inputContent).fill('Verify defect 4');
  await page.getByRole('button', { name: locators.btnSumit }).click();
  await page.getByText('Verify defect 4').click();
});