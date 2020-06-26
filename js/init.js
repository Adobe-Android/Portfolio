(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  });
})(jQuery); // end of jQuery name space

(function setYear() {
  const year = new Date().getFullYear();
  const copyrightString = "\u00A9";
  const textNode = document.createTextNode(`${copyrightString} 2017-${year} David Brown`);
  const yearElement = document.createElement("p").appendChild(textNode);
  document.getElementById("year-container").appendChild(yearElement);
})();

const typed = new Typed('#typed', {
  strings: ["Web", "JavaScript", "Python", "C#", "SQL"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 2000,
  startDelay: 200,
  loop: true
});