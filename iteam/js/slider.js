// if (val[i] < itemWidth * i + 1);
function getTheColor( colorVal ) {
    var theColor = ""; 
     var val = colorVal;
     var myRed,myGreen,third;
    if (val[1] < 277.5) {
              myRed = 255;
              myGreen = 255;
              third = 240; 
              first="none";
              pos="none"
        }
    else if (val[1] < 555){
            myRed = 255;
            myGreen = 0;
            third= 0;
            first="block";
            pos="none"
    }
    else if(val[1] < 882.5)
    {
            myRed = 0;
            myGreen = 0;
            third = 0; 
            first="block";
            pos="block"       
    }
    else
    {
        myRed = 223;
        myGreen = 220;
        third= 217
        first="block";
        pos="block"  
    }
  
    theColor = "rgb(" + myRed + "," + myGreen +","+ third + ")"; 
    return(theColor ); 
}

function refreshSwatch() {
  var slider = $( "#slider" ).slider( "values" ),
  myColor = getTheColor( slider );
  
  $( "#slider .ui-slider-range" ).css( "background-color", myColor );
  $( "#slider .ui-state-default, .ui-widget-content .ui-state-default" ).css( "border-color", myColor );
  $( "#slider .statuses__sec" ).css( "display", pos );
  
  $( "#slider .statuses__first" ).css( "display", first );
  
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