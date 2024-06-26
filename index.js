let someValue;
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  }

  return 42 - someValue;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  }
  return (destination - start) * 264;
}

distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
  if ((destination - start) * 264 <= 400) {
    return 0
  }
    if ((destination - start) * 264)>400 {
        return "destination - start) * 264"

  }


  }


calculateFarePrice();
