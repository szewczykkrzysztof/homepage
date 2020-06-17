const firstName = "Krzysiek";
const age = 42;
console.log(`Mam na imię ${firstName} i mam ${age} lata`);

function myName(name, age) {
  return `Nazywam się ${name} i mam ${age} lat`;
}

function calculate(number) {
  square = number * number;
  return `Kwadrat liczby ${number} to ${square}`;
}

console.log(calculate(5));

console.log(myName(firstName, age));

console.log(myName("Tymon", 48));

/* const myAction = () => {
  const newHeading = document.querySelector(".actionHeading--js");
  newHeading.innerHTML = `Właśnie podmieniłeś nagłówek`;

  tworzę funkcję strzałkową myAction
pobieram zawartość klasy i przypisuję do zmiennej
wstrzykuję do zmiennej nową treść, zawartość jest automatycznie podmieniana w klasie actionHeading--js 

myButton.addEventListener("click", myAction); //wywołuje funkcję myAction poprzez akcję click na elemencie myButton

/* Inny sposób zapisu to zagnieżdżenie funkcji (bez tworzenia nowej zmiennej): 

myButton.addEventListener('click', () => {
    const newHeading = document.querySelector(".actionHeading--js");
  newHeading.innerHTML = `Właśnie podmieniłeś nagłówek`;
});

*/

const burgerButton = document.querySelector(".burger--js"); //tworze zmienna podłączoną do ikony hamburgera

/*przypisuję do przycisku akcję na klik
tworzę zmienną zawierającą nawigację*/

burgerButton.addEventListener("click", () => {
  const topMenu = document.querySelector(".navigation--js");
  console.log(topMenu);
  topMenu.classList.toggle("navigation--mobile");
});
