function clearInput(){
    document.getElementById('output').innerHTML=""
    value=""
}
let value=""
function addvalue(digit){
value +=digit
document.getElementById('output').innerHTML=value
}
function calculate(){
    let calculatedValue=eval(value)
    document.getElementById('output').innerHTML= calculatedValue
}