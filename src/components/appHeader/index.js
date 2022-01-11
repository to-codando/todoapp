import { observableFactory, routerObservable } from 'lemejs';
import { toggleProjectPopup, toggleTaskPopup } from '../../services/popupObservable';

import template from './template'
import styles from './styles'

import { appBreadCrumbs } from '../appBreadCrumbs';
import { appPopup, popupEventDrive } from '../appPopup';


export const appHeader = () => {

	const state = observableFactory({
		popupOptions: {
			isVisible: false,
			template: '',
			eventName: '',
			data: {
				id:'',
				title:'',
				inpuValue:'',
				textareaValue:''
			}
		}
	})

	const children = () => [
		appBreadCrumbs,
		appPopup
	]

	const hooks = ({ methods }) => ({
		beforeOnInit () {
			popupEventDrive.on('on-popup-fail', methods.hidePopup)
			popupEventDrive.on('on-popup-success', methods.hidePopup)
			popupEventDrive.on('on-show-popup', methods.showPopup)
		}
	})

	const events = ({ on, queryOnce, methods }) => ({
		onClickShowPopup() {
			const buttonShowPopup = queryOnce('#button-show-popup')

			on('click', buttonShowPopup, () => {
				const isVisible = true
				const { routeParams } = routerObservable.get()
				const title = routeParams.hasOwnProperty('id') ? 'Cadastro de tarefas' : 'Cadastro de projetos'
				const template = routeParams.hasOwnProperty('id') ? 'task' : 'project'
				const eventName = routeParams.hasOwnProperty('id') ? 'addTask' : 'addProject'
				const data = { inputValue:'' ,	textareaValue:'', title }
				const options = { eventName, template, isVisible, data }
				methods.showPopup(options)
			})
		}
	})

	const methods = () => ({
		showPopup(options) { 
			const popupOptions = { ...options }
			state.set({ popupOptions }) 
		},
		hidePopup (payload) {
			const popupOptions =  { isVisible: false, template: 'project', event: 'addProject' }
			state.set({ popupOptions })
		}
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

