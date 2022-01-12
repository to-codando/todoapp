import { observableFactory, pubsubFactory } from 'lemejs';

import template from './template'
import styles from './styles'


export const appBreadCrumbs = () => {


	const state = observableFactory({
		title: 'Breadcrumbs',
	})

	const hooks = () => ({
		beforeOnInit() {

		}
	})
	const children = () => []


	const events = ({ on, queryOnce, queryAll, methods }) => ({})

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
