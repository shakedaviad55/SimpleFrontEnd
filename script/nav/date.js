 export class Date{
    constructor(){
        this.date_label=["מתאריך","עד תאריך"];
        this.defult_date=["2019-05-30","2019-07-20"];
        this.parent=f_nav;
        this.createDate();
}
    createDate(){
        for (var i=0;i<2;i++){
            var box=document.createElement("div");
            this.parent.appendChild(box);
            var l=document.createElement("label");
            l.innerHTML=`${this.date_label[i]} </br>`;
            var _date=document.createElement("input");
            _date.setAttribute("type", "date");
            _date.setAttribute("value",this.defult_date[i]);
            box.appendChild(l);
            box.appendChild(_date);
        }
    }
}
