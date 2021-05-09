export class Selectes{
    constructor(){
        this.obj_select=[
            {all:"הכל", not_sold:"לא נמכר",sold:"נמכר",received:"התקבל",repeat:"שיחה חוזרת"}
            ,{source:"מקור הליד"}
            ,{all_group:"כל הקבוצות",ashdod:"אשדוד",holon:"חולון",rishonlezion:'ראשל"צ',nessziona:"נס ציונה"}
        ];
        this.array_label=["סטטוס","מקור הליד","קבוצה"];
        this.parent=f_nav;
    }
     createSelect(){
            for (var i=0;i<3;i++){
                var box=document.createElement("div");
                this.parent.appendChild(box);
                var l=document.createElement("label");
                l.innerHTML=`${this.array_label[i]} </br>`;
                var te=new Select(box,l,this.obj_select[i]);
                te.run();
                if(i==0){
                    box.innerHTML+="</br></br>"
                    var _price=document.createElement("select");
                    var _op_price=document.createElement("option");
                    _op_price.innerHTML="מחיר";
                    _op_price.value="price";
                    _price.appendChild(_op_price);
                    box.appendChild(_price)
                }  
              }
        }
    }

 class Select{
    constructor(_parent,_label,_options){
        this.parent=_parent;
        this.label=_label;
        this.options=_options;
    }
    run(){
        this.parent.appendChild(this.label);
        var _select=document.createElement("select");
        for(const [key,value] of Object.entries(this.options)){
            var _option=document.createElement("option");
            _option.value=key;
            _option.innerHTML=value;
            _select.appendChild(_option); 
        }
        this.parent.appendChild(_select);
    }
}