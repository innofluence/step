require('./helper');

expect("one");

Step(
	function () {
		fulfill("one");
		return true;
	},
	function() {
		assert.fail(undefined, undefined, "The next function is called on return");
	}
);

expect("two");
expect("three");

Step(
	function () {
		fulfill("two");
		this();
	},
	function() {
		fulfill("three");
	}
);