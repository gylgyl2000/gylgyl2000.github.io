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

-----



## 3. Extract State Logic to Redux

[Learn React and Redux: Extract State Logic to Redux | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/extract-state-logic-to-redux)

Now that you finished the React component, you need to move the logic it's performing locally in its `state` into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.

------

First, define an action type 'ADD' and set it to a const `ADD`. Next, define an action creator `addMessage()` which creates the action to add a message. You'll need to pass a `message` to this action creator and include the message in the returned `action`.
Then create a reducer called `messageReducer()` that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.

> The const `ADD` should exist and hold a value equal to the string `ADD`.
> The action creator `addMessage` should return an object with `type` equal to `ADD` and `message` equal to the message that is passed in.
> `messageReducer` should be a function.
> The store should exist and have an initial state set to an empty array.
> Dispatching `addMessage` against the store should immutably add a new message to the array of messages held in state.
> The `messageReducer` should return the current state if called with any other actions.

```jsx
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];
      break;

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);
```

-----



## 4. Use Provider to Connect Redux to React

[Learn React and Redux: Use Provider to Connect Redux to React | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/use-provider-to-connect-redux-to-react)

In the last challenge, you created a Redux store to handle the messages array and created an action for adding new messages. The next step is to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides its `react-redux` package to help accomplish these tasks.
React Redux provides a small API with two key features: `Provider` and `connect`. Another challenge covers `connect`. The `Provider` is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access the Redux `store` and `dispatch` functions throughout your component tree. `Provider` takes two props, the Redux store and the child components of your app. Defining the `Provider` for an App component might look like this:

```jsx
<Provider store={store}>
  <App/>
</Provider>
```

------

The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the `DisplayMessages` component. The only new piece is the `AppWrapper` component at the bottom. Use this top level component to render the `Provider` from `ReactRedux`, and pass the Redux store as a prop. Then render the `DisplayMessages` component as a child. Once you are finished, you should see your React component rendered to the page.
**Note:** React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant `Provider` for you to use in the `AppWrapper` render method.

> The `AppWrapper` should render.
> The `Provider` wrapper component should have a prop of `store` passed to it, equal to the Redux store.
> `DisplayMessages` should render as a child of `AppWrapper`.
> The `DisplayMessages` component should render an h2, input, button, and `ul` element.

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
  // Change code above this line
};
```

-----



## 5. Map State to Props

[Learn React and Redux: Map State to Props | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/map-state-to-props)

The `Provider` component allows you to provide `state` and `dispatch` to your React components, but you must specify exactly what state and actions you want. This way, you make sure that each component only has access to the state it needs. You accomplish this by creating two functions: `mapStateToProps()` and `mapDispatchToProps()`.
In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. Once these functions are in place, you'll see how to use the React Redux `connect` method to connect them to your components in another challenge.
**Note:** Behind the scenes, React Redux uses the `store.subscribe()` method to implement `mapStateToProps()`.

------

Create a function `mapStateToProps()`. This function should take `state` as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via `props`. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property `messages` in the object that's being returned, and set it to `state`.

> The const `state` should be an empty array.
> `mapStateToProps` should be a function.
> `mapStateToProps` should return an object.
> Passing an array as state to `mapStateToProps` should return this array assigned to a key of `messages`.

```jsx
const state = [];

// Change code below this line
const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}
```

------



## 6. Map Dispatch to Props

[Learn React and Redux: Map Dispatch to Props | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/map-dispatch-to-props)

The `mapDispatchToProps()` function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. It's similar in structure to the `mapStateToProps()` function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, which become component `props`. However, instead of returning a piece of `state`, each property returns a function that calls `dispatch` with an action creator and any relevant action data. You have access to this `dispatch` because it's passed in to `mapDispatchToProps()` as a parameter when you define the function, just like you passed `state` to `mapStateToProps()`. Behind the scenes, React Redux is using Redux's `store.dispatch()` to conduct these dispatches with `mapDispatchToProps()`. This is similar to how it uses `store.subscribe()` for components that are mapped to `state`.
For example, you have a `loginUser()` action creator that takes a `username` as an action payload. The object returned from `mapDispatchToProps()` for this action creator would look something like:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

------

The code editor provides an action creator called `addMessage()`. Write the function `mapDispatchToProps()` that takes `dispatch` as an argument, then returns an object. The object should have a property `submitNewMessage` set to the dispatch function, which takes a parameter for the new message to add when it dispatches `addMessage()`.

> `addMessage` should return an object with keys `type` and `message`.
> `mapDispatchToProps` should be a function.
> `mapDispatchToProps` should return an object.
> Dispatching `addMessage` with `submitNewMessage` from `mapDispatchToProps` should return a message to the dispatch function.

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message)=>{
      dispatch(addMessage(message))
    }
  }
}
```

-----



## 7. Connect Redux to React

[Learn React and Redux: Connect Redux to React | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/connect-redux-to-react)

Now that you've written both the `mapStateToProps()` and the `mapDispatchToProps()` functions, you can use them to map `state` and `dispatch` to the `props` of one of your React components. The `connect` method from React Redux can handle this task. This method takes two optional arguments, `mapStateToProps()` and `mapDispatchToProps()`. They are optional because you may have a component that only needs access to `state` but doesn't need to dispatch any actions, or vice versa.
To use this method, pass in the functions as arguments, and immediately call the result with your component. This syntax is a little unusual and looks like:

