---
id: freeCodeCamp-React-and-Redux
title: React and Redux
---



## Introduction to the React and Redux Challenges

[React and Redux | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/)

This series of challenges introduces how to use Redux with React.

In a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.

-----



## 1. Getting Started with React Redux

[Learn React and Redux: Getting Started with React Redux | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/getting-started-with-react-redux)

This series of challenges introduces how to use Redux with React. First, here's a review of some of the key principles of each technology. React is a view library that you provide with data, then it renders the view in an efficient, predictable way. Redux is a state management framework that you can use to simplify the management of your application's state. Typically, in a React Redux app, you create a single Redux store that manages the state of your entire app. Your React components subscribe to only the pieces of data in the store that are relevant to their role. Then, you dispatch actions directly from React components, which then trigger store updates.
Although React components can manage their own state locally, when you have a complex app, it's generally better to keep the app state in a single location with Redux. There are exceptions when individual components may have local state specific only to them. Finally, because Redux is not designed to work with React out of the box, you need to use the `react-redux` package. It provides a way for you to pass Redux `state` and `dispatch` to your React components as `props`.
Over the next few challenges, first, you'll create a simple React component which allows you to input new text messages. These are added to an array that's displayed in the view. This should be a nice review of what you learned in the React lessons. Next, you'll create a Redux store and actions that manage the state of the messages array. Finally, you'll use `react-redux` to connect the Redux store with your component, thereby extracting the local state into the Redux store.

------

Start with a `DisplayMessages` component. Add a constructor to this component and initialize it with a state that has two properties: `input`, that's set to an empty string, and `messages`, that's set to an empty array.

> The `DisplayMessages` component should render an empty `div` element.
> The `DisplayMessages` constructor should be called properly with `super`, passing in `props`.
> The `DisplayMessages` component should have an initial state equal to `{input: "", messages: []}`.

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
  }
  // Change code above this line
  render() {
    return <div />
  }
};
```

-----



## 2. Manage State Locally First

[Learn React and Redux: Manage State Locally First | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/manage-state-locally-first)

Here you'll finish creating the `DisplayMessages` component.

------

First, in the `render()` method, have the component render an `input` element, `button` element, and `ul` element. When the `input` element changes, it should trigger a `handleChange()` method. Also, the `input` element should render the value of `input` that's in the component's state. The `button` element should trigger a `submitMessage()` method when it's clicked.
Second, write these two methods. The `handleChange()` method should update the `input` with what the user is typing. The `submitMessage()` method should concatenate the current message (stored in `input`) to the `messages` array in local state, and clear the value of the `input`.
Finally, use the `ul` to map over the array of `messages` and render it to the screen as a list of `li` elements.

> The `DisplayMessages` component should initialize with a state equal to `{ input: "", messages: [] }`.
> The `DisplayMessages` component should render a `div` containing an `h2` element, a `button` element, a `ul` element, and `li` elements as children.
> `.map` should be used on the `messages` array.
> The `input` element should render the value of `input` in local state.
> Calling the method `handleChange` should update the `input` value in state to the current input.
> Clicking the `Add message` button should call the method `submitMessage` which should add the current `input` to the `messages` array in state.
> The `submitMessage` method should clear the current input.

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }
  submitMessage(){
    this.setState({
      input:'',
      messages: [...this.state.messages, this.state.input]
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Add message</button>
        <ul>
            {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

