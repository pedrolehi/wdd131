let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Última Modificação: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navmenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

function toggleActive(element) {
  document.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
  });

  element.classList.add("active");
}


// document.querySelector('#all').addEventListener('click', () => {
//   toggleActive(document.querySelector('#all'));
//   createTempleCard(temples);
// });

// document.querySelector('#old').addEventListener('click', () => {
//   toggleActive(document.querySelector('#old'));
//   createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date('1950-01-01')));
// });

// document.querySelector('#new').addEventListener('click', () => {
//   toggleActive(document.querySelector('#new'));
//   createTempleCard(temples.filter(temple => new Date(temple.dedicated) >= new Date('1950-01-01')));
// });

// document.querySelector('#large').addEventListener('click', () => {
//   toggleActive(document.querySelector('#large'));
//   createTempleCard(temples.filter(temple => temple.area >= 50000));
// });

// document.querySelector('#small').addEventListener('click', () => {
//   toggleActive(document.querySelector('#small'));
//   createTempleCard(temples.filter(temple => temple.area < 50000));
// });

const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

const temples = [
  {
    templeName: "Aba Nigéria",
    location: "Aba, Nigéria",
    dedicated: "2005-05-22",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, Estados Unidos",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, Estados Unidos",
    dedicated: "2015-03-15",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-17",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, Estados Unidos",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Cidade do México",
    location: "Cidade do México, México",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }

];

function setFiler(seletor, filterFunction) {
  const element = document.querySelector(seletor);

  element.addEventListener('click', () => {
    toggleActive(element);
    createTempleCard(temples.filter(filterFunction));
  });
}

setFiler('#all', temples);
setFiler('#old', temple => new Date(temple.dedicated) < cutoffDate);
setFiler('#new', temple => new Date(temple.dedicated) >= cutoffDate);
setFiler('#large', temple => temple.area >= largeArea);
setFiler('#small', temple => temple.area < largeArea);




createTempleCard(temples);

function createTempleCard(templos) {
  document.querySelector('.res-grid').innerHTML = '';

  templos.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Localização:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicado:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés²`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `Templo ${temple.templeName}`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}
