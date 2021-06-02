import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';

import README from './README.md';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      content: README,
    },
  })
  .addDecorator(addReadme)
  .add('default', () => {
    const hasOnClick = boolean('Has onClick', true);

    return (
      <Button
        onClick={hasOnClick ? action('clicked') : undefined}
        color={color('Custom color', '')}
        disabled={boolean('Disabled', false)}
      >
        {text('Label', 'I am a button')}
      </Button>
    );
  });
