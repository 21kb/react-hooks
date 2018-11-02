# `@21kb/react-online-status-hook`

> React hook to subscribe to `offline/online` events

## Usage

```jsx
import {
  useOfflineStatus,
  useOnlineStatus
} from '@21kb/react-online-status-hook';

const OfflineComponent = () => {
  const status = useOfflineStatus();

  return <div>You are currently {status ? 'online' : 'offline'}.</div>;
};

const OnlineComponent = () => {
  const status = useOnlineStatus();

  return <div>You are currently {status ? 'online' : 'offline'}.</div>;
};

```

__NOTE__: `useOfflineStatus` and `useOnlineStatus` export the same Hook (`useOfflineOnlineStatus`).

## License

MIT
