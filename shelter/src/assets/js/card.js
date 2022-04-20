import { PageElement, Image} from "./page-element";
import { Popup, DataItem } from "./popup";

export class Card extends PageElement {
    constructor(parent, className, cardNumber, isAppend = true) {
      super(parent, 'div', className, '', isAppend);
      this.cardNumber = cardNumber;
      const img = new Image(this.node, 'card-img', `assets/img/${this.cardNumber}.png`, `pets-img`);
      this.name = new PageElement(this.node, 'div','card-name', `${petNames[this.cardNumber-1]}`);
      const button = new PageElement(this.node, 'div', 'card-button', 'Learn more');


      this.node.onclick = () => {
       document.body.style.overflow = 'hidden';
        const data  = new DataItem (this.name.node.textContent);
        data.loadData(this.name.node.textContent).then(loaded => {
          const popup = new Popup (document.documentElement, loaded)
        	popup.onClose = ()=>{
          	popup.node.remove();
            document.body.style.overflow = 'visible';
          }
        });
      }

    //   this.node. = () => {
    //       return false
    //   }
    }

    getCardNumber() {
      return this.cardNumber
    }
}

const petNames = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Scarlett', 'Timmy', 'Charly', 'Freddie'];

