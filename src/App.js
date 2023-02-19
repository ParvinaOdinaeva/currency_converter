import React, { useState } from "react";
import { Result } from "./Result";
import Form from "./Form";
import { currencies } from "./currencies";
import Container from "./Container";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <Container>
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
