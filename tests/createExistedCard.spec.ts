import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test Create card that already existed', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnCreate }).click();
  await page.locator(locators.inputName).click();
  await page.locator(locators.inputName).fill('Card 4');
  await page.locator(locators.inputContent).click();
  await page.locator(locators.inputContent).fill('Verify card 4');
  await page.getByRole('button', { name: locators.btnSumit }).click();
  await page.getByText('Card Card 4 already exists').click();
});