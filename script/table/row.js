export class Row{
    constructor(_parent){
        this.parent=_parent;
       
    }
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