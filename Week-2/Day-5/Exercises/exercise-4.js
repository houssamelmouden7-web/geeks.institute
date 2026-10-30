const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

console.log(building.numberOfFloors); 

const aptFloor1 = building.numberOfAptByFloor.firstFloor;
const aptFloor3 = building.numberOfAptByFloor.thirdFloor;
console.log(`Floor 1 & 3 have: ${aptFloor1 + aptFloor3} apartments`); 

const secondTenant = building.nameOfTenants[1];
const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`${secondTenant} has ${danRooms} rooms`); 

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("New Dan's rent:", building.numberOfRoomsAndRent.dan[1]); 