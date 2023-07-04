import { test, expect } from '@playwright/test';

test('Test Create card that already existed', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'New Card' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Card 4');
  await page.locator('input[name="content"]').click();
  await page.locator('input[name="content"]').fill('Verify card 4');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Card Card 4 already exists').click();
});