import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'


export const appCombo = () => {

	const state = observableFactory({
		selectedStatus: { id: 1, label: 'A Fazer' },
		status: [
			{ id: 1, label: 'A Fazer' },
			{ id: 2, label: 'Fazendo' },
			{ id: 3, label: 'Feito' },
		]
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({
		beforeOnInit() {
			methods.setStatusByProps(props)
		}
	})


	const events = ({ on, queryOnce, queryAll, methods }) => ({})

	const methods = () => ({
		setStatusByProps(props) {
			const { status } = state.get()
			const selectedStatus = status.find( statusItem => statusItem.id === +props.statusId)
			state.set({ selectedStatus })
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
