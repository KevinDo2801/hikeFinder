import {
    v4 as uuidv4
} from 'https://jspm.dev/uuid';

export const sectionArray = [
    {
        linkPic: '../images/bergen.jpg',
        picAlt: 'Floyen',
        title: 'Fløyen',
        length: 'Length: 10.2 km - Est. 5 h',
        descriptive: "Fløibanen is one of Norway's most visited attractions. At the top of Fløyen you will find a large and varied hiking area, spectacular views of the city.",
        href: 'https://www.youtube.com/watch?v=qbpVwg7fluY',
        uuid: uuidv4()
    },
    {
        linkPic: '../images/floyen.jpg',
        picAlt: 'Ulriken',
        title: 'Ulriken',
        length: 'Length: 3.5 km - Est. 2 h 30 m',
        descriptive: "Ulriken is the highest of the Seven Mountains that surround the city of Bergen, Norway. It has a height of 643 meters (2,110 ft) above sea level.",
        href: 'https://www.youtube.com/watch?v=F4rm9Et3-Zw',
        uuid: uuidv4()
    },
    {
        linkPic: '../images/ulriken.jpg',
        picAlt: 'Landåsfjellet',
        title: 'Landåsfjellet',
        length: 'Length: 3.5 km - Est. 2 h 30 m',
        descriptive: "Landåsfjellet is a lower plateau south of Ulriken/Haugavarden which offers numerous trails, and is almost a separate hiking region by its own.",
        href: 'https://www.youtube.com/watch?v=rBEIWpGxhCc',
        uuid: uuidv4()
    },
]

export const sectionExplore = [
    {
        linkPic: '../images/explore-trail-1.png',
        picAlt: 'explore-trail-1',
        title: 'Tryon Creek State Area',
        star: `Moderate <i class="fa fa-star"></i> 4.5 (428)`,
        descriptive: "670-acre forested area along a ravine with well-maintained trails for hikers, horses & leashed dogs.",
        uuid: uuidv4()
    },
    {
        linkPic: '../images/explore-trail-2.png',
        picAlt: 'explore-trail-2',
        title: ' Marquam Nature Park',
        star: `Easy <i class="fa fa-star"></i> 4.3 (432)`,
        descriptive: "193 acres of undeveloped land & over 5 miles of hiking trails with forested scenic views.",
        uuid: uuidv4()
    },
    {
        linkPic: '../images/explore-trail-3.png',
        picAlt: 'explore-trail-3',
        title: 'Wildwood Trail Area',
        star: `Easy <i class="fa fa-star"></i> 4.0 (207)`,
        descriptive: "The Wildwood Trail starts at the Vietnam Memorial adjacent to the Oregon Zoo and World Forestry Center and circles uphill.",
        uuid: uuidv4()
    },
]

