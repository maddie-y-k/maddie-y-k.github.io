// List of sentences
var _CONTENT = [ 
	"a learner.",
	"an artist.",
	"a designer.",
    "Maddie."
];

var _TEXT_COL = [
    "#eac09a",
    "eebdb6",
    "72a8a8"
];

// Array index of sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

var _TEXT_COL_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#typewriter-text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    //_ELEMENT.style.color = _TEXT_COL[_TEXT_COL_INDEX];
    //_TEXT_COL_INDEX++;
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If last item displayed end function
	if(text === _CONTENT[_CONTENT.length - 1]) {
        //clearInterval(_INTERVAL_VAL);
        return;
    }
    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		var del_timeout = setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 60);
		}, 800);
        
	}
    
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);
		_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
        setTimeout(function() {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 60);
        }, 700);
    }
}    

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);