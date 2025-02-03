const Room = require("./models/roomSchema");

let allRooms = [
  {
    title: "Cozy Mountain Cabin",
    description:
      "A charming cabin nestled in the mountains, perfect for a peaceful retreat. Features a fireplace and a private hot tub.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1683891068536-d508edc24cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q296eSUyME1vdW50YWluJTIwQ2FiaW4lMjBpbiUyMHVzYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "roomimage",
    },
    price: 120,
    location: "Aspen, Colorado",
    country: "USA",
  },

  {
    title: "Beachfront Bungalow",
    description:
      "Enjoy stunning ocean views from this lovely beachfront bungalow. Includes a spacious patio and direct beach access.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2hmcm9udCUyMEJ1bmdhbG93fGVufDB8fDB8fHww",
      filename: "roomimage",
    },
    price: 200,
    location: "Maui, Hawaii",
    country: "USA",
  },

  {
    title: "Modern City Apartment",
    description:
      "A sleek and stylish apartment in the heart of the city, close to shopping and nightlife.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1733317363398-88d9e6b52f01?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "roomimage",
    },
    price: 150,
    location: "New York, New York",
    country: "USA",
  },

  {
    title: "Rustic Farmhouse",
    description:
      "Experience countryside living in this rustic farmhouse. Perfect for family getaways with a large garden and farm animals.",
    image: {
      url: "https://media.istockphoto.com/id/185275043/photo/old-stone-house.jpg?s=1024x1024&w=is&k=20&c=v5qirScePzdVUy18JI6pQQUjk9fBBukwhDJQnGCvpFQ=",
      filename: "roomimage",
    },
    price: 100,
    location: "Tuscany",
    country: "Italy",
  },

  {
    title: "Luxury Villa with Pool",
    description:
      "A luxurious villa featuring a private pool, modern amenities, and stunning sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "roomimage",
    },
    price: 350,
    location: "Santorini",
    country: "Greece",
  },
];

const initDB = async () => {
  await Room.deleteMany({});
  allRooms = allRooms.map((obj) => ({
    ...obj,
    owner: "67a086242ae634b43bfc0486",
  }));
  await Room.insertMany(allRooms);
  console.log("Data initialise successfull");
};

initDB();
