gsap.registerPlugin(ScrollTrigger);

// Fade in
gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

// Slide up
gsap.from(".slide-up-on-scroll", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "easeOut",
  scrollTrigger: {
    trigger: ".slide-up-on-scroll",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});



document.addEventListener("DOMContentLoaded", () => {

  const modalContent = {
    modal1: {
      steps: [
        "Seeing a chiropractor can improve mobility, reduce pain, and help you feel more in control of your body, whether you're bouncing back from an injury or just dealing with the everyday stiffness that builds up over time. At Form Theory Chiropractic, you get care that's tailored to how you move. Does work leave you tight and uncomfortable? Did a run or workout set something off? We're here to help you ease lingering pain, restore better movement, and get you back to doing what you enjoy without hesitation. Let us show you what a focused, movement-driven chiropractic adjustment can do.",
      ]
    },
    modal2: {
      steps: [
        "If tight, irritated muscles are limiting your movement or causing ongoing pain, dry needling may be the most direct way to calm things down and help your body move the way it should. At Form Theory Chiropractic, dry needling is used as part of a targeted, evidence-based approach to reduce tension, improve mobility, and restore proper muscle function.",
      ]
    },
    modal3: {
      steps: [
        "Sports rehab helps you recover from injuries, improve movement, and return to life and your workouts feeling stronger and more confident. At Form Theory Chiropractic, we use a movement-driven approach to get you back to the activities you love — faster and more safely.",
      ]
    },
    modal4: {
      steps: [
        "Cupping and IASTM are hands-on techniques that help reduce muscle tension, improve circulation, and restore normal movement. These treatments can loosen tight tissues, decrease pain, and support faster recovery so your body feels and functions better.",
      ]
    },
    modal5: {
      steps: [
        "Soft tissue therapy targets tight or irritated muscles to reduce pain, improve mobility, and help your body move more efficiently. It's a hands-on approach that supports faster recovery and better function.",
      ]
    },
  };

  const createModalController = (modalId, overlayId, boxId, textId, skipBtnId, nextBtnId, dotsId) => {
    const modalOverlay = document.getElementById(overlayId);
    const modalBox = document.getElementById(boxId);
    const modalText = document.getElementById(textId);
    const skipBtn = document.getElementById(skipBtnId);
    const nextStepBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsId);
    const dots = dotsContainer ? dotsContainer.querySelectorAll(".dot") : [];

    let currentStep = 0;

    const updateModal = () => {
      if (!modalContent[modalId]) return;
      const steps = modalContent[modalId].steps;
      modalText.textContent = steps[currentStep];

      dots.forEach((dot, index) => {
        if (index < steps.length) {
          dot.style.display = 'inline-block';
          dot.classList.toggle('active', index === currentStep);
        } else {
          dot.style.display = 'none';
        }
      });

      nextStepBtn.textContent = currentStep === steps.length - 1 ? 'Done' : 'Next';
    };

    const openModal = () => {
      currentStep = 0;
      updateModal();
      modalOverlay.style.display = "flex";
      setTimeout(() => modalBox.classList.add("show"), 10);
    };

    const closeModal = () => {
      modalBox.classList.remove("show");
      setTimeout(() => modalOverlay.style.display = "none", 300);
    };

    nextStepBtn.addEventListener("click", () => {
      const steps = modalContent[modalId].steps;
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateModal();
      } else {
        closeModal();
      }
    });

    skipBtn.addEventListener("click", closeModal);

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        const steps = modalContent[modalId].steps;
        if (idx < steps.length) {
          currentStep = idx;
          updateModal();
        }
      });
    });

    return { openModal, closeModal };
  };

  // Create controllers
  const modal1Controller = createModalController('modal1', 'modalOverlay1', 'modalBox1', 'modalText1', 'skipBtn1', 'nextStepBtn1', 'dots1');
  const modal2Controller = createModalController('modal2', 'modalOverlay2', 'modalBox2', 'modalText2', 'skipBtn2', 'nextStepBtn2', 'dots2');
  const modal3Controller = createModalController('modal3', 'modalOverlay3', 'modalBox3', 'modalText3', 'skipBtn3', 'nextStepBtn3', 'dots3');
  const modal4Controller = createModalController('modal4', 'modalOverlay4', 'modalBox4', 'modalText4', 'skipBtn4', 'nextStepBtn4', 'dots4');
  const modal5Controller = createModalController('modal5', 'modalOverlay5', 'modalBox5', 'modalText5', 'skipBtn5', 'nextStepBtn5', 'dots5');

  // Set up triggers
  document.getElementById("modal1")?.addEventListener("click", modal1Controller.openModal);
  document.getElementById("modal2")?.addEventListener("click", modal2Controller.openModal);
  document.getElementById("modal3")?.addEventListener("click", modal3Controller.openModal);
  document.getElementById("modal4")?.addEventListener("click", modal4Controller.openModal);
  document.getElementById("modal5")?.addEventListener("click", modal5Controller.openModal);
});
// Toggle Hamburger Menu
const toggle = document.getElementById('hamburgerToggle');
const links = document.getElementById('hamburgerLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('show');        // show/hide menu
  toggle.classList.toggle('active');     // transform hamburger into X
});

