# My Design System  
A scalable React + TypeScript + TailwindCSS design system for enterprise applications, featuring a full Storybook documentation suite.
## Table of Contents
1. [Built With](#built-with)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Folder Structure](#folder-structure)
6. [Storybook Preview](#storybook-preview)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Badges
![Build Status](https://img.shields.io/github/actions/workflow/status/your/repo/ci.yml)
![Coverage](https://img.shields.io/codecov/c/github/your/repo)
[![Storybook](https://img.shields.io/badge/storybook-live-blue.svg)](https://your-project.chromatic.com)


## Built With
- React
- TypeScript
- TailwindCSS
- Storybook

## Installation
- git clone https://github.com/your/repo.git
- cd repo
- npm install

## Usage

- npm start      

- npm run build  

- npm run storybook 


## Features
- **Typography**: Headings H1–H6, paragraph, labels, captions, helper text  
- **Data Entry**: TextInput, Checkbox, with error/disabled/helper states  
- **Feedback**: Toast (auto-dismiss/close), AlertBanner (dismissible)  
- **Theming**: Light/dark mode support  
- **Accessibility**: ARIA roles, keyboard navigation  

## Folder Structure
src/  
├─ components/  
│  ├─ Typography/  
│  ├─ TextInput/  
│  ├─ Toast/  
│  └─ AlertBanner/  
├─ tokens/  
│  ├─ colors.ts  
│  └─ typography.ts  
└─ stories/  
   └─ ...  


---

## Storybook Preview  
Link directly to your deployed Storybook, so reviewers can interact with components live.

```markdown
## Storybook Preview
🔗 https://6807280b26f33c9645aee56b-oxdncqdfjp.chromatic.com/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
