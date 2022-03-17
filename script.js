let [comp_score, user_score] = [0, 0];
function resultChecker(input) {
    let choices = ['rock', 'paper', 'scissor'];
    let num = Math.floor(Math.random() * 3);
    let choices_obj = {
        'rock': {
            'rock': 'draw',
            'paper': 'lose',
            'scissor': 'win'
        },
        'paper': {
            'paper': 'draw',
            'scissor': 'lose',
            'rock': 'win'
        },
        'scissor': {
            'scissor': 'draw',
            'rock': 'lose',
            'paper': 'win'
        }
    };
    let comp_choice = choices[num];
    let result = document.getElementsByClassName('result-container')[0];
    switch (choices_obj[input][comp_choice]) {
        case 'win':
            result.innerHTML = "YOU WON";
            result.style.color = '#689f38';
            result.style.backgroundColor = "#cefdce";
            user_score++;
            break;
        case 'lose':
            result.innerHTML = "COMPUTER WON";
            result.style.color = '#d32f2f'
            result.style.backgroundColor = "#ffdde0";
            comp_score++;
            break;
        default:
            result.innerHTML = "GAME TIED";
            result.style.color = '#808080';
            result.style.backgroundColor = "#e5e5e5";
            break;
    }
    document.getElementById("compScore").innerHTML = comp_score;
    document.getElementById("userScore").innerHTML = user_score;

}

