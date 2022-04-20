import { PageElement } from "./page-element";
import * as myFunc from './function.js';

export class Popup extends PageElement {
	constructor(parent, pet) {
			super(parent);
			const overlay = new PageElement (this.node, 'div', 'popup-overlay');
			const wrapper = new PageElement (overlay.node, 'div', 'popup-wrapper');
			const closeButton = new PageElement (wrapper.node, 'div', 'popup-close-button');
			const container = new PageElement (wrapper.node, 'div', 'popup-container');

			const popupImg = new PageElement (container.node, 'div', 'popup-img');
      popupImg.node.style.backgroundImage = `url(${pet.img}`;

			const popupData = new PageElement (container.node, 'div', 'popup-data');

			this.name = new PageElement (popupData.node, 'h3', 'title', pet.name);
			const subname = new PageElement (popupData.node, 'h4', 'subtitle');

			this.type = new PageElement (subname.node, 'span', 'text', pet.type);
			const spacer = new PageElement (subname.node, 'span', 'text', ' - ');
			this.breed = new PageElement (subname.node, 'span', 'text', pet.breed);

			this.description = new PageElement (popupData.node, 'p', 'pets-description', pet.description);

			const list = new PageElement (popupData.node, 'ul', 'popup-list');
			this.age = new PageElement (list.node, 'li', 'list-item', `Age: <span>${pet.age}<span>`);
			this.inoculations = new PageElement (list.node, 'li', 'list-item', 
                                          `Inoculations: <span>${pet.inoculations.join(', ')}</span>`);
			console.log(pet.diseases.join(', '))
			this.diseases = new PageElement (list.node, 'li', 'list-item', 
                                      `Diseases: <span>${pet.diseases.join(', ')}</span>`);

			this.parasites = new PageElement (list.node, 'li', 'list-item', 
                                       `Parasites: <span>${pet.parasites.join(', ')}</span>`);

			closeButton.node.onclick = () => {
				this.onClose();
			}

			overlay.node.onclick = () => {
				this.onClose();
			}

			overlay.node.onmouseover = () => {
				myFunc.toggleClassName('hover', closeButton.node);
			}

			overlay.node.onmouseout = () => {
				myFunc.toggleClassName('hover', closeButton.node);
			}

			container.node.onclick = (event) => event.stopPropagation()

			container.node.onmouseover = (event) => event.stopPropagation()

			container.node.onmouseout = (event) => event.stopPropagation()
	}


}

export class DataItem {
	constructor() {
	}

	loadData(name){
    this.name = name
    return fetch('assets/json/pets.json')
						.then(res => res.json())
            .then(data => data.find(pet => pet.name === this.name))
	}
}