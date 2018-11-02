import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

// @ts-ignore
import README from '../README.md';
import useNotification from '../src/index';

const stories = storiesOf('useNotification', module);

stories.addDecorator(withKnobs).addDecorator(withReadme(README));

const Component = () => {
  const notify = useNotification({ title: '💡 Test notification!' });

  return (
    <div>
      <button onClick={notify()}>Notify me!</button>
    </div>
  );
};

stories.add('Demo', () => <Component />);
