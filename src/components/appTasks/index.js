import { observableFactory } from 'lemejs';
import { store } from '../../store';

import template from './template'
import styles from './styles'

import { appSearch } from '../appSearch'
import { appFilterStatus } from '../appFilterStatus';
import { appTaskList } from '../appTaskList';
import { appPopupTask } from '../appPopupTask';

export const appTasks = () => {

  const state = observableFactory({
	popupOptions: {
		isVisible: false,
		template: '',
		eventName: '',
		data: {
			id:'',
			projectId:'',
			title:'',
			inpuValue:'',
			textareaValue:''
		}
	},
   })

  const children = () => [
    appSearch,
    appFilterStatus,
    appTaskList,
	appPopupTask
  ]

  const hooks = ({ methods }) => ({
    beforeOnInit () {

    }
  })

  const events = ({on, queryOnce, queryAll, methods}) => ({ 
	beforeOnInit () {
		store.onUpdated((payload) => {
			methods.togglePopupTask(payload)
		})			
	}
  })

  const methods = () => ({
	togglePopupTask (payload) { 
		if(!payload.event || payload.event !== 'togglePopupTask') return 
		state.set({ ...payload.taskPopup })
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