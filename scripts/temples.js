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
  element.classList.toggle("active");
}
