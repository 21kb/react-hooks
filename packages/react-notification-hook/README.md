# `@21kb/react-notification-hook`

> React hook to use the Notifications API

## Usage

```jsx
import useNotification from '@21kb/react-notification-hook';

const Component = () => {
  const notify = useNotification({
    title: '💡 Test notification!',
    options: {
      dir: 'rtl',
    }
  });

  return (
    <button onClick={notify()}>Notify me!</button>
  );
};
```

## License

MIT
