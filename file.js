(function( $ ) {
  $.fn.elipse = function() {
    var el = $( this );
    var text = el.html();

    if ( text.length > 500 ) {
      el.html( text.slice( 0, 500 ) + '…' );
    }
  };
}( jQuery ));
