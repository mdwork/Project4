$(document).ready(function(){
    function positionFotoGoods(foto) {
        $(foto).each(function(){
            var curForo = $(this),
                curFotoWidth = $(this).width();

            curForo.css('marginLeft', -curFotoWidth / 2 + 'px');
        });
    }

    var fotoGoods = $('.box-foto-goods img'),
        fotoNav = $('.box-catalog img');

    positionFotoGoods(fotoGoods);
    positionFotoGoods(fotoNav);
});