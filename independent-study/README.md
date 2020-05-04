# React.js Vs. Vue.js JavaScript platform

## Introduction of these two different platform JSX Vs. Vue instance

[Ref 1 for JSX](https://reactjs.org/docs/introducing-jsx.html)
JSX is a HTML-tag-like syntax extension to **JS**
For example,

```js
const element = <h1>hello, world!</h1>;
```

[Ref 2 Vue](https://vuejs.org/v2/guide/)
Vue instance was inititalized in **JS** with basis properties, such as **el**, **data** etc.
For example,

```js
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
```

## Naming convention JSX (class within expression tag) Vs Vue (component naming and custom event naming)

[Ref 3 for JSX class](https://reactjs.org/docs/introducing-jsx.html)
Attributes inside a JSX tag uses **camelCase**
For example,

```js
const element = <div tabIndex="0"></div>;
```

[Ref 4 for Vue component](https://vuejs.org/v2/guide/components.html)
Id of the components are suggested use **multiword PascalCase**
For example,

```js
Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});
```

## Elements rending React.js (JSX & ReactDOM.render()) Vs. Vue.js (data property)

[Ref 5 for React element rendering](https://reactjs.org/docs/rendering-elements.html)
For example,

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

[Ref 6 for Vue element rendering](https://vuejs.org/v2/guide/index.html)
For example,

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
```

## conditional rendering and Event handlding in React.js Vs. Vue.js

[Ref 7 for React conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
For example,

```js
render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
```

[Ref 8 for Vue conditional rendering](https://vuejs.org/v2/guide/conditional.html)
For example,

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

## Components in React.js Vs. Vue.js

[Ref 9 for compoents in React](https://reactjs.org/docs/forms.html)
For example,

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

[Components in Vue](https://vuejs.org/v2/guide/components.html)
For example,

```js
Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `,
});
```

## Unique about React

1. JSX-- it is a very HTML-similar (tag) syntax that could embed Javacript inside with curly braces. In Vue.js, the concept of component supersede JSX.

2. declare a component either in function or class
   [For example](https://reactjs.org/docs/components-and-props.html) ,

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

or

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

3. Local state concept was first introduced in component. Constructor in class (component) is used to initialized the _this.state_
   [For example](https://reactjs.org/docs/state-and-lifecycle.html)

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## Summary

1. The concept of components in React.js is very similar to the concept of component in Vue.js in terms of expression.
2. The way of defining a componet in React.js could be a function or a class. Class concept wasn't used in Vue.js component definition.
3. "getElementbyId" still exist for rendering elements. Vue.js gets rid of this rendering process and element could be used insdie HTML with curly braces or components
4. Both Vue.js and React.js could perform conditional rendering, listing with unique keys, forms and lifecycle hooks in different syntax format.
