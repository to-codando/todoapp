import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'

import { store } from '../../store';


export const appCombo = () => {

	const state = observableFactory({
		selectedStatus: { id: 1, label: 'A Fazer' },
		status: [
			{ id: 1, label: 'A Fazer' },
			{ id: 2, label: 'Fazendo' },
			{ id: 3, label: 'Feito' },
		],
		projectId:'',
		taskId:'',
		statusId:'',
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({
		beforeOnInit() {
			methods.setStatusByProps(props)
		}
	})


	const events = ({ on, queryOnce, queryAll, methods }) => ({
		onClickToSetStatus() {
			const statusElement = queryAll('li')
			on('click', statusElement, methods.setStatusById)
		}
	})

	const methods = ({ props }) => ({
		setStatusById({ target }){
			const { dataset: { statusId } } = target
			const { status, projectId, taskId } = state.get()
			const selectedStatus = status.find( statusItem =>  statusItem.id === +statusId)
			const data = { statusId: +selectedStatus.id, projectId: +projectId, taskId: +taskId }
			const event = 'updateTask'
			store.emit(event, { data, event })
		},
		setStatusByProps(props) {
			const { status } = state.get()
			const selectedStatus = status.find( statusItem => statusItem.id === +props.statusId)
			state.set({ ...props, selectedStatus })
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
