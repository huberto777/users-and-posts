import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input/Input', module)
  .add('normal', () => <Input placeholder="add user" />)
  .add('search', () => <Input placeholder="search" search />);