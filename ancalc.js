document.getElementById("enter").value=""
function zero(){
    document.getElementById("enter").value+="0"
}
function one(){
    document.getElementById("enter").value+="1"
}
function two(){
    document.getElementById("enter").value+="2"
}
function three(){
    document.getElementById("enter").value+="3"
}
function four(){
    document.getElementById("enter").value+="4"
}
function five(){
    document.getElementById("enter").value+="5"
}
function six(){
    document.getElementById("enter").value+="6"
}
function seven(){
    document.getElementById("enter").value+="7"
}
function eight(){
    document.getElementById("enter").value+="8"
}
function nine(){
    document.getElementById("enter").value+="9"
}
function clearing(){
    document.getElementById("enter").value=""
}
let count = 0
function modulus(){
    document.getElementById("enter").value+="%"
    // count=1

}
function divi(){
    document.getElementById("enter").value+="/"
}
function mult(){
    document.getElementById("enter").value+="*"
}
function sub(){
    document.getElementById("enter").value+="-"
}
function add(){
    document.getElementById("enter").value+="+"
}
function dot(){
    document.getElementById("enter").value+="."
}
let c=0
function sqrt(){
    document.getElementById("enter").value ="√" + document.getElementById("enter").value
    c++    
}
function del(){
document.getElementById("enter").value=document.getElementById("enter").value.slice(0,-1)
}
document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      eq()
    }
  });
function eq(){
    let textbox = document.getElementById("enter").value

    let n =document.getElementById("enter").value.indexOf('%')
    if(n>=0){document.getElementById("enter").value=textbox.replace(textbox[n],"*0.01*")}

    // if(count===1){
    //     for(let i=0;i<textbox.length;i++){
    //         if(textbox[i]=='%'){r=i;break}
    //     }
    //     document.getElementById("enter").value=textbox.replace(textbox[r],"*0.01*")
    // }
    if(c>0){
        let arr=""
        for(let i=1;i<=c;i++){
            arr = document.getElementById("enter").value.split("")
            arr.shift()
            document.getElementById("enter").value = arr.join("")

        }
        let sqrtcalc = eval(document.getElementById("enter").value)
        for(let i=1;i<=c;i++){
            sqrtcalc=Math.sqrt(sqrtcalc)
        }
        document.getElementById("enter").value=sqrtcalc
    }
    else{
    let str = eval(document.getElementById("enter").value)
    document.getElementById("enter").value= str
    }
    c=0
    // count=0
    n=-1;
}
