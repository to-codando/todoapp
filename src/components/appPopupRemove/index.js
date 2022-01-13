import { observableFactory } from 'lemejs';

import template from './template'
import styles from './styles'


 const popupRemoveObserver = observableFactory()

const appPopupRemove = (options) => {

	const { element } = options

	const state = observableFactory({
		id:'',
		projectId:'',
		title: '',
		inputValue: '',
		textareaValue:'',
		template: '',
	})

	const children = () => []

	const hooks = ({ methods, props }) => ({ })

	const events = ({ on, queryOnce, methods, props }) => ({})

	const methods = () => ({})

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

export { appPopupRemove, popupRemoveObserver }