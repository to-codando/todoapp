import { observableFactory, pubsubFactory, routerObservable } from 'lemejs';

import template from './template'
import styles from './styles'

import { appBreadCrumbs } from '../appBreadCrumbs';
import { store } from '../../store';



export const appHeader = (options) => {

	const state = observableFactory({

	})

	const children = () => [
		appBreadCrumbs,
	]

	const hooks = ({ methods }) => ({
		beforeOnInit() {

		}
	})

	const events = ({ on, queryOnce, methods }) => ({
		onClickToShowPopup() {
			const button = queryOnce('#button-show-popup')
			on('click', button, methods.showPopup)
		}
	})

	const methods = ({ publicMethods }) => ({
		showPopup() {
			console.log(publicMethods.isPageProject())
			publicMethods.isPageProject() ?
				publicMethods.showPopupProject() :
				publicMethods.showPopupTask()
		},
		showPopupTask () {
			const { routeParams } = routerObservable.get()
			const { id } = routeParams			

			const event = 'togglePopupTask'
			const task = { id: '', title:'', description:''}
			const data = { ...task, projectId: +id }
			const popupOptions = {  isVisible: true, eventName: event, data	}

			store.emit(event, { popupOptions })
		},
		showPopupProject () {

			const event = 'togglePopupProject'
			const task = { projectId:'', id: '', title:'', description:''}
			const data = { ...task }
			const popupOptions = {  isVisible: true, eventName: event, data	}

			store.emit(event, { popupOptions })
		},
		isPageProject () {
			const {routeParams} = routerObservable.get()
			return !routeParams || !routeParams.id  ? true : false
		}
	})

	return {
		state,
		template,
		styles,
		events,
		methods,
		children,
		hooks,
	}
};

