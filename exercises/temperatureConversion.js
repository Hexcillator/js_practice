const kelvin=260;
/* kelvin is similar to Celsios we have to only subtract 273 from kelvin */
let celsius =kelvin - 273;

console.log(`If we have ${kelvin} degrees Kelvin the conversion to other units of temperature measurements are as follows:`);
/* we can use the following formula to calculate Fahrenheit*/
let fahrenheit = Math.floor(celsius * (9/5)+ 32);
//and this for newton
let newton = Math.floor(celsius * 33/100);


console.log(`Celsius: ${celsius}`);
console.log(`Fahrenheit: ${fahrenheit}`);
console.log(`Newton: ${newton}`);
