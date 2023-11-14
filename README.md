# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




New comments:
Prefer using function components over class components.
Props are Immutable. To change, use state. Props get passed ti the component, whereas state is managed within the component and hence the component has full control and can be changed.
    Can accces state in Function components as UseState Hook whereas use this.state in class components.

DOs and DONTs
1. Never change a state directly for it will not render on the browser. Always use the setState method.
2. If you want to execute some code after a change of state, use the callback function within the setstate function. This is because the set state function is asyncronour. If the function is outside the setstate, it might execute before the state is changed.
3. Never run multiple calls to a change state simulteneously. React may group multiple setstate calls to one for improved perfomance. The updated value does not carry over to the next call. To prevent this, always use a function to check the previous state to update the current.


Event handlers are functions and not function calls. They should therefore becalled without parenthesis as:
    onClick = {clickHandler} and not onClick = {clickHandler()}


Binding Event Handlers:
The this keyword when used in a function, can often return undefined when  logged to the console. There is therefore need to do some binding to ensure that it works as expected when referenced. Read JS docs on the this keyword.
Can do the binding as: 
1. when calling the function i.e., onClick = {this.clickHandler.bind(this)} (Binding in Render)
2. However, 1 above makes the component to rerender everytime a state changes and can be troublesome on large applications. We therefore need to use arrow functions in the render method. by calling the event handler in the arrow function body as onClick={() => this.ClickHandler()} (Arrow function in render)
3. 2 above also has perfomance implications on some scenarios. The best is to bind the event handler in the constructor. Can be done using this.ClickHandler = this.ClickHandler.Bind(this)
4. Can also use an arrow function as a class property

Conditional Rendering can be achieved by:
1. Using If/else. Note that if/else does not work within JSX. Therefore you need multiple returns depending on the number of conditions being validated.
2. Use element Variables. Helps render part of or the whole component.
3. Use ternary Conditional operator - It can be used inside JSX.
4. Short Circuit Operator either return something or nothing. A virsion of ternary.

To render a list, one needs a key. But some lists e.g., names = ['Bruce', 'Clark', 'Diana'] do not have key and value structure. For such one can use index as key to render them to the UI as nameList = names.map((name,index) => <h2 key={index}> {index} {name}</h2>). Using the index as key does not alter the values when trying to sort in descending or ascending order. It does not also change the values if you add a new item at the begining of a list. This is the challenge when using the index as key to list items.
However the index can be used as a key provided you meet certain conditions:
1. Items in list do not have a unique id.
2. The list is static and does not change. Not adding or removing list
3. The list will never be filtered or reordered.
If meets or the three, you can use the index as key. Index as key should be the last resort and should be avoided as much as possible.

\Styling React Components:
1. CSS stylesheet
    To use multiple classes you need to specify template literals using back ticks as:
    <h1 className={`${className} font-xl`}>
2. Inline Styling
   Inline styling is not specified as a string but as an object whose key is a camel cased version of the styling and the valuea string:
   const heading = {
    fontSize: '72px',
    color: blue
   }
3. CSS Modules
    There is a file naming convention to be used. It must be prefixed by .module.css. E.g., in the source folder you can create, appStyles.css and appStyles.module.css. Importing a module stylesheet is abit different from a normal stylesheet. A normal stylesheet is imported directly whereas the module stylesheet is import similar to how you import a react as import styles from './appStyles.module.css';
    The normal css applies to the child components. However, the css modules, since it is named as styles, does not automatically get referenced in the child components.
4. CSS in JS Libraries


React Class Lifecycle Methods:
Only exisits in classes. For 16.1 includes:
1. Mounting - called when instance of a component is being created and inserted into the DOM. Includes 4 methods: constructor, static getDerivedStateFromProps, render and componentDidMount.
2. Updating - Called when component is being re-rendered as a result of changes to either props or state. Includes 5 methods: static getDerivedStateFromProps, shouldComponentUpdate,render, getSnapshotBeforeUpdate and componentDidUpdate
3. unmounting - Called when removing a component from the DOM. Includes one method: componentWillUnmount
4. Error Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component. includes 2 methods: static getDerivedStateFromError and componentDidCatch

