// Screen transitions
  const screen1 = document.querySelector('.screen1');
  const screen2 = document.querySelector('.screen2');
  const screen3 = document.querySelector('.screen3');

  setTimeout(() => {
    screen1.classList.remove('active');
    screen2.classList.add('active');
  }, 3000); // screen1 duration

  setTimeout(() => {
    screen2.classList.remove('active');
    screen3.classList.add('active');
  }, 7000); // screen2 duration