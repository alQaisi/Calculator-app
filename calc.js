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
        if(this.num2!==""){
            this.calcultating();
            this.num2="";
        }
        result.value="";
        prev.textContent=`${this.num1} ${operation}`;
        this.operation=operation;
        return this.setNum("");
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