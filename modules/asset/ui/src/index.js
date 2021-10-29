export default () => {
  const main = () => {
    const routeHome = () => {
      window.location = window.location.origin;
    };
    const links = [
      (document.querySelector('.home-link') || undefined),
      (document.querySelector('.about-us-link') || undefined),
      (document.querySelector('.our-artists-link') || undefined),
      (document.querySelector('.blog-link') || undefined),
      (document.querySelector('.contact-us-link') || undefined),
      (document.querySelector('.open-sea-sink') || undefined)
    ];
    const areas = [
      (document.querySelector('#home') || undefined),
      (document.querySelector('#about') || undefined),
      (document.querySelector('#artists') || undefined),
      (document.querySelector('#blog') || undefined),
      (document.querySelector('#contact') || undefined),
      (document.querySelector('#opensea') || undefined)
    ];

    links.forEach((el, i) => {
      if (el) {
        el.addEventListener('click', () => {
          areas[i].scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        });
      } else {
        routeHome();
      }
    });

  };

  main();

};