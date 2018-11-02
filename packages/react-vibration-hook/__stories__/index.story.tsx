import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

// @ts-ignore
import README from '../README.md';
import useVibration from '../src/index';

const stories = storiesOf('useVibration', module);

stories.addDecorator(withKnobs).addDecorator(withReadme(README));

const Component = () => {
  const vibrate = useVibration(200);

  return (
    <div>
      <div>
        This only works on mobile devices AFAIK. Try running this in a
        compatible browser on your mobile device.
      </div>
      <button onClick={vibrate()}>Vibrate for 200ms</button>
    </div>
  );
};

stories.add('Demo', () => <Component />);
