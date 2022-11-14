# find the team with the name "Team -Add job" in the list. and when the name matches click on the edit button of that team

let teamNames = document.querySelectorAll(".css-111fpca");
let edit = document.getElementsByClassName("chakra-button css-1ajouxr");
for(let i=0;i<teamNames.length;i++){
	let name = teamNames[i].innerText
	console.log(name);
	if (name == "TEAM - ADD JOB") {
		edit[i].click()
	}
}





// find the length of the radio button list, then randomly select any of the options using math random //

let option = document.getElementsByClassName("chakra-form-control css-1kxonj9")[0].childNodes;
let length = document.getElementsByClassName("chakra-form-control css-1kxonj9")[0].childNodes.length;


function getRandom(max){
  return Math.floor(Math.random()*(max));
}
let pos = getRandom(length);
console.log(pos); 
let item = option[pos];
item.click();


// find the value of the selected radio button - example : hybrid //

let document.querySelectorAll('input[type="radio"]:checked')[0].value


// apply if condition to add location if it matches specific value//





//typing and selecting location values in the loaction search box//

var searchElement = document.getElementsByClassName("chakra-input css-qnv7z9 pac-target-input")[0];
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(searchElement, "florida");
var ev2 = new Event('input', { bubbles: true});
searchElement.dispatchEvent(ev2); var clickEvent = new Event('click', { bubbles: true});searchElement.dispatchEvent(clickEvent);



# checking the if the progress bar gets updated when the mandatory values of the forms are field 

let requiredCount = document.getElementsByClassName("chakra-text css-1a76fz1").length;
document.getElementsByClassName("chakra-stack css-nad0z9")[0].childNodes[1].click();
requiredCount += document.getElementsByClassName("chakra-text css-1a76fz1").length;
document.getElementsByClassName("chakra-stack css-nad0z9")[0].childNodes[2].click();
requiredCount += document.getElementsByClassName("chakra-text css-1a76fz1").length;
console.log(requiredCount);

let perField = 100/requiredCount; console.log(perField);

let prog = parseInt(document.getElementsByClassName("css-8kdlzl")[0].innerText.replace("%",""));

//going to hiring manager and validating the initial value of the progress bar with the presence of a hiring manager

document.getElementsByClassName("chakra-stack css-nad0z9")[0].childNodes[1].click();
let hiringManager = document.getElementsByClassName("chakra-text css-1jk0u31");console.log(hiringManager.length);
if (hiringManager.length >=1 && prog == perField){
        console.log("hiring manager exist")} 
else {
        console.log("hiring manager not found");}
 // going back to overview page        
document.getElementsByClassName("chakra-stack css-nad0z9")[0].childNodes[0].click();
//getting all the mandatory fields in the overview page
let overview = document.getElementsByTagName("form")[0].querySelectorAll("[required]"); 
        

for(let i=0;i<overview.length;i++){
    if(overview[i].value != "") 
        {prog +=perField}
};

let newProg = parseInt(document.getElementsByClassName("css-8kdlzl")[0].innerText.replace("%",""));
if(prog == newProg) {
    console.log("progress bar updated");
    console.log("prog =" + prog +" newProg =" + newProg);
} 
    else { console.log("progress bar not updated");
        console.log("prog =" + prog +" newProg =" + newProg);
    };
//going to job description page
document.getElementsByClassName("chakra-stack css-nad0z9")[0].childNodes[2].click();

let jobDesc = document.getElementsByClassName("css-1vkm91");
for(let i=0;i<jobDesc.length;i++){
    if(jobDesc[i].innerText != "") 
        {prog +=perField}
};

let newProg = parseInt(document.getElementsByClassName("css-8kdlzl")[0].innerText.replace("%",""));

if(prog == newProg) {
    console.log("progress bar updated");
    console.log("prog =" + prog +" newProg =" + newProg);
} 
    else { console.log("progress bar not updated");
        console.log("prog =" + prog +" newProg =" + newProg);
    };



Check if the only hiring manager can bhe delete or not:

let users = document.getElementsByClassName("chakra-text css-1jk0u31"); 
let deletebutton = document.getElementsByClassName("chakra-button css-uuk8lz");
let newDel = [...deletebutton];
if(users.length >1 && deletebutton.length == users.length) { 
    for(let i=1;i<newDel.length;i++) {
        deletebutton[i].click();
        console.log(i);
    }
}
if(users.length =1 && deletebutton.length == "") {
    console.log("user can't be delete")
    }else {
        console.log("issue with HM deletion")
    }





Delete for hiring manager : 

let del = document.getElementsByClassName("chakra-button css-uuk8lz");
 let del1 = [...del];
	for(let i=1;i<del1.length;i++){
		del[1].click(); 
		console.log(i);
		};

Delete for others :
let del = document.getElementsByClassName("chakra-button css-uuk8lz"); 
let del1 = [...del] ;
	for(let i=0;i< del1.length;i++){
		del[0].click(); 
		console.log(i);
		};


