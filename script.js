function decimalToBinary(num) {
  //Write you code here
	let ans = "";
	while(num>1){
		ans += "" + num%2;
		num = num/2;
	}
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
