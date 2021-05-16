/**
 * This class produces a single selection
 */
export class Select{
/**
 * 
 * @param {string} _parent-Parent of this selection 
 * @param {Array} _options - The options of this selection
 * @param {string} _id -The id of this selection
 */  
    constructor(_parent,_options,_id){
        this.parent=_parent;
       this.options=_options;
        this._select=document.createElement("select");
        this._select.id=_id
        this.init()
    }
    /**
     * Initializing this selection
     */
    init(){
        this.options.forEach(element => {
            this._select.appendChild(
                this.createOption(element)
            );  
        });
        this.parent.appendChild(this._select);    
        
}
/**
 * 
 * @param {string} _val -A single option 
 * @returns A new option
 */
    createOption(_val){
        var _option=document.createElement("option");
        _option.value=_val;
        _option.innerHTML=_val;
        return _option
    }
    
}