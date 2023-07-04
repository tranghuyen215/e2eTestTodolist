import { test, expect } from '@playwright/test';

test('Test edit card successfully', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'Edit' }).first().click();
  await page.locator('input[name="content"]').click();
  await page.locator('input[name="content"]').fill('Verify defect 4');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Verify defect 4').click();
});