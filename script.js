'use strict'

//while loop

let year = 2018;

while(year != 1991)
{
    //Execute that
    console.log("We're living at the year: "+year);

    if(year == 2000)
    {
        break;
    }

    year --;
}

//Do While

let years = 30;
do{
    alert("Only when it is different to tewenty");
    years --;
}while(years > 25)