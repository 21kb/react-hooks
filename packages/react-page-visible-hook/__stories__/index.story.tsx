// tslint:disable:no-console
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

// @ts-ignore
import README from '../README.md';
import useVisible from '../src/index';

const stories = storiesOf('useVisible', module);

stories.addDecorator(withKnobs).addDecorator(withReadme(README));

const Component = () => {
  const state = useVisible();
  console.log(state);

  return <div>Check your browser’s logs!</div>;
};

stories.add('Demo', () => <Component />);
