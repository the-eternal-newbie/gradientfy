import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withKnobs, color } from '@storybook/addon-knobs';

import Circle from './Circle';
import Blob from './Blob';

storiesOf('Geometry', module)
  .addDecorator(withKnobs)
  //   .addParameters({
  //     readme: {
  //       content: README,
  //     },
  //   })
  .addDecorator(addReadme)
  .add('Circle', () => {
    return <Circle color={color('Custom color', '')} radius={4} />;
  })
  .add('Blob', () => {
    return <Blob />;
  });
