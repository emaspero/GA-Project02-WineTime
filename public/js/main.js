$('.btn').hover(
    function() {
        $(this).css({"background-color": "#a02222", "border-color": "#a02222", "color": "#f1f0f0"})
    }, function() {
        $(this).css({"background-color": "#f1f0f0", "color": "#a02222"})
    }
)
$('.navlink').hover(
    function() {
        $(this).css({"text-decoration": "underline", "color": "#a02222"})
    }, function() {
        $(this).css({"text-decoration": "none"})
    }
)