`connect(mapStateToProps, mapDispatchToProps)(MyComponent)`

**Note:** If you want to omit one of the arguments to the `connect` method, you pass `null` in its place.

------

The code editor has the `mapStateToProps()` and `mapDispatchToProps()` functions and a new React component called `Presentational`. Connect this component to Redux with the `connect` method from the `ReactRedux` global object, and call it immediately on the `Presentational` component. Assign the result to a new `const` called `ConnectedComponent` that represents the connected component. That's it, now you're connected to Redux! Try changing either of `connect`'s arguments to `null` and observe the test results.

> The `Presentational` component should render.
> The `Presentational` component should receive a prop `messages` via `connect`.
> The `Presentational` component should receive a prop `submitNewMessage` via `connect`.

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)
```

-----



## 8. Connect Redux to the Messages App

[Learn React and Redux: Connect Redux to the Messages App | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/connect-redux-to-the-messages-app)

Now that you understand how to use `connect` to connect React to Redux, you can apply what you've learned to your React component that handles messages.
In the last lesson, the component you connected to Redux was named `Presentational`, and this wasn't arbitrary. This term *generally* refers to React components that are not directly connected to Redux. They are simply responsible for the presentation of UI and do this as a function of the props they receive. By contrast, container components are connected to Redux. These are typically responsible for dispatching actions to the store and often pass store state to child components as props.

------

The code editor has all the code you've written in this section so far. The only change is that the React component is renamed to `Presentational`. Create a new component held in a constant called `Container` that uses `connect` to connect the `Presentational` component to Redux. Then, in the `AppWrapper`, render the React Redux `Provider` component. Pass `Provider` the Redux `store` as a prop and render `Container` as a child. Once everything is setup, you will see the messages app rendered to the page again.

> The `AppWrapper` should render to the page.
> The `Presentational` component should render to page.
> The `Presentational` component should render an `h2`, `input`, `button`, and `ul` elements.
> The `Presentational` component should receive `messages` from the Redux store as a prop.
> The `Presentational` component should receive the `submitMessage` action creator as a prop.

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
```

-----



## 9. Extract Local State into Redux

[Learn React and Redux: Extract Local State into Redux | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/extract-local-state-into-redux)

You're almost done! Recall that you wrote all the Redux code so that Redux could control the state management of your React messages app. Now that Redux is connected, you need to extract the state management out of the `Presentational` component and into Redux. Currently, you have Redux connected, but you are handling the state locally within the `Presentational` component.

------

In the `Presentational` component, first, remove the `messages` property in the local `state`. These messages will be managed by Redux. Next, modify the `submitMessage()` method so that it dispatches `submitNewMessage()` from `this.props`, and pass in the current message input from local `state` as an argument. Because you removed `messages` from local state, remove the `messages` property from the call to `this.setState()` here as well. Finally, modify the `render()` method so that it maps over the messages received from `props` rather than `state`.
Once these changes are made, the app will continue to function the same, except Redux manages the state. This example also illustrates how a component may have local `state`: your component still tracks user input locally in its own `state`. You can see how Redux provides a useful state management framework on top of React. You achieved the same result using only React's local state at first, and this is usually possible with simple apps. However, as your apps become larger and more complex, so does your state management, and this is the problem Redux solves.

> The `AppWrapper` should render to the page.
> The `Presentational` component should render to page.
> The `Presentational` component should render an `h2`, `input`, `button`, and `ul` elements.
> The `Presentational` component should receive `messages` from the Redux store as a prop.
> The `Presentational` component should receive the `submitMessage` action creator as a prop.
> The state of the `Presentational` component should contain one property, `input`, which is initialized to an empty string.
> Typing in the `input` element should update the state of the `Presentational` component.
> Dispatching the `submitMessage` on the `Presentational` component should update Redux store and clear the input in local state.
> The `Presentational` component should render the `messages` from the Redux store.

```jsx
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' // ,
      // messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    // this.setState((state) => ({
      // input: '',
      // messages: state.messages.concat(state.input)
    // }));
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {/* {this.state.messages.map( (message, idx) => { */}
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
```

-----



## 10. Moving Forward From Here

[Learn React and Redux: Moving Forward From Here | freeCodeCamp.org](https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/moving-forward-from-here)

Congratulations! You finished the lessons on React and Redux. There's one last item worth pointing out before you move on. Typically, you won't write React apps in a code editor like this. This challenge gives you a glimpse of what the syntax looks like if you're working with npm and a file system on your own machine. The code should look similar, except for the use of `import` statements (these pull in all of the dependencies that have been provided for you in the challenges). The "Managing Packages with npm" section covers npm in more detail.
Finally, writing React and Redux code generally requires some configuration. This can get complicated quickly. If you are interested in experimenting on your own machine, the [Create React App](https://github.com/facebookincubator/create-react-app) comes configured and ready to go.
Alternatively, you can enable Babel as a JavaScript Preprocessor in CodePen, add React and ReactDOM as external JavaScript resources, and work there as well.

------

Log the message `'Now I know React and Redux!'` to the console.

> The message `Now I know React and Redux!` should be logged to the console.

```jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log('Now I know React and Redux!')
```

