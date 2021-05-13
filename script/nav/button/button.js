
export class Button{
    constructor(_parent,_value,_class){
        this.parent=_parent;
        this.value=_value;
        this.class=_class;
        this.init()
    }
    init(){
        var btn=document.createElement("button");
        btn.innerHTML=this.value;
        btn.className=this.class;
        this.parent.appendChild(btn)
     } 
}