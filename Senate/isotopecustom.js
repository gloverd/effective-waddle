$(document).ready(function() {
    // Initialize Isotope
    var $gallery = $('.gallery').isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows', // Use fitRows layout mode for consistent row heights
        fitRows: {
            gutter: 16 // Ensure the gutter spacing is maintained
        },
        getSortData: {
            pname: '.pname',
            fname: '.fname',
            lname: '.lname',
            state: '.statechip'
        }
    });

    // Bind sort button click
    $('.button-group').on('click', 'button', function() {
        var sortByValue = $(this).attr('data-sort-by');
        $gallery.isotope({ sortBy: sortByValue });
    });


    // store filter for each group
    var filters = {};
    $('#filters').on( 'click', '.button', function( event ) {
      var $button = $( event.currentTarget );
      // get group key
      var $buttonGroup = $button.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $button.attr('data-filter');
      // combine filters
      var filterValue = concatValues( filters );
      // set filter for Isotope
      $grid.isotope({ filter: filterValue });
    });

        // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }
    
});
