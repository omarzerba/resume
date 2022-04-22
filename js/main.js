
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .custom-nav-container ul li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // console.log("SectionTop " + sectionTop);
    // Link more nav-items if new ones added
    // console.log("---------------------------");
    // console.log("SectionHeight " + sectionHeight);
    // console.log("***************************");
    // console.log(pageYOffset);
    if (pageYOffset >= (sectionTop) - (sectionHeight/2.5)) {
      current = section.getAttribute('id');
    }
  })
  console.log(current);
  navLi.forEach(li => {
    li.classList.remove('active-list-item');
    if (li.classList.contains(current)) {
      li.classList.add('active-list-item');
    }
  })
})
