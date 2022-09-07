var hour = new Date().getHours();
if (hour >=6 && hour <=12) {
    document.body.style.backgroundColor = 'yellow';
    alert('Good morning');
}
else if (hour > 12 && hour <=18) {
    document.body.style.backgroundColor = 'orange';
    alert('Good afternoon');
}
else if (hour >18 || hour <6) {
    document.body.style.backgroundColor = 'blue';
    alert('Good night');
}
