var  yards = 0;
var meters = 0;
var inches = 110;

function convertLength() {
    if (yards > 0 )
    //converts yards to meters and inches
    {
        console.log((yards * .914).toFixed(3)+ " Meter\n"  + (yards * 36) +' Inches');
    } else if (meters > 0)
    //converts meters to yards and inches
     {
        console.log((meters * 1.093).toFixed(3) + " Yards\n" + (meters * 39.37).toFixed(3) + " Inches");
    } else (inches > 0) 
    //converts inches to yards and meters.
        console.log((inches / 36).toFixed(3) + ' Yards\n' + (inches / 39.37).toFixed(3) + ' Meter');
    
}
convertLength();