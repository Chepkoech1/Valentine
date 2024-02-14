document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('reaction').innerText = '😊';
  document.getElementById('reaction').style.color = '#ff7f7f';
  createBalloons();
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('reaction').innerText = '😢';
  document.getElementById('reaction').style.color = '#5c3d3d';
});

function createBalloons() {
  const balloonContainer = document.getElementById('balloons');
  const numBalloons = 20;
  const balloonColors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
  
  for (let i = 0; i < numBalloons; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloonContainer.appendChild(balloon);
    setTimeout(() => {
      balloon.remove();
    }, 5000);
  }
}
