import{d as a,r as c,e as i,c as o,f as d,o as l,a as _,a4 as g}from"./index.67a87961.js";const u={class:"long-list"},p=a({__name:"longList_2",setup(m){const s=c(""),e=i({list:[],containHeight:0,rowHeight:20,renderNums:0,rowStartIndex:0,rowEndIndex:0});(()=>{e.list=Array.from({length:1e5},(t,r)=>r)})();const n=o(()=>e.rowStartIndex+e.renderNums);return o(()=>(console.log(47,e.list.slice(e.rowStartIndex,n.value)),e.list.slice(e.rowStartIndex,n.value))),o(()=>({paddingTop:e.rowStartIndex*e.rowHeight+"px",paddingBottom:(e.list.length-n.value)*e.rowHeight+"px"})),d(()=>{var t;e.containHeight=(t=s.value)==null?void 0:t.offsetHeight,e.renderNums=~~(e.containHeight/e.rowHeight),console.log(26,e.renderNums)}),(t,r)=>(l(),_("div",u," 1 "))}});const f=g(p,[["__scopeId","data-v-cbce61c3"]]);export{f as default};
