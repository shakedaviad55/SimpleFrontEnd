import{Header}from './header.js'
import{Row}from './row.js'
/**
 * This class produces a single table
 */
export class Table{
    /**
     * obj_customers - Represents customers as an object
     */
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
    /**
     * Create the table
     */
    createTable(){
        this.h.createHeader();
        this.r.createRow(this.obj_customers)
        parent_table.appendChild(this.table);
    }
    /**
     * Updates the table by the selected filters
     */
    updateTable(){
        var status=this.getElement("select0").value
        var group=this.getElement("select2").value
        var t=this.filter(status,group);
        this.refresh(t) 
    }
    /**
     * 
     * @param {string} _id -  Id of the desired element
     * @returns Element(id)
     */
    getElement(_id){
        return document.getElementById(_id);
    }
    /**
     * Help function that filters customers
     * @param {string} _status - 
     * @param {string} _group 
     * @returns Customers object after filtering
     */
    filter(_status,_group){
      
        if(_status==="הכל"&&_group=="כל הקבוצות")
            return this.obj_customers
        else if (_status==="הכל")
            return this.obj_customers.filter(item=>item.group==_group)
        else if(_group=="כל הקבוצות")
            return this.obj_customers.filter(item=>item.status==_status)    
        else
            return this.obj_customers.filter(item=>item.status==_status&&item.group==_group);
    }
    /**
     * Help function that refreshes the table
     * @param {Object} _targets -Customers selected after filtering
     */
    refresh(_targets){
        this.getElement("table").innerHTML=""
        this.h.createHeader();    
        this.r.createRow(_targets);     
    }
}



 
