import {Nav} from './nav/nav.js'; 
import {Table} from './table/table.js'

globalThis._table=new Table();
window.onload=()=>{ 


  new Nav()
  globalThis._table.createTable();
 // new Table().createTable();
  
 
}


