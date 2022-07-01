body.addEventListener("keydown",handleKeyboardEvents);
function handleKeyboardEvents(evt){
    const numbers=".0123456789";
    const operations="-+*/";
    const resultKeys="Enter="
    const {key}=evt;
    switch(true){
        case numbers.includes(key):
            setNum(key);
            break;
        case operations.includes(key):
            setOperation(key);
            break;
        case key=="Backspace":
            deleteNum();
            break;
        case resultKeys.includes(key):
            getResult();
    }
}

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