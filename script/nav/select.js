
export class Selectes{
    constructor(){
        this.obj_select=[
            {all:"הכל", not_sold:"לא נמכר",sold:"נמכר",received:"התקבל",repeat:"שיחה חוזרת"}
            ,{source:" כל המקורות"}
            ,{all_group:"כל הקבוצות",ashdod:"אשדוד",holon:"חולון",rishonlezion:'ראשל"צ',nessziona:"נס ציונה"}
        ];
        this.array_label=["סטטוס","מקור הליד","קבוצה"];
        this.parent=f_nav;
        this.createSelect();
        
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
                     var br=document.createElement("br");
                     var te1=new Select(box,br,{price:"מחיר"});
                     te1.run()
                 }  
              }
        }
    }

 class Select{
    constructor(_parent,_label,_options){
        this.parent=_parent;
        this.label=_label;
        this.options=_options;
        this._select=document.createElement("select");
     
    }
    run(){
        this.parent.appendChild(this.label);    
        for(const [key,value] of Object.entries(this.options)){
            var _option=document.createElement("option");
            _option.value=key;
            _option.innerHTML=value;
            this._select.appendChild(_option);
            this._select.onchange =function(e){
               let target=this.options[e.target.value];
               globalThis._table.updateTable(target);
            }.bind(this)
          
        }
        this.parent.appendChild(this._select);
    }
  
}