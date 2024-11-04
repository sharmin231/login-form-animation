const searchInputElm = document.querySelector("#search-input");
const productNameInput = document.querySelector("#product-name");
const productPriceInput = document.querySelector("#product-price");
const msgElm = document.querySelector("#msg");
const form = document.querySelector("form");

function reset() {
    productNameInput.value = "";
    productPriceInput.value = "";
}

function removeMsg() {
    msgElm.textContent = "";
}

function errorMsg(msg) {
    const textMsg = `<div role="alert" class="alert alert-error">
        ${msg}
    </div>`;
    msgElm.insertAdjacentHTML("afterbegin", textMsg);

    setTimeout(() => {
        removeMsg()
    },2000)
}

function inputValidation(name, price) {
    let isValid = true;
    if (name === "" || price === "") {
        isValid = false;
        errorMsg("Please fill the field");
    }
    if (Number(price) !== Number(price)) {
        isValid = false;
        errorMsg("please provide a valid number")
    }
    reset()
    // if (!isValid) return;
    return isValid;
}

function receiveInputValue() {
    const name = productNameInput.value;
    const price = productPriceInput.value;
    return { name, price };
}

function handleSubmitForm(e) {
    e.preventDefault();
    const { name, price } = receiveInputValue();
    const isValid = inputValidation(name, price);
    if (!isValid) return;
    reset()
    console.log(name,price)
}

form.addEventListener("submit", handleSubmitForm);

