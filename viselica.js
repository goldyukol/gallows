// Выбрать случайное слово
// Пока слово не угадано {
//  Показать игроку текущее состояние игры
//  Запросить у игрока вариант ответа
//  Если игрок хочет выйти из игры {
//  Выйти из игры
//  }
//  Иначе Если вариант ответа — не одиночная буква {
//  Сообщить игроку, что он должен ввести букву
//  }
//  Иначе {
//  Если такая буква есть в слове {
//  Обновить состояние игры, подставив новую букву
//  }
//  }
// }
// Поздравить игрока с победой — слово угадано


let name = prompt("Как Вас зовут?");
alert(`Привет, ${name}`);

let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "красивый",
    "аквариум",
    "медведь",
    "слово",
    "телефон",
    "физика",
    "математика",
    "университет",
    "собака",
    "шкаф",
    "фокусник",
];

let word = words[Math.floor(Math.random() * words.length)]; // выбирает рандомное число 

let answerMass = []; // создаем итоговый массив, которому задаем *_* соответствует кол-ву букв в слове
for (i = 0; i < word.length; i++) {
    answerMass[i] = "_";
}

let lengthRandomWord = word.length; // cоздаем переменную, длина рандомного слова
let health = 20;

while (lengthRandomWord > 0 && health > 0) { // создаем цикл, если длига рандомного слова > 0, то алертаем итоговый массив 

    alert(answerMass.join(" ")); // делаем его строкой через join

    let question = prompt("Угадайте букву или нажмите Отмена для выхода из игры").toLowerCase();

    if (question === null) { // если человек нажмет отмена - игра заканчивается
        break;
    } else if (question.length !== 1) { // если длина угаданной буквы не равно 1, сообщить ему об этом
        alert("Пожалуйста, введите только одну букву.");
    } else {
        health--;
        for (let j = 0; j < word.length; j++) { // 
            if (word[j] === question && answerMass[j] === "_") { // проверяем совпадает ли буква с ответом игрока
                answerMass[j] = question;
                lengthRandomWord--;
            }
        }
    }
}
alert(answerMass.join(" "));
if (health > 0) {
    alert("Было загадано слово " + word);
} else {
alert("Вы использовали слишком много попыток и проиграли!");
}