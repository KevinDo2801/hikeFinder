import { sectionExplore } from './data.js';

function getExploreHtml() {
    let sectionHtml = ``;

    sectionExplore.forEach((section) => {
        const { linkPic, picAlt, title, star, descriptive, uuid } = section;

        sectionHtml += `
                <section id="${uuid}">
                <div class="information">
                    <img src="${linkPic}" alt="${picAlt}">
                        <h3 class="title">${title}</h3>
                        <p class="star">${star}</p>
                        <p class="descriptive">${descriptive}</p>
                    </div>
                </section>
        `;
    });

    return sectionHtml;
}

function renderExplore() {
    const leftExploreEl = document.createElement("div");
    leftExploreEl.className = "left-explore";
    leftExploreEl.innerHTML = getExploreHtml();

    const rightExploreEl = document.createElement("div");
    rightExploreEl.className = "right-explore";
    rightExploreEl.innerHTML = `
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5694502163574!2d-82.40290568492999!3d28.068167982643786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7e86743c3db%3A0xb141b770f670eac7!2sUrban%20Place%20Apartments!5e0!3m2!1sen!2sus!4v1687482367305!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `

    const mainExplore = document.getElementById('main-explore');

    mainExplore.innerHTML = `<h2 class="hero-title ">Explore Curated Trails Near You</h2>`;
    mainExplore.appendChild(leftExploreEl);
    mainExplore.appendChild(rightExploreEl);
}

renderExplore();