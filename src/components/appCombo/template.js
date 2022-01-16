import bannerLemeJs from '../../assets/images/leme-js-banner.png'
export default ({ state, html }) => {

	const repeat = (arrayList, template) => {
		return arrayList.map( arrayItem => template(arrayItem)).join('')
	}

    return html`
        <div>
            ${state.selectedStatus.label || 'Selecione um valor '} 
             <span class="material-icons">
                expand_more
             </span>                
         </div>
        <ul>
            ${repeat( state.status, (statusItem) => html`
				<li data-status-id="${statusItem.id}">${statusItem.label}</li>
			`)}
        </ul>
    `
}

