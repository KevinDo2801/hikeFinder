document.addEventListener('click', (e) => {
  if (e.target.id === "bars-btn") {
    handleBars();
  }
});

function handleBars() {
  const barDiv = document.querySelector('.options');
  barDiv.classList.toggle('displayed');
}

function fetchCommon(file, id) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

fetchCommon('header.html', 'header')
fetchCommon('footer.html', 'footer')
fetchCommon('carousel.html', 'carousel')
