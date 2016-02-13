// =============================LECTURE=================================

// ===============LOOPTHROUGH CHECKING ARRAYS ONLY========================
var loopThrough = function(array, callback){
	for(var i = 0; i < array.length; i++){
		callback(array[i]);
	}
};
// =======FILTERBY NOT USING ANONYMOUS FUNCTION, ARRAYS ONLY===========

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

// ===FILTERBY USING ANONYMOUS FUNCTION, CHECKING OBJECT AND ARRAYS====
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

var PrintValAndIndex = function(val, index){
	console.log(val, index);
}

var arr = ["hi", "hey"];
loopThrough(arr, printValAndIndex);
// "hi", 0
// "hey", 1
