# ignw-component-generator
React Component Generator - Micro-generator framework that makes it easy for an entire team to create react component files with a level of uniformity.


### Prerequisites
* NodeJS

### Getting Started
**Add ignw-component-generator to your project**
```
npm install --save-dev ignw-component-generator
```

## Usage
```
// package.json
{
  "scripts": {
      "plop:component": "plop --plopfile ./node_modules/ignw-component-generator/plopfile.ts"
  },
  ...
}
```
CLI Example: `npm run plop:component app bar`

This command will:
1. Create a new `src/components/app-bar/index.ts` file.
1. Create a new `src/components/app-bar/AppBar.tsx` file.
1. Create a new `src/components/app-bar/AppBar.stories.tsx` file.
1. Create a new `src/components/app-bar/AppBar.test.tsx` file.

## Full Example
```
> npm run plop:component
> plop --plopfile ./node_modules/ignw-component-generator/plopfile.ts

? react component name app bar
✔ ++ /src/components/app-bar/index.ts
✔ ++ /src/components/app-bar/AppBar.tsx
✔ ++ /src/components/app-bar/AppBar.stories.tsx
✔ ++ /src/components/app-bar/AppBar.test.tsx

```
