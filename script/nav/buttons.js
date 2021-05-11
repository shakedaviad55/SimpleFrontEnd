export class Buttons{
    constructor(){
        
    var bb= new Button(f_nav,"הצג","showbtn");
    bb.createBtnFirstSection();
      
    var bt= new Button(s_nav,["לא נמכר","קמפיין הלבנה","חולון"],"s_btn fa fa-close");
    bt.createBtnSecondSection();
    }


}

class Button{
    constructor(_parent,_value,_class){
        this.parent=_parent;
        this.value=_value;
        this.class=_class;
    }
    createBtnFirstSection(){
        var box=document.createElement("div");
        this.parent.appendChild(box);
        var btn=document.createElement("button");
        btn.innerHTML=this.value;
        btn.className=this.class;
        box.appendChild(btn);
    }
    createBtnSecondSection(){
        var box=document.createElement("div");
        this.parent.appendChild(box);
        for (var i=0 ;i<3; i++){
            var btn=document.createElement("button");
            btn.innerHTML=this.value[i];
            btn.className=this.class;
            box.appendChild(btn);    
       
    }
 }
}