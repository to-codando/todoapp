import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

const appNotFound = () => {
    
    const state = observableFactory({
      title: '404 Oops..',
      text: 'this is another page...'
    });

    const hooks = () => ({});

    return {
      state,
      template,
      styles,
      hooks,
    };
}

export { appNotFound }