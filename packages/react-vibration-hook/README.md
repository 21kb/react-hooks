# `@21kb/react-vibration-hook`

> React hook to use the Vibration API

## Usage

```jsx
const useVibration = require('react-vibration-hook');

function Component() {
  const [vibrate, vibration] = useVibration();

  return (
    <div>
      <button onClick={() => vibrate()}>Vibrate for 200ms (the default)</button>
      <button onClick={() => vibrate(350)}>Vibrate for 350ms</button>
      <button onClick={() => vibrate([350, 200, 400, 200, 450, 200, 500])}>Vibrate for 350ms, then pause 200ms, and so on...</button>
    </div>
  )
}
```

## License

MIT
