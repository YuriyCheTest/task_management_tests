import { Page, expect } from '@playwright/test';

export class CreateNewTask {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  titleInput = () => this.page.getByRole('textbox', {name: /Title/i});
  descriptionInput = () => this.page.getByRole('textbox', {name: /Description/i});
  priorityButton = () => this.page.getByRole('combobox', { name: /Priority/i });
  priorityCombobox = () => this.priorityButton().locator('xpath=following-sibling::select[0]');
  createTaskButton = () => this.page.getByRole('button', { name: /Create Task/i });
  cancelButton = () => this.page.getByRole('button', { name: /Cancel/i });
  title: string | undefined;
  description: string | undefined;
  priority: string | undefined;
  status: string | undefined;
  dataCreated: string | undefined;


  private async fillTitle(title: string) {
    await this.titleInput().fill(title);
  }

  private async fillDescription(description: string) {
    await this.descriptionInput().fill(description);
  }

  private async selectPriority(priority: string) {
    await this.priorityButton().click();
    await this.page.getByRole('option', { name: priority, exact: true }).click();
  }

  async createTask(title: string, description: string, priority?: string) {
    await this.fillTaskParameters(title, description, priority);
    await this.clickCreateTask();
    //return new TaskCard(this.page, title, description, priority, new Date().toISOString());
  }

  async fillTaskParameters(title: string, description: string, priority?: string) {
    await this.fillTitle(title);
    await this.fillDescription(description);
    if (priority) {
      await this.selectPriority(priority);
    }
  }

  async clickCreateTask() {
    await this.createTaskButton().click();
  }

  async cancel() {
    await this.cancelButton().click();
  }

}