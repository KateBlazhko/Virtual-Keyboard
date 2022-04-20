import { PageElement } from "./page-element";

export class Popup extends PageElement {
	constructor(parent, cardNumber, data) {
			super(parent);

			const overlay = new PageElement (this.node, 'div', 'popup-overlay');
			const wrapper = new PageElement (overlay.node, 'div', 'popup-wrapper');
			const closeButton = new PageElement (wrapper.node, 'div', 'popup-close-button');
			const container = new PageElement (wrapper.node, 'div', 'popup-container');

			const popupImg = new PageElement (container.node, 'div', 'popup-img');
			const popupData = new PageElement (container.node, 'div', 'popup-data');

			this.name = new PageElement (popupData.node, 'h3', 'title');
			const subname = new PageElement (popupData.node, 'h4', 'subtitle');

			this.type = new PageElement (subname.node, 'span', 'text');
			const spacer = new PageElement (subname.node, 'span', 'text', ' - ');
			this.breed = new PageElement (subname.node, 'span', 'text');

			this.description = new PageElement (popupData.node, 'p', 'pets-description');

			const list = new PageElement (container.node, 'ul', 'popup-list');
			this.age = new PageElement (list.node, 'li', 'list-item', 'Age: <span><span>');
			this.inoculations = new PageElement (list.node, 'li', 'list-item', 'Inoculations: <span><span>');
			this.diseases = new PageElement (list.node, 'li', 'list-item', 'Diseases: <span><span>');
			this.parasites = new PageElement (list.node, 'li', 'list-item', 'Parasites: <span><span>');

			closeButton.node.onclick = ()=>{
				this.onClose();
			}
	}


}

export class DataItem {
	constructor(name) {
		console.log()
	}

	loadData(){
    return fetch('https://github.com/rolling-scopes-school/tasks/blob/master/tasks/markups/level-2/shelter/pets.json')
						.then(res=>res.json()).then(data => console.log(data))
	}
}