import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withReadme } from 'storybook-readme';

// @ts-ignore
import README from '../README.md';
import { useOfflineStatus, useOnlineStatus } from '../src/index';

const stories = storiesOf('useOfflineStatus', module);

stories.addDecorator(withKnobs).addDecorator(withReadme(README));

const OfflineComponent = () => {
  const status = useOfflineStatus();

  return <div>You are currently {status ? 'online' : 'offline'}.</div>;
};

const OnlineComponent = () => {
  const status = useOnlineStatus();

  return <div>You are currently {status ? 'online' : 'offline'}.</div>;
};

stories.add('Demo (offline)', () => <OfflineComponent />);
stories.add('Demo (online)', () => <OnlineComponent />);
