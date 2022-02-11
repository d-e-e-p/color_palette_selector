
// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky_menu()};

// Get the header
var header = document.getElementById("menu");
var top_container = document.getElementById("top-container");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_menu() {
  if (window.pageYOffset > sticky) {
    //console.log(`adding sticky : off=${window.pageYOffset} sticky=${sticky}`);
    header.classList.add("sticky");
    top_container.classList.add("zero");
    top_container.style.height = header.offsetHeight;
    //var img = document.getElementById('image-usage');
    //img.style.visibility = 'hidden';
  } 

    /*
  if (window.pageYOffset < sticky) {
    console.log(`removing sticky : off=${window.pageYOffset} sticky=${sticky}`);
    header.classList.remove("sticky");
  }
  */
}
