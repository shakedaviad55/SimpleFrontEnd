export class Header{
    constructor(_parent){
        this.parent=_parent;
        this.list_h=[
            "סטטוס",
             "תאריך קבלה",
             "שם מלא",
             "טלפון",
             "קבוצה מטפלת",
             "הופנה על ידי"   
        ];        
    }
    createHeader(){
        let tr=document.createElement("tr"); 
        this.list_h.forEach(item=>{
            let th=document.createElement("th");
            th.innerHTML=item;
            tr.appendChild(th);
            this.parent.appendChild(tr);
        });
    }
}