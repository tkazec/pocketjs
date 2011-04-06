var tree = {
	"desc": "<p>PocketJS is a friendly JavaScript reference. &lt;3</p>",
	"kids": {
		"Math": {
			"desc": "Various mathematical constants and functions.",
			"returns": "Object",
			"kids": {
				".E": {
					"desc": "The mathematical constant <var>e</var>.",
					"returns": "Number",
					"readonly": true
				},
				".LN2": {
					"desc": "The natural logarithm of 2.",
					"returns": "Number",
					"readonly": true
				},
				".LN10": {
					"desc": "The natural logarithm of 10.",
					"returns": "Number",
					"readonly": true
				},
				".LOG2E": {
					"desc": "The base 2 logarithm of <var>e</var>.",
					"returns": "Number",
					"readonly": true
				},
				".LOG10E": {
					"desc": "The base 10 logarithm of <var>e</var>.",
					"returns": "Number",
					"readonly": true
				},
				".PI": {
					"desc": "The mathematical constant π.",
					"returns": "Number",
					"readonly": true
				},
				".SQRT1_2": {
					"desc": "The square root of 1/2.",
					"returns": "Number",
					"readonly": true
				},
				".SQRT2": {
					"desc": "The square root of 2.",
					"returns": "Number",
					"readonly": true
				},
				".abs()": {
					"desc": "Returns the absolute value of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".acos()": {
					"desc": "Returns the arccosine of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use (between <code>-1</code> and <code>1</code>).",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".asin()": {
					"desc": "Returns the arcsine of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use (between <code>-1</code> and <code>1</code>).",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".atan()": {
					"desc": "Returns the arctangent of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".atan2()": {
					"desc": "",
					"args": [],
					"returns": "Number"
				},
				".ceil()": {
					"desc": "Returns <var>x</var> rounded up to the nearest whole number.",
					"args": [{
						"name": "x",
						"desc": "Number to round up.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".cos()": {
					"desc": "Returns the cosine of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".exp()": {
					"desc": "Returns the mathematical constant <var>e</var> to the power of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".floor()": {
					"desc": "Returns <var>x</var> rounded down to the nearest whole number.",
					"args": [{
						"name": "x",
						"desc": "Number to round down.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".log()": {
					"desc": "Returns the natural logarithm of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Non-negative number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".max()": {
					"desc": "Returns the largest <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number",
						"optional": true,
						"default": "-Infinity",
						"unlimited": true
					}],
					"returns": "Number"
				},
				".min()": {
					"desc": "Returns the smallest <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number",
						"optional": true,
						"default": "Infinity",
						"unlimited": true
					}],
					"returns": "Number"
				},
				".pow()": {
					"desc": "Returns <var>a</var> raised to the power of <var>n</var>.",
					"args": [{
						"name": "a",
						"desc": "The base.",
						"type": "Number"
					}, {
						"name": "n",
						"desc": "The exponent.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".random()": {
					"desc": "Returns a pseudo-random number between <code>0</code> (inclusive) and <code>1</code> (exclusive).",
					"args": [],
					"returns": "Number"
				},
				".round()": {
					"desc": "Returns <var>x</var> rounded to the nearest whole number.",
					"args": [{
						"name": "x",
						"desc": "Number to round.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".sin()": {
					"desc": "Returns the sine of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".sqrt()": {
					"desc": "Returns the square root of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Non-negative number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				},
				".tan()": {
					"desc": "Returns the tangent of <var>x</var>.",
					"args": [{
						"name": "x",
						"desc": "Number to use.",
						"type": "Number"
					}],
					"returns": "Number"
				}
			}
		},
		"Array()": {
			"desc": "blah",
			"returns": "Array",
			"args": [],
			"kids": {
				".isArray()": {
					"desc": "Returns <code>true</code> if <var>value</var> is an array, <code>false</code> if it's not.",
					"args": [{
						"name": "value",
						"desc": "Value to be checked.",
						"type": "*"
					}],
					"returns": "Boolean",
					"unsupported": { "IE": 8, "Firefox": 3.6, "Safari": 4, "Opera": 10.1 }
				},
				"#length": {
					"desc": "Reflects the length of an array.",
					"returns": "Number"
				},
				"#concat()": {
					"desc": "Returns a new array comprised of the original array plus <var>element</var>(s).",
					"args": [{
						"name": "element",
						"desc": "Element to add to the new array. If it's an array, its elements will be added instead.",
						"type": "*",
						"unlimited": true
					}],
					"returns": "Array"
				},
				//"#every()": {},
				"#filter()": {
					"desc": "Returns a new array comprised of elements from the original array that pass a <var>test</var>.",
					"args": [{
						"name": "test",
						"desc": "Function to filter the elements by. Return <code>true</code> to include the element, or <code>false</code> to skip it.",
						"type": "Function",
						"args": { "a": "*", "b": "*" }
					}, {
						"name": "this",
						"desc": "Object to use as <var>this</var> when executing <var>test</var>.",
						"type": "Object",
						"optional": true,
						"default": "<global>"
					}],
					"returns": "Array",
					"unsupported": { "IE": 8 }
				},
				//"#forEach()": {},
				"#indexOf()": {
					"desc": "Returns the first index at which <var>element</var> can be found in an array, or <code>-1</code> if it is not present.",
					"args": [{
						"name": "value",
						"desc": "Element to locate in the array, compared using strict equality.",
						"type": "*"
					}, {
						"name": "from",
						"desc": "Index at which to start searching. If negative, indicates an offset from the end of the array.",
						"type": "Number",
						"optional": true,
						"default": 0
					}],
					"returns": "Number",
					"unsupported": { "IE": 8 }
				},
				"#join()": {
					"desc": "Returns an array's elements joined into a string.",
					"args": [{
						"name": "separator",
						"desc": "String to separate the elements with.",
						"type": "String",
						"optional": true,
						"default": ","
					}],
					"returns": "String"
				},
				"#lastIndexOf()": {
					"desc": "Returns the last index (searching backwards) at which <var>element</var> can be found in an array, or <code>-1</code> if it is not present.",
					"args": [{
						"name": "value",
						"desc": "Element to locate in the array, compared using strict equality.",
						"type": "*"
					}, {
						"name": "from",
						"desc": "Index at which to start searching backwards. If negative, indicates an offset from the end of the array.",
						"type": "Number",
						"optional": true,
						"default": -1
					}],
					"returns": "Number",
					"unsupported": { "IE": 8 }
				},
				//"#map()": {},
				"#pop()": {
					"desc": "Removes the last element from an array and returns it.",
					"args": [],
					"returns": "*"
				},
				"#push()": {
					"desc": "Adds <var>element</var>(s) the end of an array and returns the new length.",
					"args": [{
						"name": "element",
						"desc": "Element to add to the end of the array.",
						"type": "*",
						"unlimited": true
					}],
					"returns": "Number"
				},
				//"#reduce()": {},
				//"#reduceRight()": {},
				"#reverse()": {
					"desc": "Reverses an array and returns a reference to it.",
					"args": [],
					"returns": "Array"
				},
				"#shift()": {
					"desc": "Removes the first element from an array and returns it.",
					"args": [],
					"returns": "*"
				},
				"#slice()": {
					"desc": "Returns a portion of an array.",
					"args": [{
						"name": "begin",
						"desc": "Index at which to start extraction. If negative, indicates an offset from the end of the array.",
						"type": "Number"
					}, {
						"name": "end",
						"desc": "Index at which to end extraction. If negative, indicates an offset from the end of the array.",
						"type": "Number",
						"optional": true,
						"default": "Infinity"
					}],
					"returns": "Array"
				},
				//"#some()": {},
				"#sort()": {
					"desc": "Sorts an array and returns a reference to it.",
					"args": [{
						"name": "compare",
						"desc": "Function to sort the elements by. Sorts <var>a</var> to a lower index than <var>b</var> if the return value is less than 0, higher if it's more than 0, and keeps them the same if it's exactly <code>0</code>.",
						"type": "Function",
						"args": { "a": "*", "b": "*" },
						"optional": true,
						"default": "<lexographic>"
					}],
					"returns": "Array"
				},
				"#splice()": {
					"desc": "Adds and/or removes <var>element</var>(s) from an array, and returns the removed <var>element</var>(s).",
					"args": [{
						"name": "index",
						"desc": "Index at which to start changing the array. If negative, will begin that many elements from the end.",
						"type": "Number"
					}, {
						"name": "count",
						"desc": "Number of array element(s) to remove.",
						"type": "Number"
					}, {
						"name": "element",
						"desc": "Element to add to the array.",
						"type": "*",
						"optional": true,
						"unlimited": true
					}],
					"returns": "Array"
				},
				"#unshift()": {
					"desc": "Adds <var>element</var>(s) to the beginning of an array and returns the new length.",
					"args": [{
						"name": "element",
						"desc": "Element to add to the beginning of the array.",
						"type": "*",
						"unlimited": true
					}],
					"returns": "Number"
				}
			}
		}/*,
		"Boolean()": {
			"desc": "Bar"
		},
		"Date()": {},
		"Function()": {},
		"Number()": {},
		"Object()": {},
		"RegExp()": {},
		"String()": {}*/
	}
};