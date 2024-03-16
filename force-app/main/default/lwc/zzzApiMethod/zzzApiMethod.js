import { LightningElement } from 'lwc';

export default class ZzzApiMethod extends LightningElement {
    handleRefresh() {
        this.template.querySelector('c-clock').refresh();
    }
}