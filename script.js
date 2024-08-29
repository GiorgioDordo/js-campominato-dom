// get elements from dom
const grid = document.getElementById('grid');
const play = document.getElementById('play-btn');
const form = document.querySelector('form');
const levels = document.getElementById('levels');
// const rows = 10;
// const cols = 10;
// const totalCells = rows * cols;

// function to create cells 
const createCell = (content= '', level) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', level)
    cell.append(content);

    return cell;
}

// create cells
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    grid.innerHTML = '';

    const level = levels.value;
    let rows;
    let cols;
    
    switch(level) {
        case 'hard':
            rows = 7;
            cols = 7;
            break;
        case 'normal':
            rows = 9;
            cols = 9;
            break;
        case 'easy':
            rows = 10;
            cols = 10;
            break;        
    }

    const totalCells = rows * cols;

    for (let i = 1; i <= totalCells; i++) {
        const cell = createCell(i, level);

        // print in console and color the cells when clicked
        cell.addEventListener('click', () => {
        
            cell.classList.add('clicked');
            console.log(i);
        })

        // print cells in DOm
        grid.appendChild(cell);
    }
})


    


