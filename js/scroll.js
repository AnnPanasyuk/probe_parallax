
$("body").on("click",".text-ct a, .dots a",function(){var t=$($(this).attr("href")).offset().top;return $("html,body").animate({scrollTop:t},800),!1});

