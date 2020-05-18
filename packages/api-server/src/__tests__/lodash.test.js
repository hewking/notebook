// import {
//   merge
// } from 'lodash';

const _ = require('lodash');

var arr1 = [
  {"member":"3"}
  ,{
    "member": "57989cbe54cf5d2ce83ff9d6",
    "bank": "575b052ca6f66a5732749ecc",
    "country": "575b0523a6f66a5732749ecb",
    "age": 1,
  },
  {
    "member": ("57989cbe54cf5d2ce83ff9d8"),
    "bank": ("575b052ca6f66a5732749ecc"),
    "country": ("575b0523a6f66a5732749ecb")
  }
];

var arr2 = [{
    "member": ("57989cbe54cf5d2ce83ff9d6"),
    "name": 'xxxxxx',
    "counrty": "china",
    "age": 25
  },
  {
    "member": ("57989cbe54cf5d2ce83ff9d8"),
    "name": 'yyyyyyyyyy',
    "age": 26
  },{
    "member":"aaa",
  }
];

// var merge = _.merge(arr1, arr2);
// var merge = _.map(arr1, function(item) {
//   return _.merge(item, _.find(arr2, { 'member' : item.member }));
// });

function merge(a, b, filter) {
  const reduced = a.filter((aitem) => !b.find((bitem) => filter(aitem, bitem)));
  return reduced.concat(b);
}

var result = merge(arr1,arr2,(a,b)=> {
  return a.member === b.member;
})

console.log('result',result);
