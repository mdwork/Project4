$(document).ready(function(){
    function positionFotoGoods(foto) {
        for(var i = 0; i < foto.length; i++) {
            var curForo = $(foto[i]),
                curFotoWidth = $(foto[i]).width(),
                curFotoHeight = $(foto[i]).height();

            curForo.width(curFotoWidth / 1.5).height(curFotoHeight / 1.5);
            curForo.css('marginLeft', -curFotoWidth / 3 + 'px');
        }
    }

    var fotoGoods = $('.foto-goods-size1'),
        fotoNav = $('.box-catalog img');

    positionFotoGoods(fotoGoods);
    positionFotoGoods(fotoNav);
});