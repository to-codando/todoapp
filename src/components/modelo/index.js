import { observableFactory } from 'lemejs';

import { appText } from '../appText';

import template from './template'
import styles from './styles'


const appHello = () => {

  const state = observableFactory({
    title: 'Hello World!',
    text: `Now it's with lemeJs!!!`
  })

  const children = () => [
    appText
  ]


  const events = ({on, queryOnce, queryAll, methods}) => ({
    onlcick() {
      const h1 = queryOnce('h1')
      on('click', h1, ({target}) => methods.updateState())
    }
  })

  const methods = () => ({
    updateState() {
      state.set({title: 'Crazy World!!!'})
    }
  })

  return {
    state,
    template,
    styles,
    events,
    methods,
    children
  }
};

export { appHello };
