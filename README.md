## Technical Automation Test

This repository contains the implementation of the automated API and UI tests proposed in Brilliant Machine's technical challenge, using Cypress. 

---

### **Test Requirements**

#### **API Test**

The API tests cover the following scenarios:
1. Make a call to the `https://fakestoreapi.com/products` API.
2. Read the response and find all objects with the category `electronics`.
3. Compare whether the objects found have the selected property.
4. Count how many times the property appears.
5. Check the number of objects with the above property and with a rating greater than 4.
6. Display the objects found on the console.

NOTE1:. The code itself prints the objects both in the browser console and in Cypress's Test Runner

#### **UI Test**

The UI tests include the scenarios:

1. Access the website `https://www.saucedemo.com/`.
2. Log in.
3. Check that the items are sorted by **Name (A -> Z)**.
4. Change the sorting to **Name (Z -> A)**.
5. Check that the items have been sorted correctly.

NOTE2:. In Chrome there was a failure in communication with Backtrace and it may be necessary to run it in the Electron browser.

---

### **Tools Used**

- VS Code
- Cypress
- Git Bash
- Github
- Node.js
- npm

### **How to run the tests?**

- Locally

1. they are in the “e2e” folder with the ending spec.js.
2. Download the tests in VS Code and make sure you have already given the initialization and installation commands for the tools listed above (configured the environment).
3. In the terminal, enter the command “npx cypress open”.
4. Choose your browser (I chose Electron).
5. Click on the test you want to run.
6. You can also type the command “npm cypress run” into the terminal

- Via Github Action

1. a workflow file (yaml) must exist or be created, where it will install and configure the dependencies.
2. Make sure that the package.json file has the necessary dependencies.
3. When the IDE pushes to github, Github Actions will automatically trigger the workflow file and run the tests written in it.
