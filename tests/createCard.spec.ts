import { test, expect } from '@playwright/test';
const locators = require('./locators.spect');

test('Test create card sucessfully', async ({ page ,baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: locators.menuCard }).click();
  await page.getByRole('link', { name: locators.btnCreate }).click();
  await page.locator(locators.inputName).click();
  await page.locator(locators.inputName).fill('Card 1');
  await page.locator(locators.inputContent).click();
  await page.locator(locators.inputContent).fill('Verify defect 1');
  await page.getByRole('button', { name: locators.btnSumit }).click();
  await page.getByRole('heading', { name: 'Card 1' }).click();
  await page.getByText('Verify defect 1').click();
});