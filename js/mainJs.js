$(document).ready(function(){
    function positionFotoGoods(foto) {
        $(foto).each(function(){
            var curForo = $(this),
                curFotoWidth = $(this).width(),
                curFotoHeight = $(this).height();

            console.log(curFotoWidth);
            curForo.width(curFotoWidth / 1.5).height(curFotoHeight / 1.5);
            curForo.css('marginLeft', -curFotoWidth / 3 + 'px');
        });

    }

    var fotoGoods = $('.foto-goods-size1'),
        fotoGoods2 = $('.foto-goods-size2'),
        fotoNav = $('.box-catalog img');

    positionFotoGoods(fotoGoods);
    positionFotoGoods(fotoGoods2);
    positionFotoGoods(fotoNav);
});