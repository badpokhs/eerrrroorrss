import React, { useState } from "react";
// import calculateTaxU from './unMarriedtax.ts';
// import calculateTaxM from './marriedTax.ts'


function Form() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState<number>(0);
  const [isMarried, setIsMarried] = useState(false);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let taxRate = isMarried ? calculateTaxU : calculateTaxM;
    let calculatedTax = salary * taxRate;
    setTaxAmount(calculatedTax);
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}
          />
          <br />
          Enter your yearly salary:
          <input type="number" value={salary}  />
          <br />
          Are you Married?
          <input type="checkbox" checked={isMarried} onChange={() => setIsMarried(!isMarried)} />
        </label>
        <br />
        <button type="submit" formMethod="get" value="Submit">Calculate</button>
      </form>
      <p>
        Tax amount:{" "}
        {taxAmount > 0
          ? `Rs. ${taxAmount.toFixed(2)}`
          : "Please enter your salary and marital status to calculate tax"}
      </p>
    </div>
  );
}

function calculateTaxU(income: number): number {
  let tax = 0;

  if (income <= 500000) {
    tax = (income * 0.01);
    console.log(`tax is for 5lakhs bracket`);
  } else if (income <= 700000) {
    tax = 5000 + ((income - 500000) * 0.1);
    console.log(`tax is for 7lakhs bracket`);
  } else if (income <= 1000000) {
    tax = 25000 + ((income - 700000) * 0.2);
    console.log(`tax is for 10lakhs bracket`);
  } else if (income <= 2000000) {
    tax = 85000 + ((income - 1000000) * 0.3);
    console.log(`tax is for 20lakhs bracket`);
  } else {
    tax = 385000 + ((income - 2000000) * 0.36);
    console.log(`tax is for more than (or for 20+) 20lakhs bracket`);
  }
  return tax;
}

function calculateTaxM(income: number): number {
  let tax = 0;

  if (income <= 600000) {
    tax = (income * 0.01);
    console.log(`tax is for 6lakhs bracket`);
  } else if (income <= 800000) {
    tax = 6000 + ((income - 600000) * 0.1);
    console.log(`tax is for 8lakhs bracket`);
  } else if (income <= 1000000) {
    tax = 26000 + ((income - 800000) * 0.2);
    console.log(`tax is for 11lakhs bracket`);
  } else if (income <= 2000000) {
    tax = 86000 + ((income - 1100000) * 0.3);
    console.log(`tax is for 20lakhs bracket`);
  } else {
    tax = 356000 + ((income - 2000000) * 0.36);
    console.log(`tax is for more than (or for 20+) 20lakhs bracket`);
  }
  return tax;
}



export default Form;