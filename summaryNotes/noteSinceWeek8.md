# Single File Component (SFC)

1. _Modularity_
2. _Reusablity_

- In order to work with SFC, we need some _Special processsor_ or _Build system_ to take the SFC and compile it to the code that the _browser_ understand

## Naming of the SFC

1. _PascalStyling_ eg. RoundDetail
2. ".vue" extension eg. RoundDetail.vue
3. A SFC includes _template_, _Javascript_ and _CSS_

Here is an [example from Vuejs.org](https://codesandbox.io/s/github/vuejs/vuejs.org/tree/master/src/v2/examples/vue-20-single-file-components?file=/Hello.vue:0-235)

```html
<template>
  <p>{{ greeting }} World!</p>
</template>
```

```js
<script>
module.exports = {   //what is the difference b/w module.exports={option} and exports default {option}
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>
```

```css
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```

## Build system Introdution

1. pre-processing
   .._ HTML templating language **Pug** **Haml** **Slim**
   .._ CSS extension language **SASS** **LESS**
   .._ JS scripts w/ features/syntax
   .._ Bundling/minification tools to optimize page load speed
2. development optimizations
   .._ Hot reloading
   .._ Code linting
   ..\_ Dependency management (outside code API and libraries)

## Two ways of approaching Vue

1. Integrated, with exsiting projects
2. Comprehensive, start from the ground up
   .._ **NPM**, node package manager, command line base management program, manageing dependency, pulling outside code within the project.
   .._ **Vue CLI**, command line programe to generate the scaffold for comprehensive projects.
   .._ **Laravel Mix**, the abstration of the programe **webpack**
   .._ **webpack**, the program that give access to functionality of pre-processing, bundling, and minification etc.
   ..\* **babel**, a plugin to webpack to compiling modern ES6 JS coding into code that the browser can understand

# NPM

- A config file, **package.json** lising all dependencies.
- A directory, **node_modules** include all packages installed.

[For example](https://hesweb.dev/e28/notes/vue/package-management)

```
"dependencies": {
    "vue": "2.6.11", //specifically identified version number
    "bootstrap": "^4.1.0" //version format major.minor.patch //carrot character indicate the major version of the software and flexible with the minor and patch
    // etc...
},
```

# NPM registry, a very important resource [link](https://www.npmjs.com/package/packages)

# NPM installation, a bundle with Node.js [link](https://nodejs.org/en/download)

- command to check in terminal

```
$ npm
```

- make sure the npm command is available in our command line program

```
$ sudo nano /etc/paths
```

- add the following two lines in the paths file

```
/usr/local/bin/node
/usr/local/bin/npm
```

- after installation, **close and reopen the command line program (termial)**
