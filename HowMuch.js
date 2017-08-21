function howMuch(days) {

    var amount = 0;
    var daily = 0.01;

for(var x = 1; x <= days; x++) {
    
    amount += daily;
    daily = daily * 2;

    }
console.log(amount);
}
howMuch(30);

function howManyDays(reward) {

    var amount = 0;
    var daily = 0.01;

for (var i = 1; amount < reward; i++) {

    amount += daily;
    daily *= 2;

    }
console.log(i - 1);
}
howManyDays(10000);
howManyDays(1000000000);
howManyDays(Infinity);
