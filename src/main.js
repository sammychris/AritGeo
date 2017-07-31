'use strict';

module.exports ={
aritGeo: (val) => {
	var diff = val[1] - val[0];
	var rate = val[1] / val[0];
	var initial = val[0];
	var i = 1;
	var arit = true;
	var geo = true;

	if(val == false || typeof val== 'boolean' || typeof val == 'number'){
			return 0;
	}else{
		while(arit == true && val[i] != undefined){
			if(val[i]-initial == diff){
				initial = val[i];
				i++;
			}else{
				arit = false;
				initial = val[0]
				i = 1;
			}
		}
		 while(geo == true && val[i] != undefined){
			if(val[i]/initial == rate){
				initial = val[i]
			}else{
				geo = false;
			}
			i++
		}
	}		
	if(arit) {
		return "Arithmetric";
	} else if(geo) {
		return "Geometric";
	}else{
		return "-1";
	}
}
}
