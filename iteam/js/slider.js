// $("#slider-range").slider({
//   range: "min",
//   min: 1,
//   max: 500,
//   value: 37,
//   slide: function( event, ui ) {
//     $( "#amount" ).val( "$" + ui.value );
//   }
// });
// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "value" ));

// $( "#polzunok" ).slider({
//     animate: "slow",
//     range: "min",    
//     value: 50
// });
// jQuery("#slider").slider({
// 	min: 0,
// 	max: 1000,
// 	values: [0,1],
// 	range: true
    
// });
function getTheColor( colorVal ) {
    var theColor = ""; 
     var val = colorVal;
     var myRed,myGreen,third;
    // if (val[1] < 277.5) {
    //           myRed = 255;
    //           myGreen = 255;
    //           third = 240; 
    //     }
    // else 
    if (val[1] < 555){
            myRed = 255;
            myGreen = 0;
            third= 0;
            pos="none"
    }
    else if(val[1] < 1110)
    {
            myRed = 0;
            myGreen = 0;
            third = 0; 
            pos="block"
    }
    // else
    // {
    //     myRed = 223;
    //     myGreen = 220;
    //     third= 217
    // }
  
    theColor = "rgb(" + myRed + "," + myGreen +","+ third + ")"; 
    return( theColor, pos ); 
}
// var val = $('#slider').slider("values");
// console.log(val[0]);

// var pos = $("#slider .ui-slider-range").width();
// var offset = pos.offsetLeft

// console.log(pos)


function refreshSwatch() {
  var slider = $( "#slider" ).slider( "values" ),
  myColor = getTheColor( slider );
  $( "#slider .statuses__sec" ).css( "display", pos );
  $( "#slider .ui-slider-range" ).css( "background-color", myColor );
  $( "#slider .ui-state-default, .ui-widget-content .ui-state-default" ).css( "border-color", myColor );
  
    var val = $('#slider').slider("values");
    console.log(val[1]);
}

$(function() {
    $( "#slider" ).slider({
          orientation: "horizontal",
          range: "min",
          max: 1000,
          values: [0,10],
          slide: refreshSwatch,
          change: refreshSwatch,
          range: true,
          step : 1,
    });
});