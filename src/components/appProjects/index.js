import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { appNote } from '../appNote';
import { appSearch } from '../appSearch';
import { popupEventDrive } from '../appPopup';


import { store } from '../../store';
import { uuid } from '../../services/uuid';

export const appProjects = () => {

  const state = observableFactory({
    projects: [],
    title: 'Componente de projetos',
  })

  const hooks = ({ methods }) => ({
    beforeOnInit () {
		methods.setProjects()

		popupEventDrive.on('on-popup-success', methods.addNewProject)

		store.on('addProject', methods.updateProjectList)
    }
  })  

  const children = () => [
    appNote,
    appSearch
  ]

  const events = ({on, queryOnce, queryAll, methods}) => ({})

  const methods = ({ publicMethods }) => ({
	updateProjectList (payload) {
		state.set({ ...payload })
	},
	addNewProject (payload) { 
		const { eventName } = payload
		store.emit(eventName, payload.data)
	},
	setProjects() {
		const { projects } =  store.getState()
		state.set({
			projects: projects.sort(publicMethods.sortById)
		})
	},
	sortById  (a, b) {
		return a.id - b.id
	},
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
