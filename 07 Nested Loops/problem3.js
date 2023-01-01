for(let hor=1; hor<=10;hor++){
  let a= "";
  for(let ver=1; ver<=10;ver++){
    if(hor==1 ||hor==10){
      a= a+"*";
    }
    else if(ver==1 || ver==10){
      a= a+ "*";
    }
    else{
      a= a+ " ";
    }
  }
  console.log(a);
}