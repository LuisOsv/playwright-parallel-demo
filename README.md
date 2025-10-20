# Playwright Parallel Demo

## Overview
This project demonstrates how to run Playwright tests in parallel, improving the efficiency and speed of your testing process.

## Project Structure
- `package.json`: Contains project dependencies and scripts.
- `playwright.config.ts`: Configuration file for Playwright.
- `tests/`: Directory containing test files.
  - `example.spec.ts`: Example test specification.
  - `login.spec.ts`: Login test specification.
- `playwright-report/`: Directory for Playwright's HTML report.
- `test-results/`: Directory for storing test results.
- `blob-report/`: Directory for additional reporting.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/LuisOsv/playwright-parallel-demo.git
   cd playwright-parallel-demo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests in parallel:
   ```bash
   npx playwright test
   ```

## Reporting
After running the tests, you can find the reports in the `playwright-report/` directory.

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is licensed under the MIT License.