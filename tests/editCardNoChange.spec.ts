import { test, expect } from '@playwright/test';

test('Test Edit card without change', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'Edit' }).first().click();
  await page.getByRole('button', { name: 'Submit' }).click();
});