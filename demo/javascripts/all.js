!function(e){"use strict";window.addEventListener("load",function(){var t=(document.querySelector(".first-slide"),document.querySelector("#order-list"),document.getElementById("first-slide"));t.addEventListener("submit",function(a){0==t.checkValidity()?(a.preventDefault(),a.stopPropagation()):(e("#order-list").carousel("next"),a.preventDefault(),a.stopPropagation()),t.classList.add("was-validated"),console.log(t.checkValidity())},!1)},!1),e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);if(t=t.length?t:e("[name="+this.hash.slice(1)+"]"),t.length)return e("html, body").animate({scrollTop:t.offset().top-48},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:54});var t=function(){e("#mainNav").offset().top>100?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};t(),e(window).scroll(t)}(jQuery);