function doException(){
  throw new Error("Exception Error");
}

function noException(){
  return true;
}

function callException(type){
  if (type === 'do'){
    doException()
  } else {
    noException();
  }
}

function main(){
  try {
    callException('do');
  } catch (e) {
    console.log(e);
  } finally {
    console.log('finally done')
  }
}

console.log("Debug mode")
main();
