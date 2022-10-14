//// [isArrayConformance2.ts]
function fa(a: [number, ...string[]] | readonly [boolean, boolean] | null) {
	if (Array.isArray(a)) {
		a; // Expected: [number, ...string[]] | readonly [boolean, boolean]
	}
}

function fb<T extends [number, ...string[]] | readonly [boolean, boolean] | null>(a: T) {
	if (Array.isArray(a)) {
		var b: [number, ...string[]] | readonly [boolean, boolean] = a; // OK
		a[0]; // Expected: number | boolean
	}
}

function fc<T, P extends keyof T>(obj: T, prop: P) {
	const value = obj[prop];
	if (Array.isArray(value)) {
		value.length; // OK
	}
}

function fd(value: Record<string, unknown>) {
	if (Array.isArray(value)) {
		value.length; // OK
	}
}

function fe<T>(data: T) {
	if (Array.isArray(data)) {
		for (const key in data) { // OK
			const value = data[key];
			if (Array.isArray(value)) {
				value.length; // OK
			}
		}
	}
}

function ff<T extends any>(a: T | T[]): T[] {
	return Array.isArray(a) ? a : [a]; // OK
}

function fg<T extends any>(arr1: T[], arr2: T[]) {
	for (let i = 0; i < arr1.length && i < arr2.length; i++) {
		const item1 = arr1[i];
		const item2 = arr2[i];
		if (Array.isArray(item1) && Array.isArray(item2)) {
			fg(item1, item2); // OK
		}
	}
}

function fh(...args: [] | [attributes: ({ $: string } & Partial<Record<string, any>>) | Record<string, any>, children?: any[]] | [children: any[]]) {
	if (Array.isArray(args[0])) {
		const children: (Record<string, HTMLElement> | HTMLElement)[] = args[0]; // OK
	}
}


//// [isArrayConformance2.js]
function fa(a) {
    if (Array.isArray(a)) {
        a; // Expected: [number, ...string[]] | readonly [boolean, boolean]
    }
}
function fb(a) {
    if (Array.isArray(a)) {
        var b = a; // OK
        a[0]; // Expected: number | boolean
    }
}
function fc(obj, prop) {
    var value = obj[prop];
    if (Array.isArray(value)) {
        value.length; // OK
    }
}
function fd(value) {
    if (Array.isArray(value)) {
        value.length; // OK
    }
}
function fe(data) {
    if (Array.isArray(data)) {
        for (var key in data) { // OK
            var value = data[key];
            if (Array.isArray(value)) {
                value.length; // OK
            }
        }
    }
}
function ff(a) {
    return Array.isArray(a) ? a : [a]; // OK
}
function fg(arr1, arr2) {
    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        var item1 = arr1[i];
        var item2 = arr2[i];
        if (Array.isArray(item1) && Array.isArray(item2)) {
            fg(item1, item2); // OK
        }
    }
}
function fh() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (Array.isArray(args[0])) {
        var children = args[0]; // OK
    }
}
