function wide(){
    var s = document.getElementById('squareSide').value;

    var wide = s*s;

    document.getElementById('wide').innerHTML = wide;
}
function squarePerimeter(){
    var s = document.getElementById('squareSide').value;

    var squarePerimeter = 4*s;

    document.getElementById('squarePerimeter').innerHTML = squarePerimeter;
}
function resetButton(){
    document.getElementById('squareSide').value=''
}
 