Mounting:
a. Constructor - Used to initiate state and for binding the event handlers. Use the super(props) to call the base class constructor. directly overwrites this.state elsewhere must use the this.setState. Cannot make ajax calls or http calls here

b. static getDerivedStateFromProps (props, state) - used when the state of the component depends on the changes in props over time. Can not call this.setState at this point since it is static. Only return object with new state of the component.

c. render - only required method in the class. read props and state and return JSX. Do not change state, or interact with DOM or make ajaz calls. Can also execute children components here.

d. componentDidMount() - only called once once a component and all its children have been rendered to the DOM.

 Can interact with the DOM or perfom ajax calls to load data



 Update:
 a. static getDerivedStateFromProps(props, state) - called everytime a component is re-rendered, cannot call HTTP requests

 b.shouldComponentUpdate(nextProps, nextState) - dictates if the component should re-render or not. By default all class components will rerender whenever props or state changes. This property can be used to prevent this from happening. Therefore used for perfomance optimization. Rarely used.

 c. render() - required, read props and state etc.

 d. getSnapshotBeforeUpdate(prevProps, prevState) - rarely used, called right before changes from virtual DOM are to be reflected in the DOM, Capture some infor from the DOM, either return a value or null. returned value will be passed as third parameter ti the next method.

e. componentDiUpdate(prevProps, prevState, Snapshot) - Called after the render is finished in the re-render cycles. Can cause side effects, i.e can be used for http or ajax requests. Called once after component re-renders.

Render and componentDidUpdate are the most used methods during the update lifecycle, the rest should be used sparingly.


Unmounting:
a. componentWullUnmount() Invoked before component is unmounted and destroyed. Used to cancel any network requests, removing event handlers, canceling any subscriptions and also invalidating timers. Cannot call the setState method here.

ErrorHandling:
a. static getDrivedStateFromError(error) 
b. componentDidCatch(error, info)

Fragments:
Note: if you have more than one line of code/elements, then they must be enclosed with a single html tag which mostly is the div tag. The div tag adds an extra node when inspecting elments on the browser. To prevent such, you can replace the <div> with <React.Fragment>
The use of <React.Fragment> can therefore allow one to have a table as a parent component and columns as child components without throwing an error of td not being a subset of a div element.

They also allow the passing of key attributes when rendering lists of items. Key is the only attribue that can be passed to a React.Fragement as:
const items = []

<React.Fragment>
{
    items.map(item => (
        <React.Fragment key = {item.id}>
        <h1>Title</h1>
        <p>{item.title}</p>
        </React.Fragment>
    ))
}
<React.Fragment>

The <React.Fragement> <React.Fragment> can be written as <> </>. However, can not pass t a key attribute to the later.

One can create a class by extending component or pure component classes. 
1. The regular component does not implement the shouldComponentUpdate method. It always returns true always whereas a pure component implements shouldComponentUpdate with a shallow props and state comparison
    Shallow comparison(SC)
a. Primitive Types - a(SC)b returns true if a and b have the same value and are of the same type e.g., if 
                    a = string 'Daniel'
                    b = string 'Daniel' 
                    the a (sc) b returns true.

b. Complex Types - a(sc)b returns true if a and b reference the exact same object.
                   var a = [1,2,3];
                   var b = [1,2,3];
                   var c = a;

                   var ab_eq = (a === b)// false
                   var ac_eq = (a === c)// true

So for pure components, they only re-render if there is a difference between the prevstate and the current state.

2. If the parent does not re-render the children will not re-render.
3. Using purecomponent can give you a perfomance boost in some scenarios.
4. Pure components never mutate. Always return a new list or array when dealing with pure components as opposed to pushing an element into the rendered list or array.
5. It is safer using regular components as oppossed to purecomponents unless there is a perfomance hitch that might need optimizing.

What purecomponents is to class components, memo is to fucntional components. React.memo was introduce from React 16.6.* and does not work with lower versions.







