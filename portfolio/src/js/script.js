const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuItem = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = document.querySelectorAll('.skills__scale-percent'),
            lines = document.querySelectorAll('.skills__scale-full');
        counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
        });
      }
    });
  });
  observer.observe(document.querySelector('.skills__scale-full'));

  const anchors = document.querySelectorAll('a[href^="#"]')

  for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault()
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      document.querySelector(goto).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }

  $(document).ready(function () {
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('div .success').addClass("active");
          $('form').trigger('reset');
      });
      return false;
  });

});