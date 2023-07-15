
const smoothScrollLinks = document.getElementsByClassName('smooth-scroll');
for (let i = 0; i < smoothScrollLinks.length; i++) {
  smoothScrollLinks[i].addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
}
