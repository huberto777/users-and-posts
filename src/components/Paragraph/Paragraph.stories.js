import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraphs/Paragraph', module).add('Normal', () => <Paragraph>Hello !!!</Paragraph>);
