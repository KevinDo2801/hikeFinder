import { sectionArray, sectionExplore } from './data.js';

function getSectionHtml() {
    let sectionHtml = `<h2 class="hero-title strong">Hikes near Bergen</h2>`;

    sectionArray.forEach((section) => {
        const { linkPic, picAlt, title, length, descriptive, href, uuid } = section;

        sectionHtml += `
            <section id="${uuid}">
                <img src="${linkPic}" alt="${picAlt}">
                <div class="information">
                    <h3 class="title">${title}</h3>
                    <p class="length">${length}</p>
                    <p class="descriptive">${descriptive}</p>
                    <a href="${href}" target="_blank" class="learn-more-btn">LEARN MORE</a>
                </div>
            </section>
        `;
    });

    return sectionHtml;
}

function renderSection() {
    document.getElementById("main-section").innerHTML = getSectionHtml();
}

renderSection();
