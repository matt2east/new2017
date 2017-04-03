function solution(S){
  var T = (S.replace(/\s/g, ''));
  var U = (T.match(/.{1,3}/g))
  var V = T.toString();
  var X = V.replace(/-/g, "");
  var Y =(X.replace(/\s/g, ''));
function formatStr(Y, n) {
   var a = [], start=0;
   while(start<Y.length) {
      a.push(Y.slice(start, start+n));
      start+=n;
   }
   Z = (a.join(" "));
   ZZ = Z.replace(/ /g, "-");
}
formatStr(Y,3);
console.log(ZZ)
var SL = ZZ.charAt(ZZ.length-2);
var L = ZZ.charAt(ZZ.length-1);
if (SL===("-")){
  var index = ZZ.length-3;
  var index2 = ZZ.length-1;
  // console.log(index2)
  var ZX = ZZ.substr(0,index2) + L + ZZ.substr(index2);
  var ZY = ZX.substr(0,index) + SL + ZX.substr(index)
  var index3 = ZY.length-1;
  var ZA = ZY.substr(0,index3);
  console.log("ZA is "+ZA);
  var index4 = ZA.length-1;
  var final = ZA.substring(0, index4-1) + ZA.substring(index4, ZA.length);
  return(final)
 
}else{return(ZZ)}
}
solution('0 - 22 1985--324')