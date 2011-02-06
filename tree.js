var tree = {
	"info": "foo",
	"kids": {
		"Constructors": {
			"info": "bar",
			"kids": {
				"Array": {
					"info": "blah",
					"kids": {
						"pop()": {
							"long": "Array#pop()",
							"info": "Removes the last element from an array and returns it.",
							"type": "Function",
							"args": [],
							"returns": "*",
							"support": "*",
							"mdc": "Global_Objects/Array/pop"
						},
						"push()": {
							"long": "Array#push()",
							"info": "Adds element(s) the end of an array and returns the new length.",
							"type": "Function",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the end of the array.",
								"type": "*",
								"unlimited": true
							}],
							"returns": "Number",
							"support": "*",
							"mdc": "Global_Objects/Array/push"
						},
						"reverse()": {
							"long": "Array#reverse()",
							"info": "Reverses an array and returns a reference to it.",
							"type": "Function",
							"args": [],
							"returns": "Array",
							"support": "*",
							"mdc": "Global_Objects/Array/reverse"
						},
						"shift()": {
							"long": "Array#shift()",
							"info": "Removes the first element from an array and returns it.",
							"type": "Function",
							"args": [],
							"returns": "*",
							"support": "*",
							"mdc": "Global_Objects/Array/shift"
						},
						"sort()": {
							"long": "Array#sort()",
							"info": "Sorts an array and returns a reference to it.",
							"type": "Function",
							"args": [{
								"name": "compare",
								"desc": "",
								"type": "Function",
								"args": [{ "name": "a", "type": "*" }, { "name": "b", "type": "*" }]
								"optional": true
							}],
							"returns": "Array",
							"support": "*",
							"mdc": "Global_Objects/Array/sort"
						},
						"splice()": {
							"long": "Array#splice()",
							"info": "Adds and/or removes elements from an array, and returns the removed elements.",
							"type": "Function",
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
							"support": "*",
							"mdc": "Global_Objects/Array/splice"
						},
						"unshift()": {
							"long": "Array#unshift()",
							"info": "Adds element(s) to the beginning of an array and returns the new length.",
							"type": "Function",
							"args": [{
								"name": "element",
								"desc": "Element(s) to add to the beginning of the array.",
								"type": "*",
								"unlimited": true
							}],
							"returns": "Number",
							"support": "*",
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