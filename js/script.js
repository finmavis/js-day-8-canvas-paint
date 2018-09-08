// Get Canvas element
const canvas = document.getElementById('draw');
// Grab context from canvas
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '35';

let isDrawing = false;
// Starting Offset X and Y
let lastX = 0;
let lastY = 0;
// Definition color number
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // Start From
    ctx.moveTo(lastX, lastY);
    // Go To
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // Update coordinate
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // Increment hue point
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    // Increment line Width point
    if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);