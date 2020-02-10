function main() {


    const gridHolder = document.querySelector('.container');

    const brAdder = document.createElement('BR');
    for (let i = 0; i< 10; i++){
        for (let j = 0; j< 10; j++){
            const divInner = document.createElement('DIV');
            divInner.setAttribute('data-pos-row',String(i));
            divInner.setAttribute('data-pos-col', String(j));
            divInner.setAttribute("class", 'cell');
            divInner.innerText = 'DIV' + ' ' + i + ' ' +j;
            gridHolder.appendChild(divInner);
        }
        gridHolder.appendChild(brAdder);
    }


    let cellsArray = document.querySelectorAll('.cell');

    setInterval(function(){
       let randomGrid = Math.floor(Math.random() * 100);
       let currentCell = cellsArray[randomGrid];
       currentCell.setAttribute("class","cell active");

       setTimeout(function(){
           currentCell.setAttribute("class", "cell");
       }, 250)
    }, 250)

}

main();
