// =============================LECTURE=================================

// ===============LOOPTHROUGH CHECKING ARRAY ONLY========================
var loopThrough = function(array, callback){
	for(var i = 0; i < array.length; i++){
		callback(array[i]);
	}
};
// ============FILTERBY (NOT USING ANONYMOUS FUNCTION)===================

// filterBy takes an array, a predicate(just a function that returns true or false) and returns all the elements that pass the truth test
startsWithA = function(val){
	return val[0] === 'a';
};

var names = ['albrey', 'diana', 'adam', 'jeff'];

// filterBy(names, startsWithA);
// returns ['albrey', 'adam']

var filterBy = function(array, predicate){
	// create an empty array that stores the values that pass the predicate test
	var result = [];

	// collectResult function will test the predicate for each value in the array and push the value if predicate is true
	var collectResult = function(val){
		if(predicate(val)){
			result.push(val);
		}
	};
	// loop through the array
	loopThrough(array, collectResult);

	return result;
};

filterBy(names, startsWithA);

// ===FILTERBY (USING ANONYMOUS FUNCTION, CHECKING OBJECT AND ARRAYS====
var loopThrough = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
		callback(array[i], i);
	}
	else {
		for(var key in collection){
			callback(collection[key], key);
		}
	}
};

var greetings = ["hey", "whatsup", "hello", "hi"];

indexOf(arr, 5){

}

varPrintValAndIndex = function(val, index){
	console.log(val, index);
}

var arr = ["hi", "hey"];
loopThrough(arr, printValAndIndex);
// "hi", 0
// "hey", 1

/*
======================myFirstLibraryPartTwo=========================
Objective: Build out the rest of these functions without using a for loop.
*/

var obj = {course: 'Telegraph Prep+', best: true};
var arr = [1, 2, 3, 4, 5];
var print = function(val){
	console.log(val);
};

// loopThrough takes a collection (array, or object), and a callback, invokes the callback function on each element in the collection
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

Import (copy and paste) your filterBy and copyBy functions and invoke them with callbacks that make sense to be used on objects.

*/
var containsValue = function(collection, value){
	/*
	
	containsValue takes a collection and a target value, checks the collection for the value and returns true or false if it exists.
	

	EXAMPLE:

	var obj = {course: 'Telegraph Prep+', best: true};

	var arr = [1, 2, 3, 4, 5];



	containsValue(arr, 5) --> true;
	containsValue(arr, 9) --> false;
	containsValue(obj, 'Telegraph Prep+') --> true;

	*/
};

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


