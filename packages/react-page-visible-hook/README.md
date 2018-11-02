# `@21kb/react-page-visible-hook`

> React hook to use the Page Visibility API

## Install

### npm

```shell
npm install --save @21kb/react-page-visible-hook
```

### Yarn

```shell
yarn add @21kb/react-page-visible-hook
```

## Usage

```jsx
import useVisible from '@21kb/react-page-visible-hook';

// import App from './App';
// import Loader from './Loader';

const Component = () {
  const state = useVisible();
  const {visibilityState} = state;

  return (
    {visibilityState === 'prerender' ? <Loader /> : <App />}
  );
};
```

## License

MIT
