import { observableFactory, routerObservable } from 'lemejs';

import template from './template'
import styles from './styles'

import { store } from '../../store'
import { filterTaskObservable } from '../../services/filterObservable';

export const appSearch = ({ element }) => {

	const state = observableFactory({
		term: ''
	})

	const children = () => []
	const hooks = () => ({ afterOnInit() { state.set({ term: 'ok' }) } })

	const events = ({ on, queryOnce, methods }) => ({
		onTypeToSetTerm() {
			const input = queryOnce('input')
			const focusEnd = () => ['input', element]
			const debounceOptions = { focusEnd, debounceTime: 120, useDebounce: true }
			on('keyup', input, methods.setTerm, debounceOptions)
		},
		onClickToFilterTasks() {
			const button = queryOnce('#button-filter')
			on('click', button, methods.executeSearch)
		},
		onClickToResetSearch() {
			const button = queryOnce('#button-clear')
			on('click', button, methods.resetSearch)
		},
	})

	const methods = () => ({
		setTerm({ target: { value } }) {
			const { routeParams } = routerObservable.get()
			const { id: projectId } = routeParams
			state.set({ term: value, projectId })
		},
		resetSearch() {
			state.set({ term: '' })
			const { projectId } = state.get()
			filterTaskObservable.set({ projectId, term: '', eventName: 'resetTaskList' })
		},
		executeSearch() {
			const { term, projectId } = state.get()
			filterTaskObservable.set({ term, projectId, eventName: 'filterTaskList' })

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
