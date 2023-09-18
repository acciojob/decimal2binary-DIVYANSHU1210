function decimalToBinary(num) {
  //Write you code here
	let n = parseFloat(num);
	let ans = "";
	while(n>=1){
		ans = Math.floor(num % 2) + ans;
		n = Math.floor(num / 2);
	}
	// consol.log(ans) 
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
