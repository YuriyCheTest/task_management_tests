# 1. This is README file for end-to-end tests for task management application

# 2. Prepare environment:
    npm install -g typescript
    npm init -y
    npm install -D @playwright/test
    npx playwright install
    npx install test
    npm install --save-dev dotenv
    npm install --save-dev @types/node

# 3. Run tests:
      Move to project's folder and run:
      npx playwright test

Tests' checklist are in TestChecklist.md file

Tests 1.1.1(registration), 1.1.2(authorization), 2.1, 2.2 (add task) from the checklist are automated

List of founded bugs and concerns is in Bugs_Concerns.txt file.