class Calculator
{
    constructor(previousOperandTextElement,currentOperandTextElement)
    {
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        // this.allClear() why is it done
    }
    appendNumber(num)
    {    
        if(num=="." && this.currentOperand.includes("."))return;
        if(this.currentOperand==null)this.currentOperand=num.toString();
        else
        {
            this.currentOperand=this.currentOperand.toString()+num.toString();
        }
    }
    changeFormat(num)
    {
        let numString=num.toString();
        let numIntegerDigit=parseInt(numString.split(".")[0]);
        let decimalDigit=numString.split(".")[1];
        let beautifiedString="";
        if(!isNaN(numIntegerDigit))
        {
            beautifiedString=numIntegerDigit.toLocaleString("en",{maximumFractionDigits:0});
        }
        if(decimalDigit==null)
        { 
            return beautifiedString;
        }
        else
        {
            return `${beautifiedString}.${decimalDigit}`;
        }
    }
    
    getDisplay()
    {
        if(isNaN(this.currentOperand))
        {
            this.currentOperandTextElement.innerText="";
        }
        else{
            this.currentOperandTextElement.innerText=this.changeFormat(this.currentOperand);
        }

        if(this.operation!=null)
        {
            this.previousOperandTextElement.innerText=this.changeFormat(this.previousOperand)+this.operation.toString();
        }
        else
        {
            this.previousOperandTextElement.innerText = "";
        }

    }
    compute()
    {   
        let firstNo=parseFloat(this.currentOperand);
        let secondNo=parseFloat(this.previousOperand);
        switch(this.operation)
        {
            case "*":
            this.currentOperand=firstNo*secondNo;;
            break;

            case "÷":
            this.currentOperand=secondNo/firstNo;
            break;

            case "-":
            this.currentOperand=secondNo-firstNo;
            break;

            case "+":
            this.currentOperand=secondNo+firstNo;
            break;
        }
        this.operation=undefined;
        this.previousOperand="";
    }
    chooseOperation(operand)
    {
        if(this.currentOperand===null)return "";
        
        if(this.previousOperand!=null)
        {
            this.compute();
        }       
        this.operation=operand;
        this.previousOperand=this.currentOperand;
        this.currentOperand="";
    } 
    delete()
    {   
        let slicedString=this.currentOperand.toString().slice(0,this.currentOperand.length-1);
        this.currentOperand= slicedString;
    }
    allClear()
    {
        this.previousOperand="";
        this.currentOperand="";
    }
    
}
const numberButtons=document.querySelectorAll("[data-number]");
const dataOperation=document.querySelectorAll("[data-operation]");
const deleteButton=document.querySelector("[data-delete]");
const allClearButton=document.querySelector("[data-all-clear]");
const equalsButton=document.querySelector("[data-equals]");
const previousOperandTextElement=document.querySelector("[data-previous-Operand]");
const currentOperandTextElement=document.querySelector("[data-current-Operand]");

let calculator= new  Calculator(previousOperandTextElement,currentOperandTextElement);
numberButtons.forEach((button)=>
{
     button.addEventListener("click",()=>
     {
           calculator.appendNumber(button.innerText);
           calculator.getDisplay();
     });
});

dataOperation.forEach((button)=>
{
    button.addEventListener("click",()=>
    {
        calculator.chooseOperation(button.innerText);
        calculator.getDisplay();
    });
});

deleteButton.addEventListener("click",()=>
{
      calculator.delete();
      calculator.getDisplay();
});

equalsButton.addEventListener("click",()=>
{
    calculator.compute();
    calculator.getDisplay();
});

allClearButton.addEventListener("click",()=>
{   
    calculator.allClear();
    calculator.getDisplay();
});