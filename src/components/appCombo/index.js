import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'


export const appCombo = () => {

  const state = observableFactory({ })

  const children = () => []


  const events = ({on, queryOnce, queryAll, methods}) => ({})

  const methods = () => ({})

  return {
    state,
    template,
    styles,
    events,
    methods,
    children
  }
};
