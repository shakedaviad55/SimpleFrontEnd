/**
 * This class produces a single button
 */
export class Button{
    /**
     * 
     * @param {string} _parent - The parent of this button
     * @param {string} _value - The value of this button
     * @param {string} _class - The class name of this button
     * @param {Function} _onClick - The function(onclick) of this button
     */
    constructor(_parent,_value,_class,_onClick){
        this.parent=_parent;
        this.value=_value;
        this.class=_class;
        this.btn=document.createElement("button");
        this.btn.onclick=_onClick
        this.init()
    }
    /**
     * Initializing this button
     */
    init(){
       this.btn.innerHTML=this.value;
        this.btn.className=this.class;
        this.parent.appendChild(this.btn)
     } 
}