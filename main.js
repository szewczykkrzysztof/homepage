const firstName = "Krzysiek";
const age = 42;
console.log(`Mam na imię ${firstName} i mam ${age} lata`);

function myName(name,age) {
    return (`Nazywam się ${name} i mam ${age} lat`);
};

function calculate(number) {
    square = number * number;
    return `Kwadrat liczby ${number} to ${square}`;
};

console.log(calculate(5));

console.log(myName(firstName,age));

console.log(myName('Tymon',48));

const aboutMe = document.querySelector(".about-me--js");

aboutMe.innerHTML = `${myName(firstName,age)}`;