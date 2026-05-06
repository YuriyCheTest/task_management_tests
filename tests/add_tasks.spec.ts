import { test} from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import data from '../data/data.json';

test.use({ storageState: 'state.json' });

data.forEach((data) => {
  test(`add task with title ${data.title}`, async ({ page }) => {
    const p = new DashboardPage(page);

    await p.goto();
    const cardTask = await p.addTask(data.title, data.description, data.priority);
    await cardTask.verify_task_parameters();
  });
});

test.afterEach(async ({ page }) => {
  const d = new DashboardPage(page);
  await d.deleteTasks();
});
