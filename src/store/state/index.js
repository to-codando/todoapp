export const state = {

	projectPopup: {
		popupOptions: {
			isVisible: false,
			eventName: '',
			data: {
				id:'',
				projectId:'',
				title:'',
			}
		},
	},

	taskPopup: {
		popupOptions: {
			isVisible: false,
			eventName: '',
			data: {
				id:'',
				projectId:'',
				title:'',
				description:''
			}
		},
	},

	removePopup: {
		popupOptions: {
			isVisible: false,
			eventName: '',
			data: {
				id:'',
				projectId:'',
				title:'',
			}
		},
	},

	projects: [
		{id: 1, title: 'Primeiro Projeto', tasks: []},
		{
			id: 2, 
			title: 'Segundo Projeto', 
			tasks: [
				{ id: 1, statusId:2, title: 'Tarefa 1', description: 'Algumas palavras aletarórias como descrição da tarefa registrada...'},
				{ id: 2, statusId:1, title: 'Tarefa 2', description: 'Algumas palavras aletarórias como descrição da tarefa registrada...'},
				{ id: 3, statusId:3, title: 'Tarefa 3', description: 'Algumas palavras aletarórias como descrição da tarefa registrada...'},
				{ id: 4, statusId:1, title: 'Tarefa 4', description: 'Algumas palavras aletarórias como descrição da tarefa registrada...'},
				{ id: 5, statusId:2, title: 'Tarefa 5', description: 'Algumas palavras aletarórias como descrição da tarefa registrada...'},
			]
		},
		{id: 3, title: 'Terceiro Projeto', tasks: []},
		{id: 4, title: 'Quarto Projeto', tasks: []},
		{id: 5, title: 'Quinto Projeto', tasks: []},
	]
	
}