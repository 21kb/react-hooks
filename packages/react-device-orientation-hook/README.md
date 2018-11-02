# `@21kb/react-device-orientation-hook`

> React hook for subscribing to the `deviceorientation` event

## Install

### npm

```shell
npm install --save @21kb/react-device-orientation-hook
```

### Yarn

```shell
yarn add @21kb/react-device-orientation-hook
```

## Usage

```jsx
import useOrientation from '@21kb/react-device-orientation-hook';

// import App from './App';
// import {Col, Container, Grid, Row} from './Grid';

const Component = () {
  const state = useOrientation({
    angle: 0,
    type: 'landscape-primary',
  });
  const {angle, type} = state;

  return (
    <Container fluid>
      {if (type === 'landscape-primary') {
        <Grid lg>
          <Row>
            <Col />
            <Col />
            <Col />
          </Row>
        </Grid>
      } else {
        <Grid sm>
          <Row>
            <Col />
            <Col />
            <Col />
          </Row>
        </Grid>
      }}
    </Container>
  );
};
```

## License

MIT
