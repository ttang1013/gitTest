var totalGEN = 19;
var totalMW = 0;

for ( var count = 1; count<=totalGEN; count++ ) {
	if ( count%2==1 ) {
		console.log("Generator #"+count+" is off.");
	}
	else {
		if (count <= 4) {
			totalMW += 62;
			console.log("Generator #"+count+" is on, adding 62 MW, for a total of "+totalMW+" MW!");
		}	
		else if (count >= 5) {
		totalMW += 124;
		console.log("Generator #"+count+" is on, adding 124 MW, for a total of "+totalMW+" MW!");
		}
	}
	
}
