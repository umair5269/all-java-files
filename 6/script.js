function clearInput(){
    document.getElementById('input').value=""
}
function clearOutput(){
    document.getElementById('output').innerHTML=""
}

document.getElementById('Originalstringbox').innerHTML="25.5467"

// other Functions

function emptyInput(){
    alert("Please add number")
    return
}

const inputValue= ()=>{
    return document.getElementById('input').value}
    
    function outputDisplay(html){
        document.getElementById('output').innerHTML=html
    }
    // Round Number

function roundNumber(){
    let num= inputValue()
    if(num===""){
        emptyInput()
    }
    let html=Math.round(num)
    outputDisplay(html)
}
    // ceil Number

function ceilNumber(){
    let num= inputValue()
    if(num===""){
        emptyInput()
    }
    let html=Math.ceil(num)
    outputDisplay(html)
}

// floor number

function floorNumber(){
    let num= inputValue()
    if(num===""){
        emptyInput()
    }
    let html=Math.floor(num)
    outputDisplay(html)
}
// random number

function randomNumber(){
    // let num= inputValue()
    // if(num===""){
    //     emptyInput()
    // }
    let html=Math.random()
    outputDisplay(html)
}

// throw dice

function throwDice(){
    // let num= inputValue()
    // if(num===""){
    //     emptyInput()
    // }
    let num=Math.random()
    let dice=6*num+1
    let html=Math.floor(dice)
    outputDisplay(html)
}

// password

function generatePass(){

    document.getElementById('output').innerHTML=""
    let length=inputValue()
    if(!length){
        alert('Please enter length of the password')
        return
    }

    if(length !== 'number'){
        alert('Input value is not a number')
        return
    }
    
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCase="abcdefghijklmnopqtstuvwxyz"
    let digits="0123456789"
    let symbols="!@#$%&"
    let possiblePass= upperCase+lowerCase+digits+symbols

    for(i=0;i<length;i++){
        let random=Math.random()
        random=random*(possiblePass.length)
        random=Math.floor(random)
        let password=possiblePass.charAt(random)
        let html=document.getElementById('output').innerHTML+=password
        html= '<span style="color:red; font-weight:bold; font-size:30px">'+html+'</span>'
        outputDisplay(html)
    }
}

// converting strings

function convertString(){
    let string= inputValue()
    if(string===""){
        emptyInput()
    }

    let html=parseInt(string)
    html="The  Only Integer Number is "+ '<span style="color:green; font-weight:bold; font-size:30px">'+'"'+html+'"'+'</span>'
    outputDisplay(html)

}

// controlling length

function controllLength(){
    let num= inputValue()
    if(num===""){
        emptyInput()
    }
    num=parseFloat(num)
    let html=num.toFixed(1)

    outputDisplay(html)
    
}

// calculate gst

function calculateGST(){
    let price= inputValue()
    if(price===""){
        emptyInput()
    }

    let tax= prompt('Enter the gst percentage in number')
    let total= (parseInt(price)+ price*(tax/100))
    let html= "Price= "+'<span style="color:blue; font-weight:bold; font-size:30px">'+'"'+price+'"'+'</span>'+"<br>"+"Tax Percentage= "+'<span style="color:red; font-weight:bold; font-size:30px">'+'"'+tax+'"'+"<br>"+'</span>'+"Total= "+'<span style="color:green; font-weight:bold; font-size:30px">'+'"'+total+'"'+'</span>'
outputDisplay(html)
}