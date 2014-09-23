(function($){
    function positionFotoGoods(foto) {
        for(var i = 0; i < foto.length; i++) {
            $(foto[i]).width($(foto[i]).width() / 1.5).height($(foto[i]).height());
            $(foto[i]).css('marginLeft', -$(foto[i]).width() / 2);
        }
    }
    var fotoGoods = $('.foto-goods-size1'),
        fotoNav = $('.box-catalog img');

    positionFotoGoods(fotoGoods);
    positionFotoGoods(fotoNav);
})(jQuery);