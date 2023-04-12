import readline from 'readline';


// tax rate for married people (source : https://english.onlinekhabar.com/nepal-income-tax-slabs-2022-23.html )

function calculateTaxM(income: number):number {
  let tax =0;

  if (income <= 600000) 
  {
    tax = (income * 0.01);
    console.log(`tax is for 6lakhs bracket`);
  } else if (income <= 800000)
  {
    tax = 6000 + ((income - 600000) * 0.1);
    console.log(`tax is for 8lakhs bracket`);
  } else if (income <= 1000000)
  {
    tax = 26000 + ((income - 800000) * 0.2);
    console.log(`tax is for 11lakhs bracket`);
  } else if (income <=2000000)
  {
    tax = 86000 + ((income - 1100000) * 0.3);
    console.log(`tax is for 20lakhs bracket`);
  } else 
  {
    tax = 356000 + ((income - 2000000) * 0.36);
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
  
  const tax = calculateTaxM(income);
  console.log(`Your yearly tax is NPR ${tax}` );
  rl.close();
  });

  export default calculateTaxM;