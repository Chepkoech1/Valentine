document.getElementById('yesBtn').addEventListener('click', function() {
  document.getElementById('reaction').innerText = '😊';
  document.getElementById('reaction').style.color = '#ff7f7f';
});

document.getElementById('noBtn').addEventListener('click', function() {
  document.getElementById('reaction').innerText = '😢';
  document.getElementById('reaction').style.color = '#5c3d3d';
});
