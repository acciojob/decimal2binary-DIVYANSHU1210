function decimalToBinary(num) {
  //Write you code here
	let n = parseFloat(num);
	let ans = "";
	while(n>=1){
		ans += "" + n%2;
		n = n/2;
	}
	// consol.log(ans) 
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
