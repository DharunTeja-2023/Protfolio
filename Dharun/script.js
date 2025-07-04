// === Register Plugin Once ===
gsap.registerPlugin(ScrollTrigger);

// === Hero Section ===
gsap.from(".hero-img", {
  scrollTrigger: {
    trigger: ".hero-img",
    start: "top 80%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});

// === Section Fade In ===
gsap.utils.toArray(".section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// === About Section ===
gsap.from(".about-text, .about-img", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 85%",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

// === Experience Section ===
gsap.utils.toArray(".experience-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});
// === Education Section ===
gsap.utils.toArray(".education-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out"
  });
});


// === Project Cards ===
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.1,
    ease: "power3.out"
  });
});

// === Timeline Line Animation (Grows) ===
gsap.fromTo(".timeline-line", { scaleY: 0 }, {
  scaleY: 1,
  scrollTrigger: {
    trigger: ".timeline",
    start: "top center",
    end: "bottom bottom",
    scrub: true
  }
});


// === Timeline Dots ===
gsap.utils.toArray(".timeline-dot").forEach(dot => {
  gsap.from(dot, {
    scrollTrigger: {
      trigger: dot,
      start: "top 90%",
    },
    scale: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  gsap.to(dot, {
    scrollTrigger: {
      trigger: dot,
      start: "top 80%",
    },
    boxShadow: "0 0 12px #00ffe5, 0 0 20px #ff00cc",
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut"
  });
});

// === Timeline Cards ===
gsap.utils.toArray(".timeline-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// === Contact Section ===
gsap.from(".contact-details p, .social-links a", {
  scrollTrigger: {
    trigger: ".contact-container",
    start: "top 85%",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});


