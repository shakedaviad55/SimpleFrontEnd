import { Select } from './select.js'
/**
 * This class produces selectes
 * obj_select - values of selection
 * array_label- values of label
 * parent -Parent of  the selection f_nav(first nav)
 */
export class Selectes {
    constructor() {
        this.obj_select = [
            ["הכל", "לא נמכר","נמכר!","התקבל","שיחה חוזרת"],
            [" כל המקורות"],
            ["כל הקבוצות","אשדוד","חולון",'ראשל"צ', "נס ציונה" ]
        ];
        this.array_label = ["סטטוס", "מקור הליד", "קבוצה"];
        this.parent = f_nav;
        this.createSelect();
    }
    /**
     * produces a box containing label and selection
     */
    createSelect() {
        for (var i = 0; i < 3; i++) {
            var box = this.createBoxAndLabel(`${this.array_label[i]} </br>`)
            new Select(box,this.obj_select[i],`select${i}`);
            if (i == 0) {
                var br = document.createElement("br");
                box.appendChild(br)
                new Select(box, ["מחיר"])
            }
            this.parent.appendChild(box);
        }
    }
    /**
     * 
     * @param {string} _val_label -The value in label
     * @returns A new Box for every select
     */
    createBoxAndLabel(_val_label) {
        var box = document.createElement("div");
        var l = document.createElement("label");
        l.innerHTML = _val_label;
        box.appendChild(l);
        return box
    }

}
