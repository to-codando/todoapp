import { observableFactory, routerObservable } from 'lemejs';

import { store } from '../../store';


import template from './template'
import styles from './styles'

import { appCombo } from '../appCombo';
import { appNote } from '../appNote'


export const appTaskList = () => {

	const state = observableFactory({
		tasks: [],
		selectedTaskId: ''
	})

	const children = () => [
		appCombo,
		appNote
	]

	const hooks = ({ methods }) => ({ })


	const events = ({ on, queryAll, methods }) => ({ })

	const methods = ({ publicMethods }) => ({
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
