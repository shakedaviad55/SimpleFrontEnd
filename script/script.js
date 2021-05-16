import {Nav} from './nav/nav.js'; 
import {Table} from './table/table.js'
/**
 * The main class that is building the page
 */

window.onload=()=>{ 
  new Nav();
  globalThis._table=new Table();
}


