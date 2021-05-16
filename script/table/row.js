/**
 * This class produces the rows of the table
 */
export class Row{
 /**
  * 
  * @param {string} _parent-Parent of this rows   
  */   
    constructor(_parent){
        this.parent=_parent;
       
    }
    /**
     * Create the table rows
     * @param {Array} _customers- The values displayed in the table 
     */
    createRow(_customers){
        _customers.forEach(item=>{
            let tr=document.createElement("tr"); 
            tr.innerHTML+=`<td 
                class="table_egdes_start" 
                style="background-color: ${item.backgroundColor};
                color:${item.color};">${item.status}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.date_received}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.full_name}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.phone}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.group}</td>`;
            tr.innerHTML+=`<td class="table_egdes_end" style="background-color: 'white';">${item.reference}</td>`;
            this.parent.appendChild(tr);
        });
    }
}