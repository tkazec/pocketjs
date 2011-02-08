var tree = {
	"info": "foo",
	"kids": {
		"Constructors": {
			"info": "bar",
			"kids": {
				"Array": {
					"info": "blah",
					"kids": {
						"#pop()": {
							"info": "Removes the last element from an array and returns it.",
							"args": [],
							"returns": "*",
							"mdc": "Global_Objects/Array/pop"
						},
						"#push()": {
							"info": "Adds element(s) the end of an array and returns the new length.",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the end of the array.",
								"type": "*",
								"unlimited": true
							}],
							"returns": "Number",
							"mdc": "Global_Objects/Array/push"
						},
						"#reverse()": {
							"info": "Reverses an array and returns a reference to it.",
							"args": [],
							"returns": "Array",
							"mdc": "Global_Objects/Array/reverse"
						},
						"#shift()": {
							"info": "Removes the first element from an array and returns it.",
							"args": [],
							"returns": "*",
							"mdc": "Global_Objects/Array/shift"
						},
						"#sort()": {
							"info": "Sorts an array and returns a reference to it. If compare is not supplied, sorts in lexographic order.",
							"args": [{
								"name": "compare",
								"desc": "Function to sort the elements by. Sorts a lower than b if the return value is less than 0, higher if it's more than 0, and the same if it's 0.",
								"type": "Function",
								"args": [{ "name": "a", "type": "*" }, { "name": "b", "type": "*" }],
								"optional": true
							}],
							"returns": "Array",
							"mdc": "Global_Objects/Array/sort"
						},
						"#splice()": {
							"info": "Adds and/or removes elements from an array, and returns the removed elements.",
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
							"returns": "Array",
							"mdc": "Global_Objects/Array/splice"
						},
						"#unshift()": {
							"info": "Adds element(s) to the beginning of an array and returns the new length.",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the beginning of the array.",
								"type": "*",
								"unlimited": true
							}],
							"returns": "Number",
							"mdc": "Global_Objects/Array/unshift"
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