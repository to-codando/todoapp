import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'


export const appNote = (element) => {

  const state = observableFactory({})

  const props =  observableFactory({
    length:0,
    message: '',
    title:''
  })

  const children = () => []


  const events = ({on, queryOnce, queryAll, methods}) => ({})

  const methods = () => ({})

  return {
    element,
    state,
    props,
    template,
    styles,
    events,
    methods,
    children
  }
};
