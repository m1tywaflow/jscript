const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(50, 50, 150, 100);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(100, 80, 150, 100);
ctx.fillStyle ="rgba(0, 255, 0, 0.5)" ;
ctx.fillRect(150, 110, 150, 100);

function fillGradient(color1, color2) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5; 
    ctx.stroke();
  }
  function svgLine(x1, y1, x2, y2, color, width) {
    const svgLink = "http://www.w3.org/2000/svg";
    const svgEl = document.createElementNS(svgLink, 'svg');
    svgEl.setAttribute('width', '800');
    svgEl.setAttribute('height', '500');
  
    const line = document.createElementNS(svgLink, 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', width);
    
    svgEl.appendChild(line);
    document.body.appendChild(svgEl); 
  }
  function svgRectangle(width, height, fillColor, strokeColor, strokeWidth) {
    const svgLink = "http://www.w3.org/2000/svg";
    const svgEl = document.createElementNS(svgLink, 'svg');
    svgEl.setAttribute('width', '500');
    svgEl.setAttribute('height', '500');
  
    const rect = document.createElementNS(svgLink, 'rect'); 
    rect.setAttribute('x', 50);
    rect.setAttribute('y', 50);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', fillColor);
    rect.setAttribute('stroke', strokeColor);
    rect.setAttribute('stroke-width', strokeWidth);
    svgEl.appendChild(rect);
    document.body.appendChild(svgEl); 
  }