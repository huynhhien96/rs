# RS Website

This repository contains the source code for a website built using **HTML**, **JavaScript**, and **Tailwind CSS**.

## Technologies Used

- **HTML**: For the website structure.
- **JavaScript**: To handle interactivity and dynamic content.
- **Tailwind CSS**: A utility-first CSS framework for designing the website.
- **Github**: For the free domain

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (to use npm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/huynhhien96/rs.git
   cd rs

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev or npm start

4. Runring the project
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```
    This command will watch for changes in the src/input.css file and generate the output CSS in the dist/output.css file.

5. Directory Structure
- src/: Contains the source files, including the input CSS for Tailwind.
- dist/: Contains the output files, including the compiled CSS.
- js/: JavaScript files for additional functionality.
- index.html: The main HTML file of the website.
- README.md: This file, containing project information and usage instructions.

6. Notes for future development

- If you need to rerun this project, always remember to execute the Tailwind CSS build command:

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
This ensures that the styles are correctly built and updated.

