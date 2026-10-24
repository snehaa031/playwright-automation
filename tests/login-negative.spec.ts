
import { test, expect } from '../fixtures/test-fixtures';
import { loginData } from '../test-data/login-data';

test('should reject an invalid password', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    loginData.invalidPassword.username,
    loginData.invalidPassword.password
  );

  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toContainText(
    'Username and password do not match'
  );
});

test('should reject a locked-out user', async ({ loginPage }) => {
  await loginPage.open();

  await loginPage.login(
    loginData.lockedUser.username,
    loginData.lockedUser.password
  );

  await expect(loginPage.errorMessage).toContainText(
    'locked out'
  );
});
