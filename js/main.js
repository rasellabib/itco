
  const btns = document.querySelectorAll('.btn-toggle');
  const plans = document.querySelectorAll('.plan-wrapper');

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Toggle active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle plan section
      plans.forEach(p => p.classList.remove('active'));
      plans[index].classList.add('active');
    });
  });
