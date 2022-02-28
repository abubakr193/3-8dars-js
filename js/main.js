var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elResultPedastrian = elForm.querySelector(".pedastrian__result");
var elResultBike = elForm.querySelector(".bike__result");
var elResultCar = elForm.querySelector(".car__result");
var elResultPlane = elForm.querySelector(".plane__result");



// Speed

var SPEED_PEDASTRIAN = 3.6;
var SPEED_BIKE = 20.1;
var SPEED_CAR = 70;
var SPEED_PLANE = 800;



// Format date

var time = function(resultTime){
    var hour = Math.floor(resultTime);
    
    var minute = Math.floor((resultTime - hour)* 60);
    
    var second = Math.floor(((resultTime - hour)* 60 - minute )* 60)
    
    if (hour == 0){
        return minute + ' minut ' + second + ' sekund'
    }
    
    return hour + ' soat ' + minute + " minut " + second + ' sekund'
}

// Convert Time

var calculateTime = function(distance , speed, result){
    result.textContent = time(distance / speed);
}


elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var inputValue = Number(elInput.value.trim());
    
    
    
    calculateTime(inputValue, SPEED_PEDASTRIAN, elResultPedastrian);
    calculateTime(inputValue, SPEED_BIKE, elResultBike);
    calculateTime(inputValue, SPEED_CAR, elResultCar);
    calculateTime(inputValue, SPEED_PLANE, elResultPlane);
})


