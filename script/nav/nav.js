import {Selectes} from './select/selects.js'
import{Date} from './date.js' 
import {Buttons} from './button/buttons.js'
/**
 * This class produces nav
 */
export class Nav{
    constructor(){
        new Selectes();
        new Date();
        new Buttons(); 
 }
}



