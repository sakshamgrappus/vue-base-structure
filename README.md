# vue-base-structure

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
# Important instructions:

## ESLint:

Have ESLint setup properly on your machine. If using VSCode, enable formatOnSave in your editor settings.

Some useful references for eslint setup:

1.  https://alligator.io/vuejs/vue-eslint-prettier/
2.  https://alligator.io/vuejs/vue-eslint-plugin/

## CSS:

1.  _Variables and mixins:_ Use minimal number of scss variables and mixins, should be super-simple ones and self expressive through names.
2.  _Framework:_ We'll be using Tailwind, use the css utilities provided by tailwind where applicable. While using utilities ensure that components are reusable easily.
3.  _Inline styles:_ there should be no inline styles, unless you need to implement dynamic styles with javscript.

## Functions:

No function should be more than 40 lines of code. Each function should clearly depict it's intention through the name given to it (what it would be doing).
If the function is slightly longer, use comments at the top of function to show it's usage.

## Layouts:

Layouts are container components in vue, which are used across multiple routes. There should be no logic (or minimal logic) in layouts.

## Naming conventions:

- File names: camelCasing
- Folder names: camelCasing
- variable names: camelCasing
- method names: camelCase

---

HTML and Stylesheet
Component's parent Class name should be named prefix with component and followed by its file name.

For example: file name is header.html and its parent container class should be "component-header" and same goes with the stylesheet.

---

## Store

examples:

- actions : requestDeleteUser(), requestCreateUser(), requestUpdateUser(), requestGetUser()
- mutations : setUser(), setUserDetails()
- state : userList, userDetails,

## Services

examples:

- getUserDetails(),postUserDetails(), updateUserDetails(), deleteUserDetails()

---

## variables

examples:

- boolean : isOpen, isUser
