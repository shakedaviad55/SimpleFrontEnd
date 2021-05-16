/**
 * This class produces the header of the table
 * 
 */
export class Header{
    /**
     * 
     * @param {string} _parent - Parent of this header  
     * list_h - Values of the header 
    */
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
    /**
     * Create the table header
     */
    createHeader(){
        let tr=document.createElement("tr"); 
        this.list_h.forEach(item=>{
            let th=document.createElement("th");
            th.innerHTML=item;
            
            if(item=="הופנה על ידי")
                th.className="table_egdes_end";
            else if(item=="סטטוס")
                th.className="table_egdes_start";

            tr.appendChild(th);
            this.parent.appendChild(tr);
        });
    }
}