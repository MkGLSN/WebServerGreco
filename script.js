/*$("#coordenate").mousemove(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#xAx').text(x + ' ; ');
    $('#yAx').text(y);
}); 

$("#coordenate").mouseleave(function(e){
    $('#xAx').text("");
    $('#yAx').text("");
}); */

$(document).ready(function() {
    $(".un").hide();
    $(".smart").show();

    $('.smart').hover(function() {
        $(".un").fadeToggle(100);
    });
});

$(document).ready(function() {
    $(".do").hide();
    $(".internet").show();

    $('.internet').hover(function() {
        $(".do").slideToggle(100);
    });
});

$(document).ready(function() {
    $(".tri").hide();
    $(".pc").show();

    $('.pc').hover(function() {
        $(".tri").slideToggle(100);
    });
});

$(document).ready(function() {
    $(".tetra").hide();
    $(".ethernet").show();

    $('.ethernet').hover(function() {
        $(".tetra").slideToggle(100);
    });
});

$(document).ready(function() {
    $(".penta").hide();
    $(".programadora").show();

    $('.programadora').hover(function() {
        $(".penta").slideToggle(100);
    });
});

$(document).ready(function() {
    $(".hexa").hide();
    $(".luz").show();

    $('.luz').hover(function() {
        $(".hexa").slideToggle(100);
    });
});

$(document).ready(function() {
    $(".hepta").hide();
    $(".humedad").show();

    $('.humedad').hover(function() {
        $(".hepta").slideToggle(100);
    });
});