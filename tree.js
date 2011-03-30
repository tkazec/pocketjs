var tree = {
	"desc": "foo",
	"kids": {
		"Constructors": {
			"desc": "bar",
			"kids": {
				"Array()": {
					"desc": "blah",
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
				},
				"Boolean": {},
				"Date": {},
				"Function": {},
				"Number": {},
				"Object": {},
				"RegExp": {},
				"String": {}
			}
		},
		"Errors": {},
		"Functions": {},
		"Other": {}
	}
};