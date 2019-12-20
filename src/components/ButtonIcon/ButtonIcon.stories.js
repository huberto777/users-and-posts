import React from 'react';
import { storiesOf } from '@storybook/react';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import removeIcon from 'assets/icons/rubbish-bin.svg';
import ButtonIcon from './ButtonIcon';

storiesOf('ButtonIcon/ButtonIcon', module)
  .add('edit', () => <ButtonIcon icon={penIcon} edit />)
  .add('add', () => <ButtonIcon icon={plusIcon} />)
  .add('del', () => <ButtonIcon icon={removeIcon} del />);