
const game = new Game('NOT_STARTED')
game.renderGame();

document.getElementById('js-start').onclick = createPlayer;

function createPlayer() {
	setPlayerName();
	setPlayerClass();
	console.log('Вот игрок', player);
}

function setPlayerName() {
	const playerName = prompt('Укажите имя персонажа!');
	if (!playerName) {
		alert('Давай-ка скажи как тебя зовут и не выёживайся!');
		setPlayerName();
	} else {
		player.Name = playerName;
	}
}

function setPlayerClass() {
	let chosenClass = prompt('Выбререте класс персонажа: "warrior" / "scout" / "wizard"');
	if (!chosenClass) {
		alert('Просто нужно что-то выбрать)');
		setPlayerClass();
	} else {
		chosenClass = chosenClass.toLowerCase();
	}

	if (chosenClass === 'warrior' || chosenClass === 'scout' || chosenClass === 'wizard') {
	setBasePlayerConfig(chosenClass);
	} else {
		alert('Ну ты чё картон? Нормально класс напиши!')
		setPlayerClass()
	}
}

function setBasePlayerConfig(chosenClass) {
	player.class = chosenClass;
	player.baseParams = baseConfig.baseParams[chosenClass];
}





// function getSquareSum() {
// 	return getSquare( prompt('Введите первое число.')) + getSquare(prompt('Введите второе число.'));
// }

// function getSquare(a) {
// 	return a * a;
// }

// console.log('Сумма квадрвтов = ', getSquareSum());


// function getPercent() {
// 	return prompt('Введите первое число.') / prompt('Введите второе число.') *  100;
// }

// console.log('Проценты ', getPercent());



// function checkHomeworkStatus() {	
// 	if (getSquareSum() == 265) {
// 		return 'perfect';
// 	} else {
// 		return 'nope';
// 	}
// }

// console.log(checkHomeworkStatus()); 


//С прошлого урока 

// const user = {};

// function setYearsByNumber(count) {
// 	if (count == 1 ) {
// 		return ' год';
// 	} else if (count >= 2 && count <=4) {
// 		return count + ' года';
// 	} else {
// 		return count + ' лет';
// 	}
// }

// alert('Привет, Давай-ка соберём твою страниицу тут!');

// user.name = prompt('Как тебя зовут?') || 'Олег';
// user.age = prompt('Сколько тебе лет?') || '0 лет';

// if (confirm('Ещё учишься в школе?')) {
// 	user.school = prompt('В какой какой школе учишься?') || 'Лицей 387';
// } else {
// 	user.job = prompt('Где работаешь?') || 'Нигде';
// }

// user.avatar = prompt('Скинь ссылку на фотку');

// document.getElementById('js-name').innerText = user.name;
// document.getElementById('js-age').innerText = 'Возраст: ' + user.age + setYearsByNumber(user.age);

// if(user.school) {
// 	document.getElementById('js-school').innerText = user.school;
// } else {
// 	document.getElementById('js-work').innerText = 'Должность: ' + user.job;
// }


