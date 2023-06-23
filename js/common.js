document.addEventListener('click', (e) => {
  if (e.target.id === "bars-btn") {
      handleBars();
  }
});

let isBarDisplayed = false;

function handleBars() {
  const barDiv = document.querySelector('.options');

  if (!isBarDisplayed) {
      barDiv.classList.add('displayed');
      isBarDisplayed = true;
  } else {
      barDiv.classList.remove('displayed');
      isBarDisplayed = false;
  }
}

function fetchCommon(file, id) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

fetchCommon('header.html', 'header')
fetchCommon('footer.html', 'footer')
fetchCommon('carousel.html', 'carousel')
