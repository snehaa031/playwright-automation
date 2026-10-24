
# TypeScript + Playwright Automation Framework

## Overview
A reusable UI automation framework built using TypeScript
and Playwright Test.

## Framework Design
- Page Object Model (POM)
- Custom Playwright fixtures
- Centralized browser configuration
- Reusable test data
- Positive and negative login scenarios
- HTML reporting and failure diagnostics

## Prerequisites
- Node.js (supported LTS version)
- npm

## Installation
```bash
npm install
npx playwright install
```

## Run Tests
```bash
npm test
```

Run tests with a visible browser:
```bash
npm run test:headed
```

Open the HTML report:
```bash
npm run test:report
```

## Test Scenarios
- Successful login
- Invalid password
- Locked-out user

## Application Under Test
SauceDemo demo application
https://www.saucedemo.com/