document.getElementsByClassName("css-qa8l2m")[0].click();








function addHiringManager(hName){
    let matched = false; 
    for(let i=0;i<name.length;i++){
        if (name[i].innerText.split(" ")[0].toLowerCase(); == value) {
            matched = true;
            break;
        } 
    }return matched
};
let result = addHiringManager("tuba");        
if (result == false){
           var searchElement = document.getElementsByTagName("input")[4];
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(searchElement, hName);
var ev2 = new Event('input', { bubbles: true});
searchElement.dispatchEvent(ev2);}
else {addHiringManager("tuba")



let parent = document.getElementsByClassName("chakra-stack css-n59b2l")[1]
let name = parent.getElementsByClassName("chakra-text css-c25bs5");

let name_list = ['niketa','rajrup','tuba']

 
function addHiringManager(hName){
    let matched = false; 
    for(let i=0;i<name.length;i++){
        if (name[i].innerText.split(" ")[0].toLowerCase() == hName) {
            matched = true;
            break;
        } 
    }return matched
};
let result = addHiringManager.apply(this,name_list); 
if (result == false){
    inputValueSetter.apply(this,name_list)
};
function inputValueSetter(hirName){
    document.getElementsByClassName("chakra-button css-1ahs89b")[0].click()




//search box identifier
var searchElement = document.getElementsByClassName("chakra-input css-s3tjoi")[0];
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(searchElement, hirName);
var ev2 = new Event('input', { bubbles: true});
searchElement.dispatchEvent(ev2);}

setTimeout(() => {
    searcName = document.getElementsByClassName("chakra-stack css-1uidwu")[0];
searchSuggestion = !!document.getElementsByClassName("chakra-stack css-1uidwu")[0];
if(searchSuggestion == true){ 
    searcName.click();
    }}, 2000); 
  



Each Delete requires api call... 

let workExp = document.querySelector('[aria-labelledby="tabs-20--tab-1"]');
let editWorkExpList = workExp.getElementsByClassName("chakra-menu__menu-button css-1n4hbl5");
for (let i = 0; i<editWorkExpList.length; i++) {
    setTimeout(() => {
        editWorkExpList[editWorkExpList.length - 1].click();
        workExp.getElementsByClassName("chakra-menu__menuitem css-lsd9bc")[editWorkExpList.length - 1].click(); },1000 * i);
};


extract work exp year and check if sorted in desc order:

let workExp = document.querySelector('[aria-labelledby="tabs-20--tab-1"]');
let startDateList = workExp.querySelectorAll('input[placeholder="Select Start Date"]');
yearArray = []; 
for(let i=0; i<startDateList.length; i++){ 
    let newDate = new Date(startDateList[i].value);
    yearArray.push(newDate.getFullYear())
    }
console.log(yearArray);
let sorted = true;

for(let i=0; i<yearArray.length-1;i++){
    if (yearArray[i]> yearArray[i+1]){
        sorted ;
    }else {
        sorted = false;
    }
}





let sourced_column = document.querySelector('[title="Sourced"]');
let candidate_list = sourced_column.getElementsByClassName("chakra-text css-1q7km0t")
console.log(candidate_list);
for( i = 0; i <candidate_list.length;i++){
    let name = candidate_list[i].innerText; let new_name = new RegExp("Test\\s"+ "wOScyx");
    result = new_name.test(name)
    console.log(result);
    if (result){
        console.log(candidate_list[i],i);
       candidate_list[i].click();
    }
};




Generate random email id in PYTHON

import random
import string

def email():
    return "".join(random.choices(string.ascii_letters+string.digits, k=7))
    
print(email()+ "@ghail.com")


OR 

def email():
    return "".join(random.choice(string.ascii_lowercase) for i in range(15))
    
print(email()+ "@ghail.com")












let significant_accomplishment = document.querySelectorAll('[class = "chakra-stack css-me3veq"]')[2]

significant_accomplishment.querySelectorAll('[class = "chakra-stack css-iew95a"]')




let ratings = document.querySelectorAll('[class = "chakra-stack css-f97l2k"]')
list = []; 
for(i=0;i<ratings.length;i++){
list.push(Number(ratings[i].querySelector('p[class = "chakra-text css-i7urnb"]').innerHTML))
}
const average = list.reduce((a, b) => a + b, 0) / list.length;
console.log(average)

$Tasneem@2020


## Member - side navigation list check

let allowed_items = ["profile", "users"]
let side_bar_list = document.querySelectorAll('div[href]')
let menu_items = []
for(i=0; i<side_bar_list.length;i++){menu_items.push(side_bar_list[i].textContent)}




get all the option of the user invite role dropdown list:

function display() {
        
            let a = document.querySelector('select[name = "roleId"]')
            let options = [];
            for (let i = 1; i < a.length; i++) {
               options.push(a.options[i].text);
            }
            console.log(options);
         }