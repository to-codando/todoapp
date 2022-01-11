import { observableFactory } from 'lemejs'

import template from './template'
import styles from './styles'

import { appHeader } from '../appHeader'

import '../../assets/styles/main.css'

/**
 * Here import your custom css files
 *   import '../assets/styles/grid.css'
 */

const appMain = () => {
  const state = observableFactory({
    title: 'App Main',
  });


  const hooks = ({ methods }) => ({ });

  const children = () => [
    appHeader
  ];

  const methods = () => ({ });

  return {
    state,
    template,
    styles,
    methods,
    children,
    hooks
  };
};

export { appMain };
