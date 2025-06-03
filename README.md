# Table of Contents

- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
- [How to Use](#how-to-use)
- [Tools Used](#tools-used)
- [Project Requirements](#project-test-requirements)


# Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**
  Download [https://nodejs.org/](https://nodejs.org/)

- **Git Bash** 
   [https://git-scm.com/downloads](https://git-scm.com/downloads)

---

# How to Run

1. Install dependencies:  
   ```bash
   npm i

2. After Dependencies are installed, run on separate GitBash terminals:
   ```bash
   npx json-server ./public/employees.json
   ```
    \+
     ```bash
     npm run dev
    ```
---
 # How to Use

- Use the **dropdown** to filter employees by **department**.
- Use the **input field** to filter employees by **First Name**, **Last Name**, or **Email**.
- **Click on an employee** to view more details.
---

# Tools Used

- **React**
- **TypeScript**
- **Redux Toolkit**
- **SCSS**
- **React Router**
- **Material UI**
- **JSON Server**

---
# Project Test Requirements

1. **Project Setup**
   - Use React (Vite, CRA, or similar).
   - Use TypeScript.
   - Use SCSS for styling.

2. **Employee List Page**
   - Fetch data from a mock API (you can use a local `employees.json` or a public API like reqres.in).
   - Display the list in a table/grid.
   - Each row should include: Full Name, Department, Email, Status.

   **Bonus:**
   - Use DevExtreme DataGrid or Material-UI Table for grid display.

3. **Search and Filter**
   - Add a text input to search by name or email.
   - Add a dropdown to filter by department.

4. **Employee Details View**
   - When a row is clicked, show a details view (modal or separate page) with more info.
   - Info could include: Full Name, Email, Status, Hire Date, Notes.

5. **State Management**
   - Use Redux Toolkit (or plain Redux) to store and manage employee list and filters.

6. **Styling**
   - Use SCSS for layout and styling (modular or global).

**Optional Bonuses**
- Use React Router for navigating to the details page.
- Add a basic unit test for one component.
- Use localStorage to persist filters or last selected employee.

**Submission Guidelines**
- Push to GitHub (or zip and send).
- Include short README with setup instructions.
- Timebox to ~3 hours.
