// Ekhane for loop bebohar kore ekta pattern toiri kora hoyechhe ja logic bujhte sahajyo korbe.

let totalFloors = 5;

for(i=1; i<=totalFloors; i++){
    let floorDesign = `Floor ${i}`;

    // proti floor-e room er count check kora
    for(j = 1; j<=3; j++){
        floorDesign += `[Room ${i}0${j}]`;
    }

    if(i === 3){
        console.log(floorDesign + "- (This floor is under renovation)");
    }

    console.log(floorDesign);
}