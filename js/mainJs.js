(function($){
    function positionFotoGoods(foto) {
        var widthFoto = foto.width();
        foto.css('marginLeft', -widthFoto / 2);
    }
    var fotoGoods1 = $('.foto-goods-size1'),
        fotoGoods2 = $('.foto-goods-size2');

    positionFotoGoods(fotoGoods1);
    positionFotoGoods(fotoGoods2);

})(jQuery);