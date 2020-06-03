const firstName = "Krzysiek";
const age = 42;
console.log(`Mam na imię ${firstName} i mam ${age} lata`);
const aboutMe = document.querySelector(".notes-article--js");
console.log(aboutMe);
aboutMe.innerHTML = `<h3>Witam tu ${firstName}</h3> To jest artykuł wygenerowany poprzez wstrzyknięcie
 tego tekstu do kodu DOM za pomocą funkcji innerHTML`;
console.log(aboutMe);

function myName(name,age) {
    return (`Nazywam się ${name} i mam ${age} lat`);
};

function calculate(number) {
    square = number * number;
    return `Kwadrat liczby ${number} to ${square}`;
};

console.log(calculate(5));

console.log(myName(firstName,age));

const aboutMeFunction = document.querySelector(".notes-article--welcomeFunction");

aboutMeFunction.innerHTML = `${myName('Tymon',48)} <br> Ale tak naprawdę to:<br> ${myName(firstName,age)}`;