/*//print on document area
document.write("Hello PKMC");
//display popup message
window.alert("Welcome PKMC");
*/
console.log("Welcome PKMC");
console.warn("Welcome PKMC");
console.error("Welcome PKMC");
console.info("Welcome PKMC");

//window.alert("Welcome PKMC");
//confirm dialog
/*if(confirm("Are you 18+")){
    alert("You are ready to vote");
} else {
    alert("You can't vote");
}*/

let age = parseInt(prompt("Enter your age?"));
if(age >= 18){
    alert("You are ready to vote");
} else {
    alert("You can't vote");
}