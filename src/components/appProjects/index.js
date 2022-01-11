import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { appNote } from '../appNote';
import { appSearch } from '../appSearch';

import { popupEventDrive } from '../appPopup';


import { store } from '../../store';

export const appProjects = () => {

  const state = observableFactory({
    ... store.getState(),
    title: 'Componente de projetos',
  })

  const hooks = ({ methods }) => ({
    beforeOnInit () {
		popupEventDrive.on('on-popup-success', (payload) => {
			console.log('success')
		})
    }
  })  

  const children = () => [
    appNote,
    appSearch
  ]

  const events = ({on, queryOnce, queryAll, methods}) => ({})

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
