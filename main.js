const firstName = "Krzysiek";
const age = 42;
console.log(`Mam na imię ${firstName} i mam ${age} lata`);
const aboutMe = document.querySelector(".notes-article--js");
console.log(aboutMe);
aboutMe.innerHTML = `<h3>Witam tu ${firstName}</h3> To jest artykuł wygenerowany poprzez wstrzyknięcie
 tego tekstu do kodu DOM za pomocą funkcji innerHTML`;
console.log(aboutMe);
