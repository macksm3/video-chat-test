require('dotenv').config()
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

let resourceSeed = [
  {
    resourceInfo: [
      {
        resourceId: "1",
        resourceType: "biz",
        resourceName: "polyanna",
        website: "she/her",
        email: "Ann@examlpe.com",
        phone: "555-867-5309",
        city: "here",
        state: "here",
        contactName: "John Doe",
        description: "Better every day",
        memberOwned: "true"
      }
    ]
  },
  {
    resourceInfo: [
      {
        resourceId: "2",
        resourceType: "biz",
        resourceName: "JustJoe",
        website: "she/her",
        email: "Joe@examlpe.com",
        phone: "555-867-5309",
        city: "usa",
        state: "usa",
        contactName: "John Doe",
        description: "we exist",
        memberOwned: "true"
      }
    ]
  },
  {
    resourceInfo: [
      {
        resourceId: "3",
        resourceType: "biz",
        resourceName: "firefox",
        website: "she/her",
        email: "fox@examlpe.com",
        phone: "555-867-5309",
        city: "North East USA",
        state: "North East USA",
        contactName: "John Doe",
        description: "more info",
        memberOwned: "true"
      }
    ]
  },
];


db.Resource.deleteMany({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.result.n + " resource records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  