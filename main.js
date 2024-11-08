let days = document.querySelectorAll('#days');
let targets = document.querySelectorAll('#target');




days.forEach(function(day, index) {
    day.onclick = function() {

        targets.forEach(function(target) {
            target.style.display = 'none';
        });
        
        targets[index].style.display = 'flex';
    };
});