let number=20;
for(let i=1;i<=number;i++){
  
let count=0;
let num=i;
  
for(let p=1;p<=num;p++){
  if(num%p==0){
    count++
  }
}
if(count==2){
console.log(i);  
}
}