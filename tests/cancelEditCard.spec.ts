import { test, expect } from '@playwright/test';

test('Test cancel Edit card', async ({ page , baseURL }) => {
  await page.goto(`${baseURL}`);
  await page.getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'Edit' }).first().click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('heading', { name: 'List of cards' }).click();
});