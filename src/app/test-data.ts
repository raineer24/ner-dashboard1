import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [{
      "id": 1,
      "username": "test",
      "password": "test",
      "firstName": "ted",
      "lastName": "james",
      "gender": "male",
      "address": "1234 Anywhere St.",
      "city": " Phoenix ",
      "token": "secret",
      "state": {
        "abbreviation": "AZ",
        "name": "Arizona"
      },
      "orders": [{
          "productName": "Basketball",
          "itemCost": 7.99
        },
        {
          "productName": "Shoes",
          "itemCost": 199.99
        }
      ],
      "latitude": 33.299,
      "longitude": -111.963
    },
    {
      "id": 2,
      "username": "test",
      "password": "test",
      "firstName": "Michelle",
      "lastName": "Thompson",
      "gender": "female",
      "address": "345 Cedar Point Ave.",
      "city": "Encinitas ",
      "token": "secret",
      "state": {
        "abbreviation": "CA",
        "name": "California"
      },
      "orders": [{
          "productName": "Frisbee",
          "itemCost": 2.99
        },
        {
          "productName": "Hat",
          "itemCost": 5.99
        }
      ],
      "latitude": 33.037,
      "longitude": -117.291
    },
    {
      "id": 3,
      "username": "test",
      "password": "test",
      "firstName": "Zed",
      "lastName": "Bishop",
      "gender": "male",
      "address": "1822 Long Bay Dr.",
      "city": " Seattle ",
      "token": "secret",
      "state": {
        "abbreviation": "WA",
        "name": "Washington"
      },
      "orders": [{
          "productName": "Boomerang",
          "itemCost": 29.99
        },
        {
          "productName": "Helmet",
          "itemCost": 19.99
        },
        {
          "productName": "Kangaroo Saddle",
          "itemCost": 179.99
        }
      ],
      "latitude": 47.596,
      "longitude": -122.331
    },
    {
      "id": 4,
      "username": "test",
      "password": "test",
      "firstName": "Tina",
      "lastName": "Adams",
      "gender": "female",
      "address": "79455 Pinetop Way",
      "city": "Chandler",
      "token": "secret",
      "state": {
        "abbreviation": "AZ",
        "name": " Arizona "
      },
      "orders": [{
          "productName": "Budgie Smugglers",
          "itemCost": 19.99
        },
        {
          "productName": "Swimming Cap",
          "itemCost": 5.49
        }
      ],
      "latitude": 33.299,
      "longitude": -111.963
    },
    {
      "id": 5,
      "username": "test",
      "password": "test",
      "firstName": "Igor",
      "lastName": "Minar",
      "gender": "male",
      "address": "576 Crescent Blvd.",
      "city": " Dallas",
      "token": "secret",
      "state": {
        "abbreviation": "TX",
        "name": "Texas"
      },
      "orders": [{
          "productName": "Bow",
          "itemCost": 399.99
        },
        {
          "productName": "Arrows",
          "itemCost": 69.99
        }
      ],
      "latitude": 32.782927,
      "longitude": -96.806191
    },
    {
      "id": 6,
      "username": "test",
      "password": "test",
      "firstName": "Brad",
      "lastName": "Green",
      "gender": "male",
      "address": "9874 Center St.",
      "city": "Orlando ",
      "token": "secret",
      "state": {
        "abbreviation": "FL",
        "name": "Florida"
      },
      "orders": [{
          "productName": "Baseball",
          "itemCost": 9.99
        },
        {
          "productName": "Bat",
          "itemCost": 19.99
        }
      ],
      "latitude": 28.384238,
      "longitude": -81.564103
    },
    {
      "id": 7,
      "username": "test",
      "password": "test",
      "firstName": "Misko",
      "lastName": "Hevery",
      "gender": "male",
      "address": "9812 Builtway Appt #1",
      "city": "Carey ",
      "token": "secret",
      "state": {
        "abbreviation": "NC",
        "name": "North Carolina"
      },
      "orders": [{
          "productName": "Surfboard",
          "itemCost": 299.99
        },
        {
          "productName": "Wax",
          "itemCost": 5.99
        },
        {
          "productName": "Shark Repellent",
          "itemCost": 15.99
        }
      ],
      "latitude": 35.727985,
      "longitude": -78.797594
    },
    {
      "id": 8,
      "username": "test",
      "password": "test",
      "firstName": "Heedy",
      "lastName": "Wahlin",
      "gender": "female",
      "address": "4651 Tuvo St.",
      "city": "Anaheim",
      "token": "secret",
      "state": {
        "abbreviation": "CA",
        "name": "California"
      },
      "orders": [{
          "productName": "Saddle",
          "itemCost": 599.99
        },
        {
          "productName": "Riding cap",
          "itemCost": 79.99
        }
      ],
      "latitude": 33.809898,
      "longitude": -117.918757
    },
    {
      "id": 9,
      "username": "test",
      "password": "test",
      "firstName": "John",
      "lastName": "Papa",
      "gender": "male",
      "address": "66 Ray St.",
      "city": " Orlando",
      "token": "secret",
      "state": {
        "abbreviation": "FL",
        "name": "Florida"
      },
      "orders": [{
          "productName": "Baseball",
          "itemCost": 9.99
        },
        {
          "productName": "Bat",
          "itemCost": 19.99
        }
      ],
      "latitude": 28.384238,
      "longitude": -81.564103
    },
    {
      "id": 10,
      "username": "test",
      "password": "test",
      "firstName": "Tonya",
      "lastName": "Smith",
      "gender": "female",
      "address": "1455 Chandler Blvd.",
      "city": " Atlanta",
      "token": "secret",
      "state": {
        "abbreviation": "GA",
        "name": "Georgia"
      },
      "orders": [{
          "productName": "Surfboard",
          "itemCost": 299.99
        },
        {
          "productName": "Wax",
          "itemCost": 5.99
        },
        {
          "productName": "Shark Repellent",
          "itemCost": 7.99
        }
      ],
      "latitude": 33.762297,
      "longitude": -84.392953
    },
    {
      "id": 11,
      "username": "test",
      "password": "test",
      "firstName": "ward",
      "lastName": "bell",
      "gender": "male",
      "address": "888 Central St.",
      "city": "Los Angeles",
      "token": "secret",
      "state": {
        "abbreviation": "CA",
        "name": "California"
      },
      "latitude": 34.042552,
      "longitude": -118.266429
    },
    {
      "id": 12,
      "username": "test",
      "password": "test",
      "firstName": "Marcus",
      "lastName": "Hightower",
      "gender": "male",
      "address": "1699 Atomic St.",
      "city": "Dallas",
      "token": "secret",
      "state": {
        "abbreviation": "TX",
        "name": "Texas"
      },
      "latitude": 32.782927,
      "longitude": -96.806191
    },
    {
      "id": 13,
      "username": "test",
      "password": "test",
      "firstName": "Thomas",
      "lastName": "Martin",
      "gender": "male",
      "address": "98756 Center St.",
      "city": "New York",
      "token": "secret",
      "state": {
        "abbreviation": "NY",
        "name": "New York City"
      },
      "orders": [{
          "productName": "Car",
          "itemCost": 42999.99
        },
        {
          "productName": "Wax",
          "itemCost": 5.99
        },
        {
          "productName": "Shark Repellent",
          "itemCost": 7.99
        }
      ],
      "latitude": 40.725037,
      "longitude": -74.004903
    },
    {
      "id": 14,
      "username": "test",
      "password": "test",
      "firstName": "Jean",
      "lastName": "Martin",
      "gender": "female",
      "address": "98756 Center St.",
      "city": "New York City",
      "token": "secret",
      "state": {
        "abbreviation": "NY",
        "name": "New York"
      },
      "latitude": 40.725037,
      "longitude": -74.004903
    },
    {
      "id": 15,
      "username": "test",
      "password": "test",
      "firstName": "Pinal",
      "lastName": "Dave",
      "gender": "male",
      "address": "23566 Directive Pl.",
      "city": "White Plains",
      "token": "secret",
      "state": {
        "abbreviation": "NY",
        "name": "New York"
      },
      "latitude": 41.028726,
      "longitude": -73.758261
    },
    {
      "id": 16,
      "username": "test",
      "password": "test",
      "firstName": "Robin",
      "lastName": "Cleark",
      "gender": "female",
      "address": "35632 Richmond Circle Apt B",
      "city": "Las Vegas",
      "token": "secret",
      "state": {
        "abbreviation": "NV",
        "name": "Nevada"
      },
      "latitude": 36.091824,
      "longitude": -115.174247
    },
    {
      "id": 17,
      "username": "test",
      "password": "test",
      "firstName": "Fred",
      "lastName": "Roberts",
      "gender": "male",
      "address": "12 Ocean View St.",
      "city": "Houston",
      "token": "secret",
      "state": {
        "abbreviation": "TX",
        "name": "Texas"
      },
      "latitude": 29.750163,
      "longitude": -95.362769
    },
    {
      "id": 18,
      "username": "test",
      "password": "test",
      "firstName": "Robyn",
      "lastName": "Flores",
      "gender": "female",
      "address": "23423 Adams St.",
      "city": "Seattle",
      "token": "secret",
      "state": {
        "abbreviation": "WA",
        "name": "Washington"
      },
      "latitude": 47.596,
      "longitude": -122.331
    },
    {
      "id": 19,
      "username": "test",
      "password": "test",
      "firstName": "Elaine",
      "lastName": "Jones",
      "gender": "female",
      "address": "98756 Center St.",
      "city": "Barcelona",
      "token": "secret",
      "state": {
        "abbreviation": "CAT",
        "name": "Catalonia"
      },
      "latitude": 41.386444,
      "longitude": 2.111988
    },
    {
      "id": 20,
      "username": "test",
      "password": "test",
      "firstName": "Lilija",
      "lastName": "Arnarson",
      "gender": "female",
      "address": "23423 Adams St.",
      "city": "Reykjavik",
      "token": "secret",
      "state": {
        "abbreviation": "IS",
        "name": "Iceland"
      },
      "latitude": 64.120278,
      "longitude": -21.830471
    },
    {
      "id": 21,
      "username": "test",
      "password": "test",
      "firstName": "Laurent",
      "lastName": "Bugnion",
      "gender": "male",
      "address": "9874 Lake Blvd.",
      "city": "Zurich",
      "token": "secret",
      "state": {
        "abbreviation": "COZ",
        "name": "Canton of Zurick"
      },
      "orders": [{
          "productName": "Baseball",
          "itemCost": 9.99
        },
        {
          "productName": "Bat",
          "itemCost": 19.99
        }
      ],
      "latitude": 47.341337,
      "longitude": 8.582503
    },
    {
      "id": 22,
      "username": "test",
      "password": "test",
      "firstName": "Gabriel",
      "lastName": "Flores",
      "gender": "male",
      "address": "2543 Cassiano",
      "city": "Rio de Janeiro",
      "token": "secret",
      "state": {
        "abbreviation": "WA",
        "name": "Rio de Janeiro"
      },
      "latitude": -22.919369,
      "longitude": -43.181836
    }
  ]
  ;
    return { customers: articleDetails };
  } 
} 