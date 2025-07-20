const teamData = [
    { name: "Edoardo Romussi", role: "Ui/UX Designer", img: "../assets/images/team/Rectangle 22889.png" },
    { name: "Jessica James", role: "Marketing Coordinator", img: "../assets/images/team/Rectangle 22889-1.png" },
    { name: "Adrian Williams", role: "Web Designer", img: "../assets/images/team/Rectangle 22889-2.png" },
    { name: "Lina Gomez", role: "Content Strategist", img: "../assets/images/team/Rectangle 22889.png" },
    { name: "Oliver Miles", role: "DevOps Engineer", img: "../assets/images/team/Rectangle 22889-1.png" }
  ];

  let startIndex = 0;
  const teamContainer = document.getElementById('team-container');

  function getItemsPerView() {
    const w = window.innerWidth;
    if (w >= 992) {         // Bootstrap lg and up (≥992px)
      return 3;
    } else if (w >= 768) {  // Bootstrap md and up (≥768px)
      return 2;
    } else {
      return 1;
    }
  }

  function renderCards() {
    const itemsPerView = getItemsPerView();
    teamContainer.innerHTML = '';

    // নিশ্চিত কর, startIndex ও data length এর মধ্যে
    if (startIndex + itemsPerView > teamData.length) {
      startIndex = Math.max(0, teamData.length - itemsPerView);
    }

    const visibleMembers = teamData.slice(startIndex, startIndex + itemsPerView);
    visibleMembers.forEach(member => {
      const col = document.createElement('div');
      // md-6 হলে 2 per row, lg-4 হলে 3 per row, sm-12 হলে 1 per row
      col.className = 'col-12 col-md-6 col-lg-' + (12 / itemsPerView);
      col.innerHTML = `
        <div class="card-team shadow bg-white">
          <div class="img-div">
          <img src="${member.img}" alt="${member.name}">
          </div>
          <div class="social-links">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-linkedin-in"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
          <div class="team-info">
            <h5 class="fw-bold">${member.name}</h5>
            <p>${member.role}</p>
          </div>
        </div>
      `;
      teamContainer.appendChild(col);
    });

    // অ্যানিমেশন আপডেট (select whatever column class আছে)
    gsap.fromTo(
      "#team-container .card-team",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
    );
  }

  function nextSlide() {
    const itemsPerView = getItemsPerView();
    if (startIndex + itemsPerView < teamData.length) {
      startIndex++;
      renderCards();
    }
  }

  function prevSlide() {
    if (startIndex > 0) {
      startIndex--;
      renderCards();
    }
  }

  // উইন্ডো রিসাইজ হলে রিপেন্ডার
  window.addEventListener('resize', renderCards);

  // প্রথমবার রেন্ডার
  renderCards();