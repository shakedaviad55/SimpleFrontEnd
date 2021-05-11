import {Nav} from './nav/nav.js'; 
import {Table} from './table/table.js'


window.onload=()=>{ 
  
  new Nav();
  globalThis._table=new Table();
}


