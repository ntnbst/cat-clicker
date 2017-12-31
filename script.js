var picture1 = document.getElementById('catpic1');
var picture2 = document.getElementById('catpic2');
var display1 = document.getElementById('show1');
var display2 = document.getElementById('show2');
var enter1 = document.getElementById('enter1');
var enter2 = document.getElementById('enter2');
var hero1 = document.getElementById('hero1');
var hero2 = document.getElementById('hero2');
var counter1 = 0;
var counter2 = 0;

picture1.addEventListener('click', function() {
    counter1++;
    display1.innerHTML = 'Click Counts: ' + counter1;
}, false);

picture2.addEventListener('click', function() {
    counter2++;
    display2.innerHTML = 'Click Counts: ' + counter2;
}, false);

enter1.addEventListener('keyup', function(){
    hero1.innerHTML = enter1.value;
});

enter2.addEventListener('keyup', function() {
    hero2.innerHTML = enter2.value;
});




