1. What is the difference between Component and PureComponent? give an
example where it might break my app.

The difference is that PureComponent handles shouldComponentUpdate method by itself.
The example when it breaks is mutating the the props in parent component. It would not detect the change as it only does shallow compare, and if reference does not change - it would not rerender.

2. Context + ShouldComponentUpdate might be dangerous. Can think of
why is that?

If i understood the question correctly, the danger would be that poorly written shouldComponentUpdate may stop re-rendering the component (and it's children) on context change. We need to consider changes in context when deciding on returning false from shouldComponentUpdate.

3. Describe 3 ways to pass information from a component to its PARENT.
a)i) Function-based components: In parent we use hook useState and get setter for child component as the second array element.  Then we pass the setter to the child in child's props as the callback method. The child calls this method with the data as a parameter
  ii) Class-based components: callback method. Parent would have handler, child will call this.props.callback method, passing data as a parameter.
b) We can use render props pattern.
c) We can use any state management - child would put result to the global state, and the parent, being subscribed/connected to the state will see it.

4. Give 2 ways to prevent components from re-rendering.

shouldComponentUpdate  - return false
React.memo(MyComp, true)

5. What is a fragment and why do we need it? Give an example where it
might break my app.

To avoid extra div as a parent element to the rendered fragment in JSX. 

6. Give 3 examples of the HOC pattern.
Redux connect, MaterialDesign withStyle, recompose lifecycle

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

In promises throw and reject produce exception that should be caught in .catch() that may reside between or after .then in chain.
In callbacks we have error as a parameter, so we can check it with if
In async..await we can have try block around the await or multiple awaits.

8. How many arguments does setState take and why is it async.
It's async to avoid extra rerenders. 
It has 2 arguments, the function to update the state and optional callback.

9. List the steps needed to migrate a Class to Function Component.
The fastest way is to use recompose lifecycle and move all the logic to appropriate lifecycle methods-keys
The most correct way is to use:
useEffect - instead of componentDidMount / componentDidUpdate / componentWillUnmount
useState / useReducer - instead of all setStates
React.memo - instead of shouldComponentUpdate
useCallback - instead of all callbacks bound in constructor

10. List a few ways styles can be used with components.
className / import css file
css modules / className={classes.class}
material design useStyle - hook
material design withStyle - HOC

11. How to render an HTML string coming from the server
dangerouslySetInnerHTML parameter of div under __html key
 
