## 1.1 Technologies used

- [React](https://react.dev/) - The library for web and native user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
- [Material UI](https://mui.com/material-ui/) - Material UI is an open-source React component library that implements Google's Material Design.
- [Vite](https://vitejs.dev/) - Build tool that aims to provide a faster and leaner development experience for modern web projects.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [ESLint & Prettier](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.

## 1.2 Installation

### 1.2.1 Install dependencies

```bash
npm install
```

### 1.2.2 Fill in the env variables

Create copy the `.env.example` file and name it `.env`

Fill in the env variables:

- **VITE_SERVER_URL**: url to staging api

### 1.2.3 Run the app in development watch mode

```bash
npm run dev
```

Check http://localhost:5173/ if you are running locally

### 1.3 State Management

The application uses Redux Toolkit for state management. The global state is defined in the `store` folder, with slices responsible for different parts of the app. Redux DevTools can be used during development to inspect state changes.
