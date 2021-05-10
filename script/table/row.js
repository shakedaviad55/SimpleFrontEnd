export class Row{
    constructor(_parent){
        this.parent=_parent;
        //this.customers=_customers;
    }
    createRow(_customers){
     
        _customers.forEach(item=>{
            let tr=document.createElement("tr"); 
            tr.innerHTML+=`<td style="background-color: ${item.color};">${item.status}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.date_received}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.full_name}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.phone}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.group}</td>`;
            tr.innerHTML+=`<td style="background-color: 'white';">${item.reference}</td>`;
            this.parent.appendChild(tr);
        });
    }
    // updateRow(_customers){
    
    //     _customers.forEach(item=>{
    //         let tr=document.createElement("tr"); 
    //         tr.innerHTML+=`<td style="background-color: ${item.color};">${item.status}</td>`;
    //         tr.innerHTML+=`<td style="background-color: 'white';">${item.date_received}</td>`;
    //         tr.innerHTML+=`<td style="background-color: 'white';">${item.full_name}</td>`;
    //         tr.innerHTML+=`<td style="background-color: 'white';">${item.phone}</td>`;
    //         tr.innerHTML+=`<td style="background-color: 'white';">${item.group}</td>`;
    //         tr.innerHTML+=`<td style="background-color: 'white';">${item.reference}</td>`;
    //         this.parent.appendChild(tr);
    //     });
    // }
  
}