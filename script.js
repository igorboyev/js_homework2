let price = 0,
    hamburger = 10,
    cheeseburger = 15,
    doubleCheese = 5,
    potato,
    smallPotato = 10,
    middlePotato = 15,
    bigPotato = 20,
    sauce,
    ketchup = 2,
    mayonnaise = 3;


let burgerChoice = prompt(`hamburger or cheeseburger`);
if (burgerChoice !== null) {
    burgerChoice = burgerChoice.replaceAll(` `, ``).toLowerCase();
}
if (burgerChoice === `cheeseburger`) {
    price += cheeseburger;
    let doubleCheeseChoice = confirm(`Would you like to add double cheese?`);
    if (doubleCheeseChoice) {
        price += doubleCheese;
    }
} else {
    burgerChoice = `hamburger`;
    price += hamburger;
}

let potatoChoice = confirm(`Would you like potato?`);
if (potatoChoice) {
    potato = prompt(`Choose potato size: small/middle/big`);
    if (potato !== null) {
        potato = potato.replaceAll(` `, ``).toLowerCase();
    }
    if (potato === `middle`) {
     price += middlePotato;
    }
    if (potato === `big`) {
        price += bigPotato;
    } else {
        potato = `small`
        price += smallPotato;
    }
}

let sauceChoice = confirm(`Would you like sauce?`);
if (sauceChoice) {
    sauce = prompt(`Choose sauce: ketchup/mayonnaise`);
    if (sauce !== null) {
        sauce = sauce.replaceAll(` `,``).toLowerCase()
    }
    if (sauce === `mayonnaise`) {
        price += mayonnaise;
    } else {
        sauce = `ketchup`;
        price += ketchup;
    }
}

document.write(`<h2>Your order:</h2>
	<ul>
		<li>Bulka 🍔: ${burgerChoice} </li>`);
if (potatoChoice) {
    document.write (`<li>Potato 🍟: ${potato} </li>`);
}
if (sauceChoice) {
    document.write(`<li>Sauce 🧂: ${sauce} </li>`);
}
document.write(`</ul>
     <p>Price: ${price} </p>`);