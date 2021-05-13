import {Button} from './button.js'
export class Buttons{
    constructor(){    
        this.createButtons(f_nav,["הצג"],"showbtn");
        this.createButtons(s_nav,["לא נמכר","קמפיין הלבנה","חולון"],"s_btn fa fa-close");
}
    createButtons(_parent,_value,_class){
         var box=document.createElement("div");
        _value.forEach(element => {
           new Button(box,element,_class); 
        });  
         _parent.appendChild(box);     
    }
 }
