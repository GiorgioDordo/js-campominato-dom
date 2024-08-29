// get elements from dom
const grid = document.getElementById('grid');
const play = document.getElementById('play-btn');

const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// function to create cells 
const createCell = (content = '') => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.append(content);
    return cell;
}

// create cells
play.addEventListener('click', function(e){
    e.preventDefault();

    for (let i = 0; i < totalCells; i++) {
        const cell = createCell(i + 1);

        // print in console and color the cells when clicked
        cell.addEventListener('click', () => {
        
            cell.classList.add('clicked');
            console.log(i);
        })

        // print cells in DOm
        grid.appendChild(cell);
    }
})


    


