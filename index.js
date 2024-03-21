function distanceFromHqInBlocks(pickupLocation){
  const hqLocation = 42;
  return Math.abs(pickupLocation -hqLocation);
}

function distanceFromHqInFeet(pickupLocation){
  const feetPerBlock = 264;
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * feetPerBlock;
}
console.log(distanceFromHqInFeet(27)); 

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  const distanceTravelled = Math.abs( start-destination)
  return distanceTravelled * feetPerBlock;
}


function calculatesFarePrice(start, destination){
  const distanceTravelled = Math.abs(start-destination)* 264
  let fare ;{

    if (distanceTravelled < 400) {
      fare = 0;
  } 
  else if (distanceTravelled > 401 && distanceTravelled < 2000 ) {
      fare = (distanceTravelled -400) * 0.02;
  }
  else if (  distanceTravelled > 2000 && distanceTravelled <2500  ){
      fare = 25 ;
  }
  else { 
      fare = "cannot travel that far";
  }
  }
  return fare;

  
}
