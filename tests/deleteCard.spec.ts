import { test, expect } from '@playwright/test';

test('Test delete card successfully', async ({ page , baseURL}) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'Delete' }).nth(2).click();
});