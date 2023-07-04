import { test, expect } from '@playwright/test';

test('Test create card content empty', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'New Card' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Card 5');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Card content must not be empty').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});