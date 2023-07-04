import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://localhost:44332/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/todolist/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://localhost:44332/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Cards' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/TodoLists/);
});