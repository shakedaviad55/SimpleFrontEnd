export class Select{
    constructor(_parent,_options,_onChange=NaN){
        this.parent=_parent;
        this.options=_options;
        this._select=document.createElement("select");
        this._select.onchange=_onChange
        this.init()
    }
    init(){ 
        for(const [key,value] of Object.entries(this.options)){
            this._select.appendChild(
                this.createOption(key,value)
                );               
        }
        this.parent.appendChild(this._select);    
    }
    createOption(_key,_value){
        var _option=document.createElement("option");
        _option.value=_key;
        _option.innerHTML=_value;
        return _option
    }
  
}