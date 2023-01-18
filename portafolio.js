window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.getElementById("back-to-top").addEventListener("click", topFunction);

// cambio idioma


document.getElementById("English").onclick = function() {
    window.location.href = "index-en.html";
};
document.getElementById("Spanish").onclick = function() {
    window.location.href = "index.html";
};
