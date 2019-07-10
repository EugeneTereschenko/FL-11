function isInteger(num){
	return Math.ceil(num) - num === 0;
}

isInteger(5);
isInteger(5.1);