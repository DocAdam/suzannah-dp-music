import { expect, test } from '@playwright/test';

test('desktop header keeps the full navigation visible', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');

  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Openings', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'FAQ', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Privacy', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Inquire', exact: true }).first()).toBeVisible();
  await expect(page.locator('summary[aria-label="Open navigation menu"]')).toBeHidden();

  await page.getByRole('link', { name: 'Privacy', exact: true }).first().click();
  await expect(page).toHaveURL(/\/privacy\/?$/);
  await expect(page.getByRole('main')).toBeVisible();
});

test('mobile header exposes every route through the collapsible menu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeHidden();
  const menu = page.locator('details.site-nav-mobile');
  await expect(menu).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();

  await page.locator('summary[aria-label="Open navigation menu"]').press('Enter');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  for (const label of ['Openings', 'FAQ', 'Privacy', 'Inquire']) {
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: label, exact: true })).toBeVisible();
  }

  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'FAQ', exact: true }).click();
  await expect(page).toHaveURL(/\/#faq$/);
  await expect(page.locator('#faq')).toBeInViewport();
});
