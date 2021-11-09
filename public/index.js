import App from './../dist/App.js';

const app = new App({ counter: 0, root: "app" });
const incrementButtonElement = document.getElementById("incrementButton");
const decrementButtonElement = document.getElementById("decrementButton");

app.create();

incrementButtonElement.onclick = () => app.increment();
decrementButtonElement.onclick = () => app.decrement();
