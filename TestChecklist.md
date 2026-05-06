# 1. Autorization page:
## 1.1 Positive tests:
1.1.1 Right registration - with valid email which not used yet, valid password, valid confirm password
1.1.2 Right auth - with valid email, valid password
## 1.2 Negative tests (check message and not entered, cannot enter with URL):
1.2.1 Negative registration
1.2.2 Wrong registration - with valid email, valid password, valid confirm password but email is already used 1.2.3 Wrong registration - with invalid email format, valid password, valid confirm password 
1.2.4 Wrong registration - with valid email which not used yet, but invalid password (less than 8 symbols), confirm password matches the password 
1.2.5 Wrong registration - with valid email which not used yet, valid password, but confirm password doesn't match to the password
1.2.6 Negative login
1.2.7 Without auth - by link
1.2.8 With empty auth
1.2.9 With not registered yet auth
1.2.10 With registered email but wrong password
1.2.11 With registered email but empty password
1.2.12 With error in registered email and right password
	
# 2. Dashboard page
2.1 Add new task standard parameters (with short title, short description, default (Medium) priority). Verify it is appeared in the Backlog column, title, description, priority and color are corresponded to defined ones. Created - current date.
2.2 Add new task with minimal standard parameters (with short title only) but High priority. Verify it is appeared in the Backlog column, title, description, priority and color are corresponded to defined ones. Created - current date.
2.3 Add new task standard parameters but Low priority. Verify it is appeared in the Backlog column, title, description, priority and color are corresponded to defined ones. Created - current date.
2.4 Add new task. Delete the task. Task should disappear.
2.5 Add new task and move(drag-and-drop) it to Todo column. Verify it is appeared in the correspondent column, description become invisible, priority and color are corresponded to defined ones. Enter to Edit for the task - description should be visible and remain as defined.
2.6 Add new task and move(drag-and-drop) it consistently to Todo, In Progress, Done columns. Verify it is appeared in the correspondent columns, title, description, priority and color are corresponded to defined ones
2.7 Add new task, move it to Done column and then consistently to In Progress, Todo, Backlog columns
2.8 Add new task. Try to move it towards Todo column - move between Backlog and Todo with major part of task card above Backlog column. Drop the card. It should return to Backlog column. Then move it in Todo column and try to move towards In Progress column. Consistently do this check for all columns forward and then backward.
2.9 Add new task and move it to In Progress column. Verify. Move it back to Backlog.
2.10 Add new task and move it to In Done column. Verify. Move it back to Backlog.
2.11 Add new task, edit parameters - Priority, title, description. Save changes. Verify it is remain in the same column, title, description, priority and color are corresponded to updated ones
2.12 Add new task, move it to Todo column, edit parameters - Priority, title, description, Status. Save changes. Verify it is remain in the same column, title, description, priority and color are corresponded to updated ones
2.13 Add new task, move it to In Progress column, edit parameters - Priority, title, description, Status. Save changes. Verify it is remain in the same column, title, description, priority and color are corresponded to updated ones
2.14 Add new task, move it to Done column, edit parameters - Priority, title, description, Status. Save changes. Verify it is remain in the same column, title, description, priority and color are corresponded to updated ones
2.15 Add new task, edit Status to Todo. Save changes. Verify it is moved to the correspond column. Title, description, priority remain the same. Edit Status to In Progress, verify. Edit Status to Done, verify.
2.16 Add new task, edit all parameters - Priority, title, description, Status. Cancel changes. Verify it is remain in the same column, title, description, priority and color remain the same.
2.17 Add new task, 
2.18 Add 4 new tasks, move them to different columns - one task in every column. Logout. Login again. Tasks should be in the same columns, their title, description, priority also should be the same.
2.19 Add 4 new tasks, move them to different columns - one task in every column. Add new task. All other task (these 4) should remain in the same columns, their title, description, priority also should be the same.
2.20 Add 4 new tasks, move them to different columns - one task in every column. Edit any task. Edited task should have updated parameters,  all other task (3) should remain in the same columns, their title, description, priority also should be the same.
2.21 Add 4 new tasks, move them to different columns - one task in every column. Delete any task. Deleted task should disappear,  all other task (3) should remain in the same columns, their title, description, priority also should be the same.
2.22 Add new task, set its title to max length - 255 letters. Verify title displays at least partly. Enter to task edit and verify that title remain the same.
2.23 Add new task, set its title to max+1 length - 256 letters. Move task to other column. Verify title displays at least partly. Enter to task edit and verify that title remain almost the same - without last letter.
2.24 Add new task, set its description to max length - 1000 letters. Verify description displays at least partly. Enter to task edit and verify that description remain the same.
2.25 Add new task, set its description to max+1 length - 1001 letters. Verify description displays at least partly. Move task to other column. Enter to task edit and verify that description remain almost the same - without last letter.
2.26 Add 80 new tasks, move to be 20 tasks in every column. Verify they are displayed well - all is visible. Logout and login again. Again verify they are displayed well.

# 3. All fields where possible to enter something (email, password, title, etc) should be tested to try enter JavaScript or SQL code, many variants

Tests 1.1.1, 1.1.2, 2.1, 2.2 are automated.
All tests can be automated but some of them should remain manual or can be automated but with mandatory screenshots and these screenshots should be verified manually to be sure that all looks appropriate.	These tests are 2.3, 2.6. Tests 2.23, 2.25, 2.26 definitely should be automated but also with mandatory screenshots verification
