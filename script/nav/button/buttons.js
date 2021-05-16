import {Button} from './button.js'
/**
 * This class produces buttons
 * f_nav-The parent of first nav
 * s_nav- The parent of second nav
 */
export class Buttons{
    constructor(){    
        this.createButtons(f_nav,["הצג"],"showbtn",()=>{globalThis._table.updateTable();});
        this.createButtons(s_nav,["לא נמכר","קמפיין הלבנה","חולון"],"s_btn fa fa-close");
}
/**
 * 
 * @param {string} _parent- id of parent 
 * @param {Array} _value - The value in button
 * @param {string} _class - Class name for css
 * @param {Function} _onClick - Event on click
 */
    createButtons(_parent,_value,_class,_onClick=NaN){
         var box=document.createElement("div");
        _value.forEach(element => {
           new Button(box,element,_class,_onClick); 
        });  
         _parent.appendChild(box);     
    }
 }
