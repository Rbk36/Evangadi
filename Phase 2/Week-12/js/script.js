// live DOM Object so looping doesn't work
var el = document.getElementsByClassName("yellow");
console.log(el);
//  el[0].className="pink"
// for(i=0;i<el.length;i++){
//     selected=el[i];
//     selected.className="pink"
// }
let temp=[]
for(i=0;i<el.length;i++){
    selected=temp.push(el[i]);
    selected.className="pink"
}
// the above loop only loops once since elements called by class name changes live
//  console.log(el[1]);
// not live DOM object so looping works
// var el = document.getElementsByTagName("li")
// for(i=0;i<el.length;i++){
//         selected=el[i];
//         selected.className="pink"
//     }