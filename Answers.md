1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array methods like map() ,filter(),concat() and spread operators do not produce side effects and do not 
mutate the original array but create a new array depending on the given conditions. We use spread operators and object.assign method to create a new object while extending the properties of another object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions can be sent when a user presses a button, load an app, etc. They can contain information that you want to add to the state.

Reducers are functions which listen for actions. When it hears that an action has been sent to it, it updates the state.They do this by adding to the existing state.   

The Store holds the Redux state and allows access and modifications to it. It’s the middleman between actions and reducers.
This can also be described as follows

 User types something -> call actionro creator with new text ->
action creator returns an action -> action sent to all reducers ->
reducers calculates new app state -> state sent to all components ->
component rerender with new state -> wait for new change -> repeat.

 Single source of truth means that the state of your whole application is stored in an object tree within a single store. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
State is nothing but the state of the application at a given point of time. Generally component state is stored locally within a component and is not accessible from other components unless it's explicitly passed as props to it's sub components.
 In redux , state is a centralised global store which is accessible to any component that subscribes to the store. This is called the application state.

1.  What is middleware?
 Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
By nature Redux is synchronous. Because of this we need to apply some middleware to extend the functionality of our Redux package to allow for things like, promises (which are asynchronous). 
Redux Thunk middleware allows you to write action creators that return a function instead of an action
object . The thunk middleware can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
1.  Which `react-redux` method links up our `components` with our `redux store`?
The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.


