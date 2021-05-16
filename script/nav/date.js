/**
 * This class produces inputs with date type
 * date_label -The values of labels
 * defult_date - Default date values
 * parent- The parent of dates f_nav (first nav)
 *  
 * */
export class Date{
    constructor(){
        this.date_label=["מתאריך","עד תאריך"];
        this.defult_date=["2019-05-30","2019-07-20"];
        this.parent=f_nav;
        this.init();
}
/**
 * Initializing this date
 */
    init(){
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
