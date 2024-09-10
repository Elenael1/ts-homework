// 1
let age: number = 50;
let firstName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a:number) => {return 100 + a}

// 2

let anything:any = -20;
anything = 'Text';
anything = {};

// 3

let some: unknown;
some = 'Text';

let str:string;

// str = some as string;

if (typeof some === 'string') {
    str = some;
}


// 5

let person: [string, number] = ['Max', 21]


// 6

enum LoadingStatus {
    LOADING,
    READY
}

enum Students {
    ELENA,
    OLEG
}

console.log(LoadingStatus.LOADING)
console.log(LoadingStatus.READY)

console.log(Students.ELENA)
console.log(Students.OLEG)

