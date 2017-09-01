var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');


function secHand(){
	var counter = 0;
	setInterval(function(){
		counter++;
		secondHand.style.transform = "rotate(" + counter + "deg)";
	}, 1000);
}


function minHand(){
	var counter = 0;
	setInterval(function(){
		counter+=6;
		minuteHand.style.transform = "rotate(" + counter + "deg)";
	}, 60000);
}


function hrHand(){
	var counter = 0;
	setInterval(function(){
		counter+=30;
		hourHand.style.transform = "rotate(" + counter + "deg)";
	}, 300000);
}

secHand();
minHand();
hrHand();