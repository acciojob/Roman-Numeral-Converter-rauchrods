function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	     let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let strs = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    
    let strans= "";
    
    for(let i=0;i<values.length;i++) {
        while(num >= values[i]) {
            num -= values[i];
            strans+=strs[i];
        }
    }
    return strans;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
