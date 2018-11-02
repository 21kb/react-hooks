import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

// @ts-ignore
import README from '../README.md';
import useOrientation from '../src/index';

const stories = storiesOf('useOrientation', module);

stories.addDecorator(withKnobs).addDecorator(withReadme(README));

const Component = () => {
  const state = useOrientation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

stories.add('Demo', () => <Component />);
