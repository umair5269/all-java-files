let originalString="I love my country Pakistan<br>I love my city Faisalabad<br>I love my Homeland"

let cities=['Faisalabad', 'Lahore', 'Peshawar', 'Islamabad', 'Karachi', 'Nawabshah']

document.getElementById('Originalstringbox').innerHTML=originalString

function clearInput() {
    document.getElementById("input").value="";

}
function clearOutput() {
    document.getElementById("output").innerHTML="";

}

function convertToLowercase(){
    let lowerCaseText= originalString.toLowerCase();

    document.getElementById('output').innerHTML=lowerCaseText;

}

function convertToUppercase(){
    
    let upperCaseText= originalString.toLocaleUpperCase();

    document.getElementById('output').innerHTML=upperCaseText
}

function convertToCapitalize(){
    
    let text=document.getElementById('input').value;
    if (text === ""){
        alert('Please enter your text')
        return
    }

    let capitalizedText= '<span style="text-transform: capitalize">' +text+ '<span>'
    document.getElementById('output').innerHTML=capitalizedText
}
function betterFormatting(){
    
    let text=document.getElementById('input').value;
    if (text === ""){
        alert('Please enter your text')
        return
    }
    let text1 =text.toLowerCase()

    document.getElementById('output').style.textTransform='capitalize'
    document.getElementById('output').innerHTML=text1
}


function printCities(){
    document.getElementById('output').innerHTML=""
 for(i=0;i<cities.length; i++){
    let print= 1+i +')'+'&nbsp;'+cities[i]+'<br>'

 document.getElementById('output').innerHTML+= print}
}


function addCity(){
    let city=document.getElementById('input').value;
    if(city ===""){
        alert('Please enter city name')
        return
    }


    let cityFirstLetter=city.slice(0,1).toUpperCase();
    let cityAllLetters=city.slice(1).toLowerCase();
    let cityFullName=cityFirstLetter+cityAllLetters
    let cityFound=false

    for(i=0;i<cities.length;i++){
        if(cities[i]=== cityFullName){
            cityFound=true
            let html='<span style="color:red; font-size:20px;">'+ cityFullName+'</span>'
            document.getElementById('output').innerHTML=html+'&nbsp;'+'is already in the list &#128531'
        }
    }

   if(cityFound=== false){
    cities.push(cityFullName)
    
    document.getElementById('output').innerHTML='<span style="color:green; font-size:20px;">'+ cityFullName+'</span>'+'&nbsp; has been successfully added in the List 	&#128516;'
   }


}

function checkCity(){
    let city=document.getElementById('input').value;
    if(city ===""){
        alert('Please enter city name')
        return
    }

    let cityFirstLetter=city.slice(0,1).toUpperCase();
    let cityAllLetters=city.slice(1).toLowerCase();
    let cityFullName=cityFirstLetter+cityAllLetters
    let cityFound=false

    for(i=0;i<cities.length;i++){
        if(cities[i]=== cityFullName){
            cityFound=true
            let html='<span style="color:red; font-size:20px;">'+ cityFullName+'</span>'
            document.getElementById('output').innerHTML=html+'&nbsp;'+'is in the list &#128541'
        }
    }
    if(cityFound=== false){
        cities.push(cityFullName)
        
        document.getElementById('output').innerHTML='<span style="color:green; font-size:20px;">'+ cityFullName+'</span>'+'&nbsp; is not in the list, to add in the list press Add City 	&#128516;'
       }

}

function findWord(){
    let neworiginalstring = originalString.toLowerCase()
    let word=document.getElementById('input').value;

    if(word===""){
        alert('Please add your word')
        return
    }
    let word1=word.toLowerCase()
    let findWord =neworiginalstring.indexOf(word1)
    if(findWord !== -1){
        document.getElementById("output").innerHTML = "Your Word &nbsp;" + '<span style="color:green;font-size:20px;font-weight:bold;>"'+word1+'</span>' + "Found at index &nbsp;" + findWord;
    }else{
        document.getElementById("output").innerHTML = "Your Word &nbsp;" + '<span style="color:red;font-size:20px;font-weight:bold;>"'+word1+'</span>' + "Does not Exist ";

    }
}

function replaceWord(){
    let neworiginalstring = originalString.toLowerCase()
    let word=document.getElementById('input').value;

    if(word===""){
        alert('Please add your word')
        return
    }
    word=word.toLowerCase()
    let replaceWith=prompt('Please enter a word with which you want to replace')
    if (!replaceWith){
        alert("Please enter word with which you want to replace in the prompt")
        return
    }
    word=new RegExp(word,'g')
    replaceWith=replaceWith.toLowerCase()
    let replaceWord=neworiginalstring.replace(word,replaceWith)
    document.getElementById('output').innerHTML= replaceWord
    
}