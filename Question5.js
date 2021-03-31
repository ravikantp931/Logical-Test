/*
Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s
*/
// here we take object in arr and the name of the of obj is arrofobj.
arrofobj = [{
        id: 4,
        name: 'abc'
    },
    {
        id: 10,
        name: 'ab2'
    },
    {
        id: 5,
        name: 'abc3'
    },
    {
        id: 6,
        name: 'abc5',
    }
];

var byId = arrofobj.slice(0);
byId.sort(function(a, b) {
    return a.id - b.id;
});
console.log('by id:');
console.log(byId);