var tree = {
	"info": "foo",
	"kids": {
		"Constructors": {
			"info": "bar",
			"kids": {
				"Array": {
					"info": "blah",
					"kids": {
						".isArray()": {
							"info": "Returns <code>true</code> if <var>obj</var> is an array, <code>false</code> if it's not.",
							"args": [{
								"name": "obj",
								"desc": "Object to be checked.",
								"type": "*"
							}],
							"returns": "Boolean",
							"unsupported": []
						},
						"#length": {
							"info": "Reflects the length of an array.",
							"returns": "Number"
						},
						"#pop()": {
							"info": "Removes the last element from an array and returns it.",
							"args": [],
							"returns": "*"
						},
						"#push()": {
							"info": "Adds <var>element</var>(s) the end of an array and returns the new length.",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the end of the array.",
								"type": "*",
								"unlimited": true
							}],
							"returns": "Number"
						},
						"#reverse()": {
							"info": "Reverses an array and returns a reference to it.",
							"args": [],
							"returns": "Array"
						},
						"#shift()": {
							"info": "Removes the first element from an array and returns it.",
							"args": [],
							"returns": "*"
						},
						"#sort()": {
							"info": "Sorts an array and returns a reference to it. If <var>compare</var> is not supplied, sorts in lexographic order.",
							"args": [{
								"name": "compare",
								"desc": "Function to sort the elements by. Sorts <var>a</var> to a lower index than <var>b</var> if the return value is less than 0, higher if it's more than 0, and keeps them the same if it's exactly 0.",
								"type": "Function",
								"args": [{ "name": "a", "type": "*" }, { "name": "b", "type": "*" }],
								"optional": true
							}],
							"returns": "Array"
						},
						"#splice()": {
							"info": "Adds and/or removes <var>element</var>(s) from an array, and returns the removed <var>element</var>(s).",
							"args": [{
								"name": "index",
								"desc": "Index at which to start changing the array. If negative, will begin that many elements from the end.",
								"type": "Number"
							}, {
								"name": "count",
								"desc": "Number of array elements to remove.",
								"type": "Number"
							}, {
								"name": "element",
								"desc": "Element(s) to add to the array.",
								"type": "*",
								"optional": true,
								"unlimited": true
							}],
							"returns": "Array"
						},
						"#unshift()": {
							"info": "Adds <var>element</var>(s) to the beginning of an array and returns the new length.",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the beginning of the array.",
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