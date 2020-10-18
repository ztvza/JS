class Game {
	constructor(currentStage) {
		this.stage = currentStage;
}

	setStage(newStage) {
		this.stage = newStage;
	}

	renderGame() {
		document.getElementById('js-body') 
		.innerHTML = '<button class="button -success" id="js-start"> Начать игру </button>';
	}
}


// Class car {
// 	maxSpeed;
// 	seatCount;
// 	doorsCount;
// 	brand;

// 	constructor(brand, maxSpeed) {
// 		this.branb =branb;
// 		this.maxSpeed =maxSpeed;
// 	}

// 	driveForward = () => {};
// 	driveBackward = () => {};
// }

// const myFirstCar = new Car('Zaporojec');

// Class Engine {
// 	constructor(horsPover, cilinderCount){
// 		this.horsePower = horsePower;
// 		this.cilinderCount = cilinderCount;
// 	}
// }