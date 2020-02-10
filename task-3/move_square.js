// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();


const moveLeft = (arr,elem) => {
    if (elem - 1 >= 0) {
        return arr[elem - 1]
    } else {
        return false;
    }

};

const moveDown = (arr,elem) => {

    if (elem + 10 <= 99) {
        return arr[elem + 10]
    } else {
        return false;
    }

};

const moveUp = (arr, elem) => {
    if (elem - 10 >= 0) {
        return arr[elem - 10]
    } else {
        return false;
    }

};

const moveRight = (arr, elem) => {

    if (elem + 1 <= 99) {
        return arr[elem + 1]
    } else {
        return false;
    }

};


let moves;
moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};


function main() {
    // event handlers and other code here

    const gridHolder = document.querySelector('.container');
    const brAdder = document.createElement('BR');


    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const divInner = document.createElement('DIV');
            divInner.setAttribute('data-pos-row', String(i));
            divInner.setAttribute('data-pos-col', String(j));
            divInner.setAttribute("class", 'cell');
            divInner.innerText = 'DIV' + ' ' + i + ' ' + j;
            gridHolder.appendChild(divInner);
        }
        gridHolder.appendChild(brAdder);
    }


    let cellsArray = document.querySelectorAll('.cell');

    gridHolder.addEventListener('click', function (event) {
        let currentClicked = event.target;

        for (let cell of cellsArray) {
            cell.setAttribute('class', "cell");
        }
        currentClicked.setAttribute("class", "cell active");

        let positionOfCell = parseInt(currentClicked.dataset.posRow)*10 + parseInt(currentClicked.dataset.posCol);


        document.addEventListener('keydown', function (even) {
            let pressedKey = even.key;


            switch (pressedKey) {
                case 'ArrowRight':
                    console.log('Right Arrow Pressed');
                    if (moves['100'](cellsArray, positionOfCell) !== false) {
                        for (let cell of cellsArray) {
                            cell.setAttribute('class', "cell");
                        }
                        currentClicked = moves['100'](cellsArray, positionOfCell);
                        currentClicked.setAttribute("class", "cell active");
                        positionOfCell = parseInt(currentClicked.dataset.posRow)*10 + parseInt(currentClicked.dataset.posCol);
                    }
                    break;
                case 'ArrowLeft':
                    console.log('Left Arrow Pressed');
                    if (moves['97'](cellsArray, positionOfCell) !== false) {
                        for (let cell of cellsArray) {
                            cell.setAttribute('class', "cell");
                        }
                        currentClicked = moves['97'](cellsArray, positionOfCell);
                        currentClicked.setAttribute("class", "cell active");
                        positionOfCell = parseInt(currentClicked.dataset.posRow)*10 + parseInt(currentClicked.dataset.posCol);
                    }
                    break;
                case 'ArrowUp':
                    console.log('Up Arrow Pressed');
                    if (moves['119'](cellsArray, positionOfCell) !== false) {
                        for (let cell of cellsArray) {
                            cell.setAttribute('class', "cell");
                        }
                        currentClicked = moves['119'](cellsArray, positionOfCell);
                        currentClicked.setAttribute("class", "cell active");
                        positionOfCell = parseInt(currentClicked.dataset.posRow)*10 + parseInt(currentClicked.dataset.posCol);
                    }
                    break;
                case 'ArrowDown':
                    console.log('Down Arrow Pressed');
                    if (moves['115'](cellsArray, positionOfCell) !== false) {
                        for (let cell of cellsArray) {
                            cell.setAttribute('class', "cell");
                        }
                        currentClicked = moves['115'](cellsArray, positionOfCell);
                        currentClicked.setAttribute("class", "cell active");
                        positionOfCell = parseInt(currentClicked.dataset.posRow)*10 + parseInt(currentClicked.dataset.posCol);
                    }
                    break;

            }
        })

    })


}

main();
