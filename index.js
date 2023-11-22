// Iteration 1: Names and Input
hacker1 = "Jakub";
let navigator2 = "Anna"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${navigator2}`);


// Iteration 2: Conditionals
if (hacker1.length > navigator2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (navigator2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let nameDriver = "";
let nameNavigator = "";

for (const letter of hacker1) {
    nameDriver += letter.toUpperCase() + " ";
}
for (const letter of navigator2) {
    nameNavigator += letter.toUpperCase() + " ";
}
console.log(nameDriver);
console.log(nameNavigator);

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(hacker1));

function nameCompare(str1, str2) {

    if (str1.length > str2.length) {
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] < str2[i]) {
                return `name ${str1} is before ${str2}`
            }
            else if (str1[i] > str2[i]) {
                return `name ${str2} is before ${str1}`
            }
            else if (str1[i] === str2[i]) {
                return 'same names';
            }
        }
    }
    else {
        for (let i = 0; i < str2.length; i++) {
            if (str1[i] < str2[i]) {
                return `name ${str1} is before ${str2}`
            }
            else if (str1[i] < str2[i]) {
                return `name ${str2} is before ${str1}`
            }
            else if (str1[i] === str2[i]){
                return 'same names';
            }
        }
    }

    // if (str1.localeCompare(str2) >  str2.localeCompare(str1)) {
    //     return `${str1} ist before ${str2}`
    // }
    // else if (str1.localeCompare(str2) <  str2.localeCompare(str1)) {
    //     return `${str2} ist before ${str1}`

    // }
    // else {
    //     retur `u have same names`
    // }
}

console.log(nameCompare(hacker1, navigator2));


// BONUS

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra orci arcu, vitae suscipit urna condimentum ac. In placerat urna eget tellus lobortis, vitae mattis tortor ultricies. Mauris at interdum lorem, eu egestas ante. Duis ultricies justo vel ipsum vehicula, at pellentesque sapien ullamcorper. Morbi ut massa quis nunc volutpat viverra. Nulla ante nulla, condimentum blandit rhoncus non, egestas et neque. Vestibulum tincidunt imperdiet nisi a consectetur. In hac habitasse platea dictumst. Aliquam erat volutpat. Aliquam rhoncus leo magna, non porttitor nisi egestas a. Cras sed accumsan nulla. Quisque a quam non lectus pulvinar commodo et quis augue.

Vestibulum ut ultricies nibh. Morbi tortor dolor, consectetur sit amet neque vel, consequat rutrum lorem. Sed ac nulla consequat, efficitur diam et, venenatis odio. Vestibulum interdum nunc sed varius sagittis. Nam nec urna sed lorem rhoncus lacinia facilisis id tellus. Sed posuere, libero vel mattis tempus, lorem enim congue arcu, a eleifend lacus est tincidunt enim. Aliquam erat volutpat. Vivamus a mollis ex, vel dapibus neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean nisi velit, accumsan a nibh et, pharetra finibus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Donec velit elit, vestibulum a velit in, volutpat aliquam ante. Suspendisse potenti. Curabitur ut velit eget augue tristique sagittis a vel nisi. Aliquam vel vestibulum nisi. Vivamus libero est, dapibus nec venenatis non, facilisis ac quam. Nam ut orci id arcu imperdiet finibus consequat nec neque. Curabitur in dapibus mi. Nulla maximus mattis arcu. Nam vulputate lorem mauris. In eleifend maximus nibh ac commodo. Duis et porta mi, id pharetra purus. Sed est est, condimentum id euismod tincidunt, ultrices eu justo. Phasellus ac tellus in nunc dictum imperdiet eu id turpis. Ut euismod odio non purus interdum, et molestie dui lobortis. Ut ut ligula rhoncus, varius lectus vitae, pretium leo.`


function charCount(str){
   return str.length
}
console.log(charCount(longText));


function etCunt(str) {
    let counter = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i]+str[i+1] === "et"){
            counter += 1
        }
    
    }
    return counter

}
console.log(etCunt(longText));

// Bonus2

let phraseToCheck = "A man, a plan, a canal, Panama!";

function palinsdromeChecker(str1, str2){
   if (str1.split("").reverse().join("").toLowerCase() === str2.toLowerCase()) {
       return "the quote is a palinfdrome" 
   }
   else {
    return "it's not a palindrome"

   }
}
console.log(palinsdromeChecker("Arra", "Arra"));