let arr=["A","B","C","D","E","F","A","B","C","D","A","B","C","A","F"];
let obj={};
for(let i=0;i<arr.length;i++){
  obj[arr[i]]=1;
}
console.log(obj);