/*!
 * site package v1.0.0 (https://studiothompfister.com)
 * Copyright 2023-2024 Daniel Hackiewicz
 * Licensed under the GPL-2.0-or-later license
 */
$(document).ready(function(){function o(){$(window).width()<991.9&&$(".nav-item").on("click",function(){$("body").removeClass("modal-open"),$(".navbar-collapse").removeClass("show")})}function n(){var o=$(".from-here").offset().top;$("#footer_kontakt").offset().top-13<=o?$(".navbar").addClass("new-colors"):$(".navbar").removeClass("new-colors")}console.log("Made with ❤️‍🔥🔥✨💖 in Bern"),o(),$("#navbarSupportedContent").on("show.bs.collapse",function(){$("body").addClass("modal-open")}),$("#navbarSupportedContent").on("hide.bs.collapse",function(){$("body").removeClass("modal-open")}),n(),$(document).on("click",'a[href^="#"]',function(o){o.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}),$(window).on("scroll resize",function(){n(),o()})});