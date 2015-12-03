$(document).ready(function() { // optional, but only runs js once DOM is fully rendered
    $('a').addClass('bolden');

    $('a').click(function(e){
      e.preventDefault();
    });

    $('#getHtml').click(function() {
      $.get('test.html', function(d){
        $('#get').html(d);
      })
    });

    $('#btn').mouseenter(function() {
      $('#get').hide();
    }).mouseleave(function() {
      $('#get').show()
    });

    // $.ajax({
    //   url: 'http://www.bayareabikeshare.com/stations/json',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })

});


