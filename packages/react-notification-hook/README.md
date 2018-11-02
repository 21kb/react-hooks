# `@21kb/react-notification-hook`

> React hook to use the Notifications API

## Install

### npm

```shell
npm install --save @21kb/react-notification-hook
```

### Yarn

```shell
yarn add @21kb/react-notification-hook
```

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

__NOTE__: `useNotification` assumes the user has already granted permissions.

## License

MIT
