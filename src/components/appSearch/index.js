import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'


export const appSearch = ({element}) => {

  const state = observableFactory({
    term:''
  })

  const children = () => [ ]
  const hooks = () => ({ afterOnInit () { state.set({term: 'ok'})}})

  const events = ({on, queryOnce, queryAll, methods}) => ({ })

  const methods = () => ({ })

  return {
    state,
    template,
    styles,
    events,
    methods,
    children,
    hooks
  }
};
