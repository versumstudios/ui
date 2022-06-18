import { Meta, Story } from '@storybook/react';

import { AudioPlayer, IAudioPlayer } from './index';

export default {
  title: 'components/audio-player',
  component: AudioPlayer,
} as Meta;

export const Interactive: Story<IAudioPlayer> = (props) => <AudioPlayer {...props} />;
