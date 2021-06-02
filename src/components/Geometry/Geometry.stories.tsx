import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withKnobs, color } from '@storybook/addon-knobs';

import Circle from './Circle';
import Square from './Square';
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
    return <Circle color={color('Custom color', '')} radius={'200px'} />;
  })
  .add('Square', () => {
    return (
      <Square
        color={color('Custom color', '')}
        style={{ width: '200px', height: '200px', borderRadius: 0 }}
      />
    );
  })
  .add('Blob', () => {
    return <Blob />;
  });
