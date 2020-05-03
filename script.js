var money = prompt("Ваш бюджет на месяц?", "");
var timeData = prompt("Введите дату в формате YYYY-MM-DD", "");
var answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var answer2 = prompt("Во сколько обойдется?", "");

let appData = {

    budget : "money",
    timeData : "timeData",
    expenses : {answer1 : answer2},
    optionalExpenses : "",
    income : [],    
    savings: false,


};


alert('Ваш бюджет на 1 день сотавляет ' + money / 30 + ' рублей');