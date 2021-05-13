import {Select} from './select.js'
export class Selectes{
    constructor(){
        this.obj_select=[
            {all:"הכל", not_sold:"לא נמכר",sold:"נמכר!",received:"התקבל",repeat:"שיחה חוזרת"}
            ,{source:" כל המקורות"}
            ,{all_group:"כל הקבוצות",ashdod:"אשדוד",holon:"חולון",rishonlezion:'ראשל"צ',nessziona:"נס ציונה"}
        ];
        this.array_label=["סטטוס","מקור הליד","קבוצה"];
        this.parent=f_nav;
        this.createSelect();  
    }
     createSelect(){
            for (var i=0;i<3;i++){  
                var box=this.createBoxAndLabel(`${this.array_label[i]} </br>`)
                new Select(
                    box,
                    this.obj_select[i],
                    (change)=>{
                        for(var obj of this.obj_select){
                            var target=change.target.value
                            if(target in obj)
                                globalThis._table.updateTable(obj[target]);
                        }
                    }
                );
                 if(i==0){
                     var br=document.createElement("br");
                     box.appendChild(br)
                     new Select(box,{price:"מחיר"})      
                 } 
                 this.parent.appendChild(box); 
              }       
        }
        createBoxAndLabel(_val_label){
            var box=document.createElement("div");
            var l=document.createElement("label");
            l.innerHTML=_val_label;
            box.appendChild(l);
            return box
        }
    }
