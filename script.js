function setNum(num){
    if(num=="." && result.value.includes(".")){
        return null;
    }
    if(result.value[0]=="0" && result.value.length==1 && num=="0")
        return null;
    calc.setNum(num);
}
function setOperation(operation){
    calc.setOperation(operation);
}
function getResult(){
    calc.getResult();
}
function reset(){
    calc.reset();
}
function deleteNum(){
    calc.deleteNum();
}