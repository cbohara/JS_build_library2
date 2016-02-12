// ============================EXERCISES=============================
// Objective: Build out the rest of these functions without using a for loop.

var obj = {course: 'Telegraph Prep+', best: true};
var arr = [1, 2, 3, 4, 5];
var print = function(val){
	console.log(val);
};


// loopThrough takes a collection (array or object), and a callback, invokes the callback function on each element in the collection
var loopThrough = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i);
		}
	}
	else {
		for(var key in collection){
			callback(collection[key], key);
		}
	}
};

// loopThrough(obj, print);
	// Telegraph Prep
	// true

// loopThrough(arr, print);
	// 1
	// 2
	// 3
	// 4
	// 5

/* Test copyBy, filterBy with Objects:
Import (copy and paste) your filterBy and copyBy functions and invoke them with callbacks that make sense to be used on objects. Continue to return with array.
*/
/*
// test object
var currentBike = {
	make: "Yamaha",
	model: "XJ"
};

// test object
var futureBike = {
	make: "Triumph",
	model: "Bonneville"
};

// return the the length of string values
var valueLength = function(val){
	return val.length;
};

var loopThrough = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i);
		}
	}
	else {
		for(var key in collection){
			callback(collection[key], key);
		}
	}
};
*/
// copyBy takes an object, and a callback, and returns a new array containing the result of the callback invoked on each object
window.copyBy = function(collection, callback){
  // new array to be returned
  var result = [];
  // utilize loopThrough function and push new values into the results array
  loopThrough(collection,function(val){result.push(callback(val));} );
  return result;
}; 

// var testCurrent = copyBy(currentBike, valueLength);
// console.log(testCurrent);
var testFuture = copyBy(futureBike, valueLength);
console.log(testFuture);


/*
// object will return false when predicate test is applied
var currentBike = {
	make: "Yamaha",
	model: "XJ",
	cc: 700
};

// object will return true when predicate test is applied
var futureBike = {
	make: "Triumph",
	model: "Bonneville",
	cc: 1200
};

// predicate test for objects
var greaterThan1000cc = function(val, key){
	if(val > 1000){
		return true;
	}
	else{
		return false;
	}
};
*/
// filterBy takes an object, and a predicate, and returns an array filled by with ONLY the objects that pass the predicates truth test
window.filterBy = function(collection, predicate){
  // new array to be returned
  var result = [];
  // utilize loopThrough function and push values that pass the predicate test into the results array
  loopThrough(collection, function(val) {
    if(predicate(val)){
      result.push(collection);
    }
  });
  return result;
};

// var testCurrent = filterBy(currentBike, greaterThan1000cc);
// console.log('testCurrent',testCurrent);
// var testFuture = filterBy(futureBike, greaterThan1000cc);
// console.log('testFuture',testFuture);
/*
var obj = {course: 'Telegraph Prep+', best: true};

var arr = [1, 2, 3, 4, 5];

var loopThrough = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i);
		}
	}
	else {
		for(var key in collection){
			callback(collection[key], key);
		}
	}
};
*/
// containsValue takes a collection and a target value, checks the collection for the value and returns true or false if it exists
var containsValue = function(collection, targetValue){
// initialize result to false
  var result = false;
  // utilize loopThrough function to loop through the collection and check to see if the target value exists within the collection
  loopThrough(collection, function(valueInCollection){
    // if any value in the array is true, return true
    // console.log('test in loop through',collection[value]);
    if(valueInCollection === targetValue){
      result = true; 
    }
  });
  // return true if the value in the collection matches the target value
  // return false if target value is not found in collection
  return result;
};

// containsValue(arr, 5);
// true
// containsValue(arr, 9);
// false
// containsValue(obj, 'Telegraph Prep+');
// true
// containsValue(obj, 'silly');
// false
/*
Expand your loopThrough function further by allowing its callback to take the collections value and current index/key.


EXAMPLE:

var obj = {name: 'Prep', cohort: '1', people: 'awesome'}

var printValAndIndex = function(val, keyOrindex){
		console.log('this is the value:', val);
		console.log('this is the corresponding index and/or key:', keyOrindex);
};

loopThrough(obj, printValAndIndex);
//this is the value: Prep
//this is the corresponding index and/or key: name

//this is the value: 1
//this is the corresponding index and/or key: cohort

//this is the value: awesome
//this is the corresponding index and/or key: people

*/

var indexOf = function(collection, targetValue){
	/*
	indexOf takes a collection and a target value. If the target value exists in the collection, return the associated key or index to the user.


	var arr = [383, 83, 38, 419, 48];
	var obj = {name: 'Albrey', sport: 'basketball', favFood: 'burritos'};

	indexOf(arr, 48) --> 4
	indexOf(obj, 'burritos') --> favFood;


	*/
};


var extendObject = function(targetObj, extenderObj){

/*
	extendObject takes a target object and extender object an extender object and adds extender's key value pairs to the target object.

	If the target and extender have the same key, overwrite the targets value with the extenders value.

	var obj1 = {name: 'Albrey', sport: 'basketball', favFood: 'burritos'};

	var obj2 = {hairColor: 'red', profession: 'teacher', name: 'Shanna'};


	extendObjectNoOverwrite(obj1, obj2);
	// {name: 'Shanna', sport: 'basketball', favFood: 'burritos', hairColor: 'red', profession: 'teacher'};



*/
};

var extendObjectNoOverWrite = function(obj1, obj2){
	/*
		extendObjectNoOverWrite is similar to extendObject, the only difference is that it does NOT overwrite values at keys that already exist.

		var obj1 = {name: 'Albrey', sport: 'basketball', favFood: 'burritos'};

		var obj2 = {hairColor: 'red', profession: 'teacher', name: 'Shanna'};


		extendObject(obj1, obj2);
		// {name: 'Albrey', sport: 'basketball', favFood: 'burritos', hairColor: 'red', profession: 'teacher'};

		// ALBREY WAS NOT OVERWRITTEN
	*/
};



// =============== EXTRA CREDIT ====================




var pluckItem = function(collection, input){
/* 
	pluckItem takes an object, and a key, and if the key exists returns the associated value. If the key doesn't exist, pluckItem returns "item was not found".
	
	var obj = {course: 'Telegraph Prep+', best: true};
		
		var arr = [1, 2, 3, 4, 5];
	

	pluckItem(obj, 'course') --> Telegraph Prep+
	pluckItem(obj, 'worst')-->'item was not found.'

*/
};

var collectKeys = function(collection){
	/*
	collectKeys takes a collection and returns an array filled with all of they keys inside of the collection.

	
	var obj = {course: 'Telegraph Prep+', best: true};

	collectKeys(obj) --> ['course', 'best'];

	*/
};

// NIGHTMARE MODE:

/*

expand your loopThrough to pass the value, index/key, AND the collection itself into its callback function.

*/
var shuffle = function(collection){
	/*
	
	shuffle takes an array and returns an array full of the values shuffled into random indexes. 
	
	var arr = [1, 2, 3, 4, 5];

	shuffle(arr) --> [2, 4, 5, 1, 3];
	*/
};


