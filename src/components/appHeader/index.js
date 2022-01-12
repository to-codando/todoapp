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
			publicMethods.isPageProject() ?
				publicMethods.showPopupProject() :
				publicMethods.showPopupTask()
		},
		showPopupTask () {
			const event = 'togglePopupTask'
			const data = { 	popupOptions: {  isVisible: true } }
			store.emit(event, { data, event })
		},
		showPopupProject () {
			const event = 'togglePopupProject'
			const data = { 	popupOptions: {  isVisible: true } }
			store.emit(event, { data, event })
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

