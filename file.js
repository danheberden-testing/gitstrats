(function( $ ) {
  $.fn.elipse = function() {
    var el = $( this );
    var text = el.html();

    if ( text.length > 500 ) {
      var truncated = text.slice( 0, 500 );
      // remote text after last space
      truncated.replace( /(\s)[^\s]*$/, '' );
      el.html( truncated + '…' );
    }
  };
}( jQuery ));
