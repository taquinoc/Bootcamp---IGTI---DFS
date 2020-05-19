function changeColor(){
    let red = document.getElementById('red').value; 
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;
    
    document.getElementById('colorSelector').style.backgroundColor = `rgb(${red},${green},${blue})`
}
