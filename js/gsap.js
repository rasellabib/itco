gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.progress-box').forEach(box => {
  const fill = box.querySelector('.progress-fill');
  const tag = box.querySelector('.percent-tag');
  const percent = box.dataset.percent;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Animate the fill width
  tl.to(fill, {
    width: percent + '%',
    duration: 1.5,
    ease: 'power2.out'
  });

  // Animate the tag movement and show
  tl.to(tag, {
    left: percent + '%',
    opacity: 1,
    duration: 1.5,
    ease: 'power2.out'
  }, 0); // at the same time as fill
});


  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".stats-number").forEach(el => {
    const target = +el.getAttribute("data-target");
    let suffix = "";

    if (el.textContent.includes("k+")) {
      suffix = "k+";
    } else if (el.textContent.includes("+")) {
      suffix = "+";
    }

    gsap.fromTo(el, 
      { innerText: 0 }, 
      {
        innerText: target,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = Math.floor(el.innerText) + suffix;
        },
        onComplete: function () {
          el.innerText = target + suffix;
        }
      }
    );
  });


  gsap.from(".footer-section .row > div", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top bottom",
    }
  });


   // GSAP Accordion Logic
   document.querySelectorAll('.faq-question').forEach((q, idx) => {
    const ans = q.nextElementSibling;
    // open first by default
    if (q.classList.contains('active')) {
      gsap.to(ans, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
    }
    q.addEventListener('click', () => {
      const isActive = q.classList.contains('active');
      // close all
      document.querySelectorAll('.faq-question').forEach(otherQ => {
        otherQ.classList.remove('active');
        otherQ.querySelector('.icon').textContent = '+';
        gsap.to(otherQ.nextElementSibling, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
      });
      if (!isActive) {
        // open clicked
        q.classList.add('active');
        q.querySelector('.icon').textContent = '–';
        gsap.to(ans, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
      }
    });
  });