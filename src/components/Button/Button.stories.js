import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Buttons/Button',module)
.add('add', ()=><Button add>add</Button>)
.add('add', ()=><Button add>add</Button>)
.add('delete', ()=><Button del>del</Button>)
.add('edit', ()=><Button add>add</Button>)
.add('update', ()=><Button update>upd</Button>)
.add('cancel',()=><Button cancel>X</Button>);
