import { test, expect } from '@playwright/test';

test('Test create card sucessfully', async ({ page ,baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'New Card' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Card 1');
  await page.locator('input[name="content"]').click();
  await page.locator('input[name="content"]').fill('Verify defect 1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Card 1' }).click();
  await page.getByText('Verify defect 1').click();
});