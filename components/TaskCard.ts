import { Locator, Page, expect } from '@playwright/test';
import { getNowMMDDYYYY } from '../utils/utils';

export class TaskCard {
  protected readonly page: Page;
  column: () => Locator;
  number_in_column: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  dataCreated: string;
  defaultPriority = 'Medium';
  defaultStatus = 'Backlog';
  titleField = () => this.column().locator('div[data-rfd-draggable-context-id="«r0»"]').nth(this.number_in_column).locator('div[data-slot="card-title"]');
  priorityStatusField = () => this.column().locator('div[data-rfd-draggable-context-id="«r0»"]').nth(this.number_in_column).locator('div[data-slot="card-description"]');
  descriptionField = () => this.column().locator('div[data-rfd-draggable-context-id="«r0»"]').nth(this.number_in_column).locator('p.text-sm.text-muted-foreground');
  dataCreatedField = () => this.column().locator('div[data-rfd-draggable-context-id="«r0»"]').nth(this.number_in_column).locator('p.text-xs.text-muted-foreground');
  menu = () => this.column().locator('div[data-rfd-draggable-context-id="«r0»"]').nth(this.number_in_column).locator('button[aria-haspopup="menu"]');
  menuItemDelete = () => this.page.getByRole('button', { name: /Delete/i });  

  constructor(page: Page, column: () => Locator, number_in_column: number, title:string, description: string, priority: string | undefined ) {
    this.page = page;
    this.column = column;
    this.number_in_column = number_in_column;
    this.title = title;
    this.description = description;
    if (priority) {
      this.priority = priority;
    }
    else {
      this.priority = this.defaultPriority;
    }
    this.status = this.defaultStatus;
    this.dataCreated = getNowMMDDYYYY();
  }

  async verify_task_parameters() {
    const inputElement = await this.titleField().textContent();
    console.log('Title field text content:', inputElement);
    await expect(this.titleField()).toHaveText(this.title);
    if (this.description) {
      await expect(this.descriptionField()).toHaveText(this.description);
    }
    else {
      await expect(this.descriptionField()).toBeHidden();
    } 
    await expect(this.priorityStatusField()).toHaveText('Priority: ' + this.priority + ' | Status: ' + this.status);
    await expect(this.dataCreatedField()).toHaveText('Created: ' + this.dataCreated);
  }

}