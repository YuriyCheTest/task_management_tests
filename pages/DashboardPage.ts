import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { CreateNewTask } from '../components/CreateNewTask';
import { TaskCard } from '../components/TaskCard';


export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  uri = 'dashboard'
  createNewTask: CreateNewTask | null = null ;
  addNewTaskButton = () => this.page.getByRole('button', { name: /Add New Task/i });
  logoutButton = () => this.page.getByRole('button', { name: /Logout/i });
  backlogColumn = () => this.page.locator('div[data-rfd-droppable-id="Backlog"]');
  todoColumn = () => this.page.locator('div[data-rfd-droppable-id="Todo"]');
  inProgressColumn = () => this.page.locator('div[data-rfd-droppable-id="In Progress"]');
  doneColumn = () => this.page.locator('div[data-rfd-droppable-id="Done"]');
  backlogList: TaskCard[] = []; 
  todoList: TaskCard[] = [];
  inProgressList: TaskCard[] = [];
  doneList: TaskCard[] = []; 

  async addTask(title: string, description: string, priority?: string) {
    await this.addNewTaskButton().click();
    this.createNewTask = new CreateNewTask(this.page);
    await this.createNewTask.createTask(title, description, priority);
    const taskCard = new TaskCard(this.page, this.backlogColumn, this.backlogList.length, title, description, priority);
    this.backlogList.push(taskCard);
    return taskCard;
  }

  async logout() {
    await this.logoutButton().click();
  }

  async deleteTasks() {
    await this.clickTaskDropdown()
    await this.page.locator('[data-slot="dropdown-menu-item"]:has-text("Delete")').click();
  }
  
  async clickTaskDropdown() {
    const card = this.page.locator('[data-slot="card"]');
    await card.hover();
    const trigger = card.locator('[data-slot="dropdown-menu-trigger"]');
    await trigger.waitFor({ state: 'visible' });
    await trigger.click();
    await this.page.locator('[role="menu"]').waitFor({ state: 'visible' });
  }
}