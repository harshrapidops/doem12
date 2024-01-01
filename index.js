// // // // // const express = require('express')
// // // // // const app = express()
// // // // // const port = 3000


// // // // // const ENV = process.env.NODE_ENV || 'local';

// // // // // console.log(ENV);
// // // // // app.get('/', (req, res) => res.send('Hello World!'))
// // // // // app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// // // // // function getRandomIntegers(length) {
// // // // //     const integers = '0123456789';
// // // // //     const IntLength = integers.length;
// // // // //     let pair = '';
// // // // //     for (let i = 0; i < length; i++) {

// // // // //     console.log(integers.charAt(Math.floor(Math.random() * IntLength)));
// // // // //       pair += integers.charAt(Math.floor(Math.random() * IntLength));
// // // // //     }
// // // // //     return pair;
// // // // //   }

// // // // // let hours='12';
// // // // // console.log(parseInt(hours));

// // // // //   console.log(getRandomIntegers(16));

// // // // // const object1 = {  
// // // // //     a: 1,  
// // // // //     b: 2,  
// // // // //     c: 3  
// // // // //   };  
// // // // //   const object3= {  
// // // // //     g: 1,  
// // // // //     h: 2,  
// // // // //     i: 3  
// // // // //   };    
    
// // // // //   const object2 = Object.assign({c: 4, d: 5}, object1);  
// // // // //   const object4 = Object.assign({g: 34, h: 25}, object3); 

// // // // //   console.log(object2);

// // // // const object1 = {};  
// // // // Object.defineProperty(object1, 'property1', {  
// // // //   value: 22, } );  
// // // // //   object1.property1; 
// // // //   console.log(object1.property1);

// // // // Example in JavaScript (can be used in both browser and Node.js)
// // // const moment = require('moment');

// // // // Given time points
// // // const dateStr = "2023-12-08";
// // // const startTimes = ["11:00", "12:11"];
// // // const endTimes = ["11:11", "17:00"];

// // // // Calculate the due time for each period
// // // for (let i = 0; i < startTimes.length; i++) {
// // //     const startTimeStr = `${dateStr} ${startTimes[i]}`;
// // //     const endTimeStr = `${dateStr} ${endTimes[i]}`;

// // //     const startTime = moment(startTimeStr, "YYYY-MM-DD HH:mm");
// // //     const endTime = moment(endTimeStr, "YYYY-MM-DD HH:mm");

// // //     const dueTime = moment.duration(endTime.diff(startTime));

// // //     console.log(`Due time between ${startTime.format("HH:mm")} and ${endTime.format("HH:mm")}: ${dueTime.hours()} hours and ${dueTime.minutes()} minutes.`);
// // // }

// // // const EventEmitter = require('events');
// // // class MyEmitter extends EventEmitter {
// // //   constructor() {
// // //     super();
// // //     this.emit('event');
// // //   }
// // // }
// // // const myEmitter = new MyEmitter();
// // // myEmitter.on('event', () => {
// // //   console.log('an event occurred!');
// // // });


// // // 'use strict';

// // // module.exports = {
// // //   up: function(migration, DataTypes) {
// // //     return migration.sequelize.query(`
// // //     INSERT INTO features (id, name, type, is_enabled, token, group_name, configured_feature_details_url) VALUES ('33cd3361-3d7f-4cfe-ac30-72b0a0d4bbe2', 'Team Business Hours', 'boolean', flase,
// // //     'TEAM_BUSINESS_HOURS', 'Teams', null);
// // //     `);
// // //   },
// // // };


// // console.log('Task 1');
// // console.log('Task 2');
// // // some time consuming for loop
// // for(let i = 0; i < 1000000000; i++) {
// // }
// // console.log('Task 3');


// const wb = [{
//   id:1
// }]

// CREATE TABLE hello (
//   id UUID,
//   last_location JSONB
// );

// INSERT INTO hello (last_location) VALUES
//     (convert_to([
//       {
//           "type": "report-card",
//           "size": {
//               "width": 300,
//               "height": 100
//           },
//           "ports": {
//               "groups": {
//                   "in": {
//                       "markup": "<circle cx=\"152\" cy=\"141\" r=\"0\" fill=\"transparent\" class=\"member-button-circle\" magnet=\"passive\"></circle>",
//                       "attrs": {
//                           ".port-label": {
//                               "fill": "none"
//                           },
//                           ".port-body": {
//                               "fill": "#fff",
//                               "stroke": "#000",
//                               "r": 10,
//                               "magnet": true
//                           }
//                       },
//                       "position": {
//                           "name": "left",
//                           "args": {
//                               "x": 0,
//                               "y": 0
//                           }
//                       },
//                       "label": {
//                           "position": {
//                               "name": "left",
//                               "args": {
//                                   "y": 10
//                               }
//                           }
//                       }
//                   },
//                   "out": {
//                       "markup": "<circle cx=\"152\" cy=\"10\" r=\"10\" fill=\"transparent\" class=\"member-button-circle\" magnet=\"passive\"></circle>",
//                       "attrs": {
//                           ".port-body": {
//                               "fill": "#1F62FF",
//                               "r": 6,
//                               "stroke": "white",
//                               "stroke-width": 2,
//                               "magnet": true
//                           },
//                           ".port-label": {
//                               "font-size": 12,
//                               "fill": "#17274D"
//                           }
//                       },
//                       "position": {
//                           "name": "right"
//                       },
//                       "label": {
//                           "position": {
//                               "name": "right",
//                               "args": {
//                                   "y": 0
//                               }
//                           }
//                       }
//                   }
//               },
//               "items": [
//                   {
//                       "id": "in",
//                       "group": "in",
//                       "attrs": {
//                           ".port-label": {
//                               "text": "in"
//                           }
//                       }
//                   },
//                   {
//                       "id": "out",
//                       "group": "out",
//                       "attrs": {
//                           ".port-label": {
//                               "text": "out"
//                           }
//                       }
//                   }
//               ]
//           },
//           "inPorts": [
//               "in"
//           ],
//           "outPorts": [
//               "out"
//           ],
//           "inputPortMarkup": "<circle cx=\"152\" cy=\"141\" r=\"0\" fill=\"transparent\" class=\"member-button-circle\" magnet=\"passive\"></circle>",
//           "position": {
//               "x": 810,
//               "y": 50
//           },
//           "angle": 0,
//     "id": "6e0c9b31-3d3f-4b56-8e44-9e02519bbc45",
//           "z": 1,
//           "dynamicPorts": [
//               {
//                   "source": {
//                       "id": "6e0c9b31-3d3f-4b56-8e44-9e02519bbc45"
//                   },
//                   "target": {
//                       "id": "5f386bd0-c2f6-4fba-8abc-1b37dec993e0"
//                   }
//               }
//           ],
//           "attrs": {
//               "data": {
//                   "moduleId": 1,
//                   "isPrimary": true,
//                   "moduleName": "contact",
//                   "level": 1
//               }
//           }
//       }
//   ],'UTF8')::string);



//   [
//     {
//       id: 1,
//       name: "xd"
//     },
//     {
//       id:2,
//       name: 'sdsd'
//     },
//     {
//       id:3,
//       name: 'sd23sd'
//     }
//   ]
//     {
//     {
//       id: 1,
//       name: "xd"
//     },
//     {
//       id:2,
//       name: 'sdsd'
//     },
//     {
//       id:3,
//       name: 'sd23sd'
//     }
//     }