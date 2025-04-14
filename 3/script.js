let cities= ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Nawabshah', 'daur', 'Kashmir'];

function clearInput() {
    document.getElementById("inputText").value="";
    
}
function clearOutput() {
    document.getElementById("output").innerHTML="";
}

for(let i=0; i  <cities.length; i++) {
    
    let num=i+1;
    document.getElementById('originalTextBox').innerHTML+= num + ')' + cities[i] +'&nbsp'+'&nbsp'
}



//  simple alert
function simpleAlert() {
    alert("umair");
}

// print my name
function printMyName() {
    let myName= document.getElementById("inputText").value

    if(myName=== ""){
        alert("Please enter your Name")
    return;
    }

    document.getElementById("output").innerHTML= myName

}
// print my cities
function printMyCities(){
    for(let i=0; i<cities.length; i++) {

        let num=i+1
        document.getElementById('output').innerHTML += num +')'+cities[i]+'<br>'
    }
}

// add city name

function addYourCity() {
    let city= document.getElementById('inputText').value

    if (city=== "") {
        alert('Please enter your City Name')
    return
}

cities.push(city)
document.getElementById('output').innerHTML+= '<span style="color: yellow; font-size="20px;>"'+city+'"</span> has been successfully added into List.';
}

function GenerateTable() {
    document.getElementById('output').innerHTML=""
    let num=['1', '2', '3','4','5','6','7','8','9','10',]
    let t= document.getElementById('inputText').value
    
    if (t=== ""){
        alert('Please enter which table you want')
    return}
    let limit=prompt('Enter the limit of the table')


    for (let i=0; i<limit; i++){
        document.getElementById('output').innerHTML+= t+''+'*'+''+num[i]+''+'='+''+t*num[i] +'<br>'}
}