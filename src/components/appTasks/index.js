import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { appSearch } from '../appSearch'
import { appFilterStatus } from '../appFilterStatus';
import { appTaskList } from '../appTaskList';

export const appTasks = () => {

  const state = observableFactory({ })

  const children = () => [
    appSearch,
    appFilterStatus,
    appTaskList,
  ]

  const hooks = ({ methods }) => ({
    beforeOnInit () {

    }
  })

  const events = ({on, queryOnce, queryAll, methods}) => ({ 

  })

  const methods = () => ({

   })

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