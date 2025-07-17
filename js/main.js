const track = document.getElementById("testimonialTrack");
    const cards = document.querySelectorAll(".testimonial-card");
    const indicatorsContainer = document.getElementById("sliderIndicators");

    let currentSlide = 0;
    const cardsPerView = 3;

    function updateIndicators() {
      indicatorsContainer.innerHTML = "";
      const totalDots = cards.length - cardsPerView + 1;
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("span");
        dot.classList.toggle("active", i === currentSlide);
        dot.addEventListener("click", () => {
          currentSlide = i;
          updateSlider();
        });
        indicatorsContainer.appendChild(dot);
      }
    }

    function updateSlider() {
      const shift = -(100 / cardsPerView) * currentSlide;
      track.style.transform = `translateX(${shift}%)`;
      updateIndicators();
    }

    function moveSlide(dir) {
      const maxSlide = cards.length - cardsPerView;
      currentSlide += dir;
      if (currentSlide < 0) currentSlide = 0;
      if (currentSlide > maxSlide) currentSlide = maxSlide;
      updateSlider();
    }

    updateSlider(); // Initial render






  const btns = document.querySelectorAll('.btn-toggle');
  const plans = document.querySelectorAll('.plan-wrapper');
  const toggleBox = document.querySelector('.toggle-buttons');

  // init
  gsap.set(plans[1], { autoAlpha: 0, y: 30 });

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // toggle button UI
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      toggleBox.classList.toggle('yearly-active', index === 1);

      // animate wrapper transitions
      plans.forEach((plan, i) => {
        if (i === index) {
          plan.classList.add('active');
          gsap.to(plan, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            onStart: () => {
              plan.style.position = 'relative';
              plan.style.pointerEvents = 'auto';
            }
          });
        } else {
          gsap.to(plan, {
            autoAlpha: 0,
            y: 30,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              plan.classList.remove('active');
              plan.style.position = 'absolute';
              plan.style.pointerEvents = 'none';
            }
          });
        }
      });
    });
  });


  const items = [
    { position: "Admin", date: "Oct 2, 2024", img: '../assets/images/section9/img.png', title: 'Everything you need to learn about IT Solution for your Company.' },
    { position: "CEO",   date: "Nov 2, 2024", img: '../assets/images/section9/img2.png', title: 'New Technology for System Security to improve security system.' },
    { position: "Founder", date: "Sep 2, 2024", img: '../assets/images/section9/img3.png', title: 'Analytical Solutions lorem ipsum take a trivial example.' }
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById('mainImage');
  const mainTitle = document.getElementById('mainTitle');
  const positionEl = document.getElementById('position');
  const dateEl = document.getElementById('date');
  const cardsContainer = document.querySelector('.thumb-cards');

  function renderMain(i) {
    const it = items[i];
    mainImage.src = it.img;
    mainTitle.textContent = it.title;
    positionEl.textContent = it.position;
    dateEl.textContent = it.date;
    document.querySelectorAll('.thumb-card').forEach((card, idx) => {
      card.classList.toggle('active', idx === i);
    });
  }

  function renderCards() {
    cardsContainer.innerHTML = '';
    items.forEach((it, i) => {
      const card = document.createElement('div');
      card.className = 'thumb-card d-flex mb-4 align-items-center';
      card.innerHTML = `
        <img src="${it.img}" class="thumb-img me-3" alt="">
        <div class="thumb-content">
          <div class="d-flex date-position gap-3 mb-2 ">
            <div class="position d-flex align-items-center gap-1">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 0.0419922C6.95015 0.0419922 5.94333 0.45903 5.201 1.20136C4.45867 1.94369 4.04163 2.95051 4.04163 4.00033C4.04163 5.05014 4.45867 6.05696 5.201 6.79929C5.94333 7.54162 6.95015 7.95866 7.99997 7.95866C9.04978 7.95866 10.0566 7.54162 10.7989 6.79929C11.5413 6.05696 11.9583 5.05014 11.9583 4.00033C11.9583 2.95051 11.5413 1.94369 10.7989 1.20136C10.0566 0.45903 9.04978 0.0419922 7.99997 0.0419922ZM5.29163 4.00033C5.29163 3.28203 5.57697 2.59316 6.08488 2.08524C6.5928 1.57733 7.28167 1.29199 7.99997 1.29199C8.71826 1.29199 9.40714 1.57733 9.91505 2.08524C10.423 2.59316 10.7083 3.28203 10.7083 4.00033C10.7083 4.71862 10.423 5.4075 9.91505 5.91541C9.40714 6.42332 8.71826 6.70866 7.99997 6.70866C7.28167 6.70866 6.5928 6.42332 6.08488 5.91541C5.57697 5.4075 5.29163 4.71862 5.29163 4.00033ZM7.99997 9.20866C6.07247 9.20866 4.2958 9.64699 2.97996 10.387C1.6833 11.117 0.708299 12.222 0.708299 13.5837V13.6687C0.707465 14.637 0.706632 15.852 1.77247 16.7203C2.29663 17.147 3.0308 17.4512 4.02247 17.6512C5.0158 17.8528 6.31163 17.9587 7.99997 17.9587C9.6883 17.9587 10.9833 17.8528 11.9783 17.6512C12.97 17.4512 13.7033 17.147 14.2283 16.7203C15.2941 15.852 15.2925 14.637 15.2916 13.6687V13.5837C15.2916 12.222 14.3166 11.117 13.0208 10.387C11.7041 9.64699 9.9283 9.20866 7.99997 9.20866ZM1.9583 13.5837C1.9583 12.8745 2.47663 12.1045 3.59246 11.477C4.68913 10.8603 6.2458 10.4587 8.0008 10.4587C9.75413 10.4587 11.3108 10.8603 12.4075 11.477C13.5241 12.1045 14.0416 12.8745 14.0416 13.5837C14.0416 14.6737 14.0083 15.287 13.4383 15.7503C13.13 16.002 12.6133 16.2478 11.73 16.4262C10.8491 16.6045 9.64497 16.7087 7.99997 16.7087C6.35497 16.7087 5.14997 16.6045 4.26997 16.4262C3.38663 16.2478 2.86997 16.002 2.56163 15.7512C1.99163 15.287 1.9583 14.6737 1.9583 13.5837Z" fill="#16A571"/>
                      </svg>  
              <span class="text-14">${it.position}</span>
            </div>
            <div class="date d-flex align-items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1667 10.6667C13.3877 10.6667 13.5996 10.5789 13.7559 10.4226C13.9122 10.2663 14 10.0543 14 9.83333C14 9.61232 13.9122 9.40036 13.7559 9.24408C13.5996 9.0878 13.3877 9 13.1667 9C12.9457 9 12.7337 9.0878 12.5774 9.24408C12.4211 9.40036 12.3333 9.61232 12.3333 9.83333C12.3333 10.0543 12.4211 10.2663 12.5774 10.4226C12.7337 10.5789 12.9457 10.6667 13.1667 10.6667ZM13.1667 14C13.3877 14 13.5996 13.9122 13.7559 13.7559C13.9122 13.5996 14 13.3877 14 13.1667C14 12.9457 13.9122 12.7337 13.7559 12.5774C13.5996 12.4211 13.3877 12.3333 13.1667 12.3333C12.9457 12.3333 12.7337 12.4211 12.5774 12.5774C12.4211 12.7337 12.3333 12.9457 12.3333 13.1667C12.3333 13.3877 12.4211 13.5996 12.5774 13.7559C12.7337 13.9122 12.9457 14 13.1667 14ZM9.83333 9.83333C9.83333 10.0543 9.74554 10.2663 9.58926 10.4226C9.43297 10.5789 9.22101 10.6667 9 10.6667C8.77899 10.6667 8.56702 10.5789 8.41074 10.4226C8.25446 10.2663 8.16667 10.0543 8.16667 9.83333C8.16667 9.61232 8.25446 9.40036 8.41074 9.24408C8.56702 9.0878 8.77899 9 9 9C9.22101 9 9.43297 9.0878 9.58926 9.24408C9.74554 9.40036 9.83333 9.61232 9.83333 9.83333ZM9.83333 13.1667C9.83333 13.3877 9.74554 13.5996 9.58926 13.7559C9.43297 13.9122 9.22101 14 9 14C8.77899 14 8.56702 13.9122 8.41074 13.7559C8.25446 13.5996 8.16667 13.3877 8.16667 13.1667C8.16667 12.9457 8.25446 12.7337 8.41074 12.5774C8.56702 12.4211 8.77899 12.3333 9 12.3333C9.22101 12.3333 9.43297 12.4211 9.58926 12.5774C9.74554 12.7337 9.83333 12.9457 9.83333 13.1667ZM4.83333 10.6667C5.05435 10.6667 5.26631 10.5789 5.42259 10.4226C5.57887 10.2663 5.66667 10.0543 5.66667 9.83333C5.66667 9.61232 5.57887 9.40036 5.42259 9.24408C5.26631 9.0878 5.05435 9 4.83333 9C4.61232 9 4.40036 9.0878 4.24408 9.24408C4.0878 9.40036 4 9.61232 4 9.83333C4 10.0543 4.0878 10.2663 4.24408 10.4226C4.40036 10.5789 4.61232 10.6667 4.83333 10.6667ZM4.83333 14C5.05435 14 5.26631 13.9122 5.42259 13.7559C5.57887 13.5996 5.66667 13.3877 5.66667 13.1667C5.66667 12.9457 5.57887 12.7337 5.42259 12.5774C5.26631 12.4211 5.05435 12.3333 4.83333 12.3333C4.61232 12.3333 4.40036 12.4211 4.24408 12.5774C4.0878 12.7337 4 12.9457 4 13.1667C4 13.3877 4.0878 13.5996 4.24408 13.7559C4.40036 13.9122 4.61232 14 4.83333 14Z" fill="#16A571"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83341 0.458008C4.99918 0.458008 5.15815 0.523856 5.27536 0.641066C5.39257 0.758276 5.45841 0.917248 5.45841 1.08301V1.71884C6.01008 1.70801 6.61758 1.70801 7.28591 1.70801H10.7134C11.3826 1.70801 11.9901 1.70801 12.5417 1.71884V1.08301C12.5417 0.917248 12.6076 0.758276 12.7248 0.641066C12.842 0.523856 13.001 0.458008 13.1667 0.458008C13.3325 0.458008 13.4915 0.523856 13.6087 0.641066C13.7259 0.758276 13.7917 0.917248 13.7917 1.08301V1.77217C14.0084 1.78884 14.2134 1.80967 14.4076 1.83551C15.3842 1.96717 16.1751 2.24384 16.7992 2.86717C17.4226 3.49134 17.6992 4.28217 17.8309 5.25884C17.9584 6.20884 17.9584 7.42134 17.9584 8.95301V10.713C17.9584 12.2447 17.9584 13.458 17.8309 14.4072C17.6992 15.3838 17.4226 16.1747 16.7992 16.7988C16.1751 17.4222 15.3842 17.6988 14.4076 17.8305C13.4576 17.958 12.2451 17.958 10.7134 17.958H7.28675C5.75508 17.958 4.54175 17.958 3.59258 17.8305C2.61591 17.6988 1.82508 17.4222 1.20091 16.7988C0.577581 16.1747 0.300915 15.3838 0.169248 14.4072C0.041748 13.4572 0.041748 12.2447 0.041748 10.713V8.95301C0.041748 7.42134 0.041748 6.20801 0.169248 5.25884C0.300915 4.28217 0.577581 3.49134 1.20091 2.86717C1.82508 2.24384 2.61591 1.96717 3.59258 1.83551C3.78675 1.80967 3.99258 1.78884 4.20841 1.77217V1.08301C4.20841 0.917248 4.27426 0.758276 4.39147 0.641066C4.50868 0.523856 4.66765 0.458008 4.83341 0.458008ZM3.75841 3.07467C2.92091 3.18717 2.43758 3.39884 2.08508 3.75134C1.73258 4.10384 1.52091 4.58717 1.40841 5.42551C1.38925 5.56717 1.37341 5.71717 1.36008 5.87467H16.6401C16.6267 5.71634 16.6109 5.56717 16.5917 5.42467C16.4792 4.58717 16.2676 4.10384 15.9151 3.75134C15.5626 3.39884 15.0792 3.18717 14.2409 3.07467C13.3851 2.95967 12.2559 2.95801 10.6667 2.95801H7.33341C5.74425 2.95801 4.61591 2.95967 3.75841 3.07467ZM1.29175 8.99967C1.29175 8.28801 1.29175 7.66884 1.30258 7.12467H16.6976C16.7084 7.66884 16.7084 8.28801 16.7084 8.99967V10.6663C16.7084 12.2555 16.7067 13.3847 16.5917 14.2413C16.4792 15.0788 16.2676 15.5622 15.9151 15.9147C15.5626 16.2672 15.0792 16.4788 14.2409 16.5913C13.3851 16.7063 12.2559 16.708 10.6667 16.708H7.33341C5.74425 16.708 4.61591 16.7063 3.75841 16.5913C2.92091 16.4788 2.43758 16.2672 2.08508 15.9147C1.73258 15.5622 1.52091 15.0788 1.40841 14.2405C1.29341 13.3847 1.29175 12.2555 1.29175 10.6663V8.99967Z" fill="#16A571"/>
              </svg>
              <span class="text-14">${it.date}</span>
            </div>
          </div>
          <h6 class="thumb-title mb-1">${it.title}</h6>
          <a href="#" class="read-more text-14">Read More &rarr;</a>
        </div>
      `;
      card.addEventListener('click', () => {
        currentIndex = i;
        renderMain(i);
      });
      cardsContainer.appendChild(card);
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    renderMain(currentIndex);
  });
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderMain(currentIndex);
  });

  renderCards();
  renderMain(currentIndex);