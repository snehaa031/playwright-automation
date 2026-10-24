
import { test, expect } from '../fixtures/test-fixtures';

test('should login successfully with valid credentials', async ({ page, loginPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();
});
