# what-is
An out-of-box toolset that help you explore your react project.

# Usage
## withPropertyDashboard

To gain insights into your component's properties and their relationships,

```js
import withPropertyDashboard from 'what-is/exploration/withPropertyDashboard';

// An example functional component
function MyComponent() {
  // Component logic here
}

// Export the component with the property dashboard applied
export default withPropertyDashboard(MyComponent, {toConsole: true, toDashboard: true});
```

## useHookDashboard

To gain insights into your component's properties and their relationships,

```js
import useHookDashboard from 'what-is/exploration/useHookDashboard';
import useCustomHook from 'path/to/custom/hook';

const MyComponent = () => {
  const data = useHookDashboard('useCustomHook', useCustomHook());

  // Implement the rest of your component logic using 'data'.

  return (
    // Your JSX here
  );
};

export default MyComponent;
```
