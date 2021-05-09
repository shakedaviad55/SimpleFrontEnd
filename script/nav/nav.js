import {Selectes} from './select.js'
import{Date} from './date.js' 
import {Buttons} from './buttons.js'
export class Nav{
    constructor(){
   
    var s= new Selectes();s.createSelect(); 
    var d=new Date();d.createDate();
    var b=new Buttons();  
 }
}



