import{Header}from './header.js'
import{Row}from './row.js'
export class Table{
    constructor(){
        this.obj_customers=[
            {
                status:"נמכר!",
                date_received:"16:44",
                full_name:"טום קרוז",
                phone:"0544676767",
                group:"אשדוד",
                reference:"אריאל יקימוב",
                backgroundColor:"#41c1ad",
                color:"white"

            },
            {
                status:"מאחר",
                date_received:"15.3.2021 16:44",
                full_name:"טום קרוז",
                phone:"0544676767",
                group:"חולון",
                reference:"אריאל יקימוב",
                backgroundColor:"#f9ce43fa",
                color:"white"

            },
            {
                status:"התקבל",
                date_received:"16:44",
                full_name:"טום קרוז",
                phone:"0544676767",
                group:'ראשל"צ',
                reference:"אריאל יקימוב",
                backgroundColor:"white",
                color:"#030866"

            },
            {
            status:"שיחה חוזרת",
            date_received:"16:44",
            full_name:"טום קרוז",
            phone:"0544676767",
            group:"חולון",
            reference:"אריאל יקימוב",
            backgroundColor:"#369ceccf",
            color:"white"

        },
        {
            status:"לא נמכר",
            date_received:"16:44",
            full_name:"טום קרוז",
            phone:"0544676767",
            group:"חולון",
            reference:"אריאל יקימוב",
            backgroundColor:"#f76565",
            color:"white"

        },
        {
            status:"שיחה חוזרת",
            date_received:"16:44",
            full_name:"טום קרוז",
            phone:"0544676767",
            group:"נס ציונה",
            reference:"אריאל יקימוב",
            backgroundColor:"#369ceccf",
            color:"white"

        }

        ];
        this.table=document.createElement("table");
        this.table.id="table";
        this.h=new Header(this.table);
        this.r=new Row(this.table);
        this.createTable();
    }
    createTable(){
        this.h.createHeader();
        this.r.createRow(this.obj_customers)
        parent_table.appendChild(this.table);
    }
   
      updateTable(_target){
        var t;
        if(_target==="כל הקבוצות"||_target=="הכל")
            t=this.obj_customers;
        else
             t=this.obj_customers
            .filter(item=>item.status==_target||item.group==_target);
        
        this.getTable().innerHTML=""
        this.h.createHeader();    
        this.r.createRow(t);     
        parent_table.appendChild(this.table);   
        
    }
    getTable(){
        return document.getElementById("table");
    }

}



 
