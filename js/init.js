(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function setYear() {
  let date = new Date();
  let dateYear = date.getFullYear();
  let yearElement = document.createElement("p");
  let copyrightString = "\u00A9";
  let elementString = `${copyrightString} 2017-${dateYear} David Brown`;
  let elementText = document.createTextNode(elementString);
  yearElement.appendChild(elementText);
  document.getElementById("year-container").appendChild(yearElement);
})();

const typed = new Typed('#typed', {
  strings: ["Web", "JavaScript", "Python", "C#", ".NET"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 2000,
  startDelay: 200,
  loop: true
});