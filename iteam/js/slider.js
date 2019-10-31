// if (val[i] < itemWidth * i + 1);
function getTheColor( colorVal ) {
    var theColor = ""; 
     var val = colorVal;
     var myRed,myGreen,third;
    if (val[1] < 277.5) {
              myRed = 255;
              myGreen = 255;
              third = 240; 
              border="rgb(255, 0, 0)"
              first="none";
              pos="none"
            //   bord="block"
            firstBorderColor="rgb(214, 221, 234)"
            secondBorderColor="rgb(214, 221, 234)"

        }
    else if (val[1] < 555){
            myRed = 255;
            myGreen = 0;
            third= 0;
            border="rgb(255, 0, 0)"
            first="block";
            pos="none";
            firstBorderColor="rgb(255, 0, 0)"
            secondBorderColor="rgb(214, 221, 234)"
            
        // bord="block"
    }
    else if(val[1] < 832.5)
    {
            myRed = 0;
            myGreen = 0;
            third = 0; 
            border="rgb(0,0,0)"
            first="block";
            pos="block"
            
            firstBorderColor="rgb(0,0,0)"
            secondBorderColor="rgb(0,0,0)"
            
        // bord="block"       
    }
    else
    {
        myRed = 223;
        myGreen = 220;
        third= 217
        border="rgb(223,220,214)"
        first="block";
        pos="block";
        firstBorderColor="rgb(223,220,214)"
        secondBorderColor="rgb(223,220,214)"
        // bord="block" 
    }
  
    theColor = "rgb(" + myRed + "," + myGreen +","+ third + ")"; 
    return(theColor ); 
}

function refreshSwatch() {
  var slider = $( "#slider" ).slider( "values" ),
  myColor = getTheColor( slider );
//   $( "#slider .slider__bord" ).css( "display", bord );
  $( "#slider .ui-slider-range" ).css( "background-color", myColor );
  $( "#slider .ui-state-default, .ui-widget-content .ui-state-default" ).css( "border-color", border );
  $( "#slider .slider__bord" ).css( "background", firstBorderColor );
  $( "#slider  .slider__secBord" ).css( "background", secondBorderColor );
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