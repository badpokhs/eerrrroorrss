import readline from 'readline';


// tax rate for unmarried people (source : https://english.onlinekhabar.com/nepal-income-tax-slabs-2022-23.html )

function calculateTaxU(income: number):number {
  let tax =0;

  if (income <= 500000) 
  {
    tax = (income * 0.01);
    console.log(`tax is for 5lakhs bracket`);
  } else if (income <= 700000)
  {
    tax = 5000 + ((income - 500000) * 0.1);
    console.log(`tax is for 7lakhs bracket`);
  } else if (income <= 1000000)
  {
    tax = 25000 + ((income - 700000) * 0.2);
    console.log(`tax is for 10lakhs bracket`);
  } else if (income <=2000000)
  {
    tax = 85000 + ((income - 1000000) * 0.3);
    console.log(`tax is for 20lakhs bracket`);
  } else 
  {
    tax = 385000 + ((income - 2000000) * 0.36);
    console.log(`tax is for more than (or for 20+) 20lakhs bracket`);
  }
  return tax;
}



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your yearly salary: NPR  ', (salary) =>{
  const income: number = parseFloat(salary);
  if (isNaN(income)){
    console.log(' Salary that you have Entered is Invalid');
    rl.close();
    return;
  }
  
  const tax = calculateTaxU(income);
  console.log(`Your yearly tax is NPR ${tax}` );
  rl.close();
  });

  export default calculateTaxU;