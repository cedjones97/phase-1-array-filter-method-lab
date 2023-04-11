// Code your solution here

// const users = [
//     {
//       firstName: "Niky",
//       lastName: "Morgan",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Tracy",
//       lastName: "Lum",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Josh",
//       lastName: "Rowley",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Kate",
//       lastName: "Travers",
//       favoriteColor: "Red",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Avidor",
//       lastName: "Turkewitz",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Drew",
//       lastName: "Price",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Elephant",
//     },
//   ];

//   function firstNamePrinter(collection) {
//     for (const user of collection) {
//       console.log(user.favoriteAnimal);
//     }
//   }
  
//  firstNamePrinter(users)

//   function blueFilter(collection) {
//     for (const user of collection) {
//       if (user.favoriteColor === "Blue") {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   blueFilter(users);

//   function colorFilter(collection, color) {
//     for (const user of collection) {
//       if (user.favoriteColor === color) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   colorFilter(users, "Red")

//   function filter(collection, attribute, value) {
//     for (const user of collection) {
//       if (user[attribute] === value) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   filter(users, "favoriteAnimal", "Jaguar")

//   function filter(collection, attribute1, value1, attribute2, value2) {
//     for (const user of collection) {
//       if (user[attribute1] === value1 && user[attribute2] === value2) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   filter(users, "favoriteAnimal", "Jaguar", "favoriteColor", "Blue")

//   function filter(collection) {
//     for (const user of collection) {
//       if (likesElephants(user)) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   function likesElephants(user) {
//     return user["favoriteAnimal"] === "Elephant";
//   }
  
//   filter(users)


//   const users = [
//     {
//       firstName: "Niky",
//       lastName: "Morgan",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Tracy",
//       lastName: "Lum",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Josh",
//       lastName: "Rowley",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Kate",
//       lastName: "Travers",
//       favoriteColor: "Red",
//       favoriteAnimal: "Jaguar",
//     },
//     {
//       firstName: "Avidor",
//       lastName: "Turkewitz",
//       favoriteColor: "Blue",
//       favoriteAnimal: "Penguin",
//     },
//     {
//       firstName: "Drew",
//       lastName: "Price",
//       favoriteColor: "Yellow",
//       favoriteAnimal: "Elephant",
//     },
//   ];
  
//   function filter(collection, cb) {
//     for (const user of collection) {
//       if (cb(user)) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
//   filter(users, function (user) {
//     return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
//   });
//   // LOG: Josh
//   // LOG: Avidor
  


//   const numbers = [1, 2, 3, 4, 5, 6]
//   const even = numbers.filter(isEven)

//   function isEven(value){
//     return value % 2 === 0
//   }
//   console.log(even)

//   const people = [
//     {
//         name: 'Cedric',
//         age: 25
//     },
//     
//         name: "Ernest",
//         age: 29
//     },
//     {
//         name: 'Alicia',
//         age: 20
//     }
//   ]
//   const adultsWhoCanDrink = people.filter(people => people.age <= 21)

//   console.log(adultsWhoCanDrink)


//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

  function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  }
  
  function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.indexOf(string) === 0 )

  }

  function matchName(drivers, string){
    return drivers.filter(driver => string === driver.name)
  }//(driver => console.log(driver))