export function score (){
    var button = document.getElementById('isCorrect');
    var count = 0;
    var text = document.getElementById('score');
    button.onclick = function(){
        count++;
        text.innerHTML = count;
        console.log(count);
    }
}