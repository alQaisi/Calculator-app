const body=document.querySelector("body");
const main=document.querySelector("main");
function changeTheme(theme){
   theme=theme==null?"theme1":theme;     
   body.className=theme;
   main.className=theme;
   localStorage.setItem('theme',theme);
}
function setTheme(){
    const theme=localStorage.getItem("theme");
    const radioButton=document.querySelector(`#${theme}`);
    radioButton?radioButton.checked=true:null;
    changeTheme(theme);
}
setTheme();

const prev=document.querySelector(".prev-operation");
const result=document.querySelector(".result")

const calc={
    num1:"",
    num2:"",
    operation:"",
    setNum:function(num){
        result.value+=num;
        if(this.operation=="")
            this.num1=result.value;
        else
            this.num2=result.value;
    },
    calcultating:function(){
        this.num1=parseFloat(this.num1);
        this.num2=parseFloat(this.num2);
        switch(this.operation){
            case "+":
                this.num1+=this.num2;
                break;
            case "-":
                this.num1-=this.num2;
                break;
            case "*":
                this.num1*=this.num2;
                break;
            case "/":
                this.num1/=this.num2;
                break;
        }
    }
    ,
    setOperation:function(operation){
        if(this.num1=="")
            return null;
        if(this.num2==""){
            prev.textContent=`${this.num1} ${operation}`
            this.operation=operation;
            result.value="";
            return this.setNum("");
        }else{
            this.calcultating();
            this.num2="";
            result.value="";
            this.operation=operation;
            prev.textContent=`${this.num1} ${operation}`;
            return this.setNum("");
        }
    },
    getResult:function(){
        if(this.num1!=="" && this.num2!=""){
            prev.textContent=`${this.num1} ${this.operation} ${this.num2}`;
            this.calcultating();
            this.num2="";
            result.value=this.num1;
            this.operation="";
        }
    },
    reset:function(){
        result.value="";
        prev.textContent="";
        this.num1="";
        this.num2="";
        this.operation="";
    },
    deleteNum:function(){
        const previous=prev.textContent;
        const check=previous[previous.length-1]*1;
        if(previous.includes(" ") && check==check)
            return this.reset();
        let value=result.value;
        value=value.slice(0,value.length-1);
        result.value="";
        setNum(value)
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