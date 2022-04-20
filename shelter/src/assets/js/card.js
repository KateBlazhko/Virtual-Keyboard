import { PageElement, Image} from "./page-element";
import { Popup, DataItem } from "./popup";

export class Card extends PageElement {
    constructor(parent, className, cardNumber, isAppend = true) {
      super(parent, 'div', className, '', isAppend);
      this.cardNumber = cardNumber;
      const img = new Image(this.node, 'card-img', `assets/img/${this.cardNumber}.png`, `pets-img`);
      const button = new PageElement(this.node, 'div', 'card-button', 'Learn more');
      this.name = new PageElement(this.node, 'div','card-name', `${petNames[this.cardNumber-1]}`);


      button.node.onclick = () => {
        console.log ('fff')
        const data  = new DataItem (this.name)
        console.log(data.loadData());
        const popup = new Popup (document.documentElement, this.cardNumber, data)
        	popup.onClose = ()=>{
          	popup.node.remove();
          }
      }

    //   this.node. = () => {
    //       return false
    //   }
    }

    getCardNumber() {
      return this.cardNumber
    }
}

const petNames = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'];