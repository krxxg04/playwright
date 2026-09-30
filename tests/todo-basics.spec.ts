import { test, expect } from '@playwright/test';

test.describe('Todo app basics', () => {
  test.beforeEach(async ({ page }) => {
    // Arrange: open the app before each test
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('should add a new todo', async ({ page }) => {
    // Act
    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('study playwright');
    await newTodo.press('Enter');

    // Assert
    await expect(page.getByTestId('todo-title')).toHaveText(['study playwright']);
  });

  test('should mark a todo as completed', async ({ page }) => {
    // Act
    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('study playwright');
    await newTodo.press('Enter');
    await page.getByTestId('todo-item').getByRole('checkbox').check();

    // Assert
    await expect(page.getByTestId('todo-item')).toHaveClass('completed');
  });
});
