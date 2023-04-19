var requestURL = "https://api.exchangerate.host/latest?base=AZN";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

var exchangeRates;

request.onload = function () {
    var response = request.response;
    exchangeRates = response.rates;
    handleExchangeRates(exchangeRates);
};

function handleExchangeRates(rates) {
  const currencies = [
    { code: 'USD', selector: '#currency_USD' },
    { code: 'EUR', selector: '#currency_EUR' },
    { code: 'TRY', selector: '#currency_TRY' },
    { code: 'RUB', selector: '#currency_RUB' },
    { code: 'GEL', selector: '#currency_GEL' }
  ];

  currencies.forEach(currency => {
    document.querySelector(`${currency.selector} .exchange`).innerHTML = `1 AZN = ${rates[currency.code].toFixed(4)}`;
    document.querySelector(`${currency.selector} input.value_input`).value = (rates[currency.code] * 100).toFixed(4);
    document.querySelector(`${currency.selector} input.value_input`).setAttribute('cur', rates[currency.code].toFixed(4));
  });
}

const inputs = document.querySelectorAll(".value_input");

inputs.forEach((input) => {
    input.addEventListener("focus", function () {
        this.dataset.previousValue = this.value;
        this.value = "";
    });

    input.addEventListener("blur", function () {
        if (this.value !== "") {
            this.dataset.previousValue = this.value;
        } else {
            this.value = this.dataset.previousValue;
        }
    });
});

const aznInput = document.querySelector("#currency_AZN .value_input");
const inputsCur = document.querySelectorAll(".value_input");

aznInput.addEventListener("input", () => {
    const changedValue = aznInput.value;
    inputsCur.forEach((otherInput) => {
        if (otherInput === aznInput) return;
        const cur = otherInput.getAttribute("cur");
        const newValue = changedValue * cur;
        otherInput.value = newValue.toFixed(4);
    });
});

inputsCur.forEach((input) => {
    input.addEventListener("input", () => {
        if (input === aznInput) return;
        const azn_cur = input.getAttribute("cur");
        const changedValue = input.value;
        inputsCur.forEach((otherInput) => {
            if (otherInput === input) return;
            const cur = otherInput.getAttribute("cur");
            let newValue = (changedValue / azn_cur) * cur;
            if (otherInput === aznInput) {
                newValue = changedValue / azn_cur;
            }
            otherInput.value = newValue.toFixed(4);
        });
    });
});
