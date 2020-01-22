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
➜ pge-moonshot-client git:(master) ✗ npm run plop:component

> pge-react-web-client@0.1.0 plop:component /Users/desmondjones/code/github.com/ignw/pge-moonshot-client
> plop --plopfile ./node_modules/ignw-component-generator/plopfile.ts

? react component name app bar
✔ ++ /Users/desmondjones/code/github.com/ignw/pge-moonshot-client/src/components/app-bar/index.ts
✔ ++ /Users/desmondjones/code/github.com/ignw/pge-moonshot-client/src/components/app-bar/AppBar.tsx
✔ ++ /Users/desmondjones/code/github.com/ignw/pge-moonshot-client/src/components/app-bar/AppBar.stories.tsx
✔ ++ /Users/desmondjones/code/github.com/ignw/pge-moonshot-client/src/components/app-bar/AppBar.test.tsx
➜ pge-moonshot-client git:(master) ✗

```
