import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import "./style.css";


const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p>
          <label>
            <span className="form__label">Amount in PLN*:</span>
          </label>
          <input
          value={amount}
          onChange={({target}) => setAmount(target.value)}
            className="form__input"
            type="number"
            name="amount"
            autofocus
            placeholder="enter the amount"
            min="1"
            step="any"
            required
            />
        </p>
        <p>
          <label>
            <span className="form__label">Initial currency*:</span>
            <select
              name="initialCurrency"
              className="form__input"
              required
              placeholder="initial currency"
              list="currency"
              value={currency}
              onChange={({target}) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.name} value={currency.name}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <Result result={result} />
        <p>
          <button className="form__button">Convert</button>
        </p>
        </fieldset>
    </form>
  );
};

export default Form;
