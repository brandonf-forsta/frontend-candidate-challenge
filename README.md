#### SPECIFICATION

- Create a todo list app where the user can create/edit/delete tasks.
- The user should also be able to toggle tasks as "done" vs. "not done".
- When a task is deleted, it should be removed from the list.
- New tasks should be added to the top of the list.
- All functionality should be tested. For the testing you should use [React testing library](https://testing-library.com/).

## ADDITIONS

View website: http://website-todo-list.s3-website-us-east-1.amazonaws.com/

- Website is deployed on a AWS S3 bucket
- Tailwind was added for CSS styling (see tailwind.config.js for more)
- npm run format script was added for dev linting and formatting
- Entire site is tabbable

Todo:

- CI/CD pipeline that tests for lint, typescript errors and does a s3 deployment
- Storybook for reusable component visualization
