// length converter
function feetToMile(feet){
    if(feet < 0){
        return "Error 404: length not found! Put a positive value.";
    }
    else{
        const mile = feet * 0.00018939;
        return mile;
    }
}




// total needed wood for furniture
function woodCalculator(chair, table, bed){
    if(chair >= 0 && table >= 0 && bed >= 0 ){
        return (chair * 1) + (table * 3) + (bed * 5);
    }
    else if(chair < 0 && table > 0 && bed > 0){
        return (table * 3) + (bed * 5);
    }
    else if(table < 0 && chair > 0 && bed > 0){
        return (chair * 1) + (bed * 5);
    }
    else if(bed < 0 && chair > 0 && table > 0){
        return (chair * 1) + (table * 3);
    }
    else if(chair < 0 && table < 0 && bed > 0){
        return bed * 5;
    }
    else if(chair < 0 && bed < 0 && table > 0){
        return table * 3;
    }
    else if(table < 0 && bed < 0 && chair > 0){
        return chair * 1;
    }
    else{
        return "You really wanna make something!!!!!";
    }
}


// total needed brick for building
function brickCalculator(Floor){
    let totalBricks = 0;
    if(Floor > 0 && Floor <= 10){
        totalBricks = (Floor * 15 * 1000);
        return totalBricks;
    }
    else if(Floor > 10 && Floor <= 20){
        totalBricks = (10 * 15 * 1000) + ((Floor-10) * 12 * 1000);
        return totalBricks;
    }
    else if(Floor > 20){
        totalBricks = (10 * 15 * 1000) + (10 * 12 * 1000) + ((Floor - 20) * 10 * 1000);
        return totalBricks;
    }
    else{
        return "Put a valid value."
    }
}

// tiny name finder
function tinyFriend(names){
    let tiny = names[0];
    for(let i = 0; i < names.length; i++){
        if(names[i].length < tiny.length){
            tiny = names[i];
        } 
    }
    if(names.length === 0){
        return "Make some friend!!"
    }
    else{
        return tiny;
    }
}