/*
distanceFromHqInBlocks()
       returns a distance in blocks
       calculates distances below 42nd street
*/
function distanceFromHqInBlocks(blockValue){
    const scuberBlock = 42; //declare scubers block address 
    return (Math.abs(scuberBlock - blockValue) //Math.abs()returns absolute value of number
)}

//function returns distanceFromHqInFeet, calls distanceFromHqInBlocks function
//each block = 264 feet
//
function distanceFromHqInFeet(feetValue){
   return (distanceFromHqInBlocks(feetValue) * 264)
}

//Function that returns distance traveled in feet includes(start, destination) parameters
//add absolute value difference of start and destination (in ft)
//multiply difference by 264
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264                                              
}

/*function calculates fare price given start and destination parameters 
    between 400 and 2000 ft price is 2 cents/ft
    flat rate fare for distance over 2000 and less than 2500
    over 2500 ft -> 'cannot travel that far'
*/
function calculatesFarePrice(start, destination){
    const num1 = distanceTravelledInFeet(start, destination)
    if(num1 <= 400){
        return 0
    } else if(num1 > 400 && num1 < 2000){
        return(num1-400) * .02 //first 400ft are free, .02 cents/foot
    } else if(num1 >= 2000 && num1 < 2500){
        return 25
    } else (num1 >= 2500)
        return 'cannot travel that far'
    }
