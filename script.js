const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInLeft');
    }
  });
});
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInRight');
    }
  });
});
observer1.observe(document.querySelector('.left'));
observer2.observe(document.querySelector('.right'));