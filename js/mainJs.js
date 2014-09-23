(function($){
    function positionFotoGoods(foto) {
        var widthFoto = foto.width() / 1.5,
            heightFoto = foto.height() / 1.5;

        foto.width(widthFoto).height(heightFoto);
        foto.css('marginLeft', -widthFoto / 2);
    }
    var fotoGoods1 = $('.foto-goods-size1');

    positionFotoGoods(fotoGoods1);
})(jQuery);