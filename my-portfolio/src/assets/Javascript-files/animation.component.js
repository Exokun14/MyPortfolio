window.onload = () => {

  const fadeInElements = document.querySelectorAll('.hidden-fadeInUp');
  fadeInElements.forEach((element) => {
    
    element.classList.add('fadeInUp');
    console.log(element);
  });
  };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      if (entry.target.classList.contains('hidden'))
      {
        entry.target.classList.add('show');
      }

      if (entry.target.classList.contains('hidden-fadeInLeft'))
      {
        entry.target.classList.add('fadeInLeft');
      }

      if (entry.target.classList.contains('hidden-fadeInRight'))
      {
        entry.target.classList.add('fadeInRight');
      }

    }
    else {
      
      if (entry.target.classList.contains('hidden'))
      {
        entry.target.classList.remove('show');
      }

      if (entry.target.classList.contains('hidden-fadeInLeft'))
      {
        entry.target.classList.remove('fadeInLeft');
      }

      if (entry.target.classList.contains('hidden-fadeInRight'))
      {
        entry.target.classList.remove('fadeInRight');
      }

    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const hiddenFadeInLeftElements = document.querySelectorAll('.hidden-fadeInLeft');
hiddenFadeInLeftElements.forEach((element) => observer.observe(element));

const hiddenFadeInRightElements = document.querySelectorAll('.hidden-fadeInRight');
hiddenFadeInRightElements.forEach((element) => observer.observe(element));
