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
              pos="none";
              
            thirdpos="none";
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
            thirdpos="none";
            firstBorderColor="rgb(255, 0, 0)";
            secondBorderColor="rgb(214, 221, 234)"
            
        // bord="block"
    }
    else if(val[1] < 832.5)
    {
            myRed = 0;
            myGreen = 0;
            third = 0; 
            border="rgb(0,0,0)";
            first="block";
            pos="block";
            thirdpos="none";
            firstBorderColor="rgb(0,0,0)";
            secondBorderColor="rgb(0,0,0)";

            
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
        thirdpos="block"
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
  $( "#slider .statuses__third" ).css( "display", thirdpos );
  $( "#slider .statuses__sec" ).css( "display", pos );
  $( "#slider .statuses__first" ).css( "display", first );
    var val = $('#slider').slider("values");
    console.log(val[1]);
    
}
// var a = document.getElementById('white');
// a.onclick = function(colorVal) {
//     // b[1].style.left = "30%";
//     // var val = colorVal
// console.log(colorVal)
//     // b[1]= 
//     // //производим какие-то действия
//     // if (this.innerHTML=='On') this.innerHTML = 'Off';
//     // else this.innerHTML = 'On';
//     // //предотвращаем переход по ссылке href
//     // return false;
    
// }

$(document).click(function(event) { 
    $target = $(event.target);
    if(!$target.closest('#menucontainer').length && 
    $('#menucontainer').is(":visible")) {
      $('#menucontainer').hide();
    }        
  });


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



// window.onload = function () {

//     //получаем идентификатор элемента
//     var a = document.getElementById('white');
    
//     // var b = document.getElementById('slider');
//     var b = document.getElementsByClassName("ui-slider-handle ui-state-default ui-corner-all")
//     console.log(b[1])
        
//     //вешаем на него событие
//     a.onclick = function() {
//         b[1].style.left = "30%";
//         // b[1]= 
//         // //производим какие-то действия
//         // if (this.innerHTML=='On') this.innerHTML = 'Off';
//         // else this.innerHTML = 'On';
//         // //предотвращаем переход по ссылке href
//         // return false;
        
//     }
// }