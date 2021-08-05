enum resultVariable {
  IS_NUMBER,
  IS_STRING,
}

function combine(
  n1: number | string,
  n2: number | string,
  resultVariableType: number
) {
  let result;

  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultVariableType === resultVariable.IS_NUMBER) {
    return result;
  }
}

console.log(combine(255, 'adedire', resultVariable.IS_STRING));

enum Role {
  ADMIN,
  USER,
  GUEST,
}

const person = {
  name: 'Adedire',
  age: 20,
  hobbies: ['cooking', 'sleeping', 1, true],
  role: Role.ADMIN,
};

console.log(person.role);

console.log(parseFloat('44'));

type Ade = string;
const Ade: Ade = 'gbolahan';

type StringOrNumber = string | number;

let myMame: StringOrNumber = 'Adedire';

myMame = 4;

type Points = {
  x: number;
  y: number;
  z?: number;
};

function printCordinate(p: Points) {
  console.log('x cordinate', p.x);
  console.log('y cordinate', p.y);
}

printCordinate({ x: 2, y: 7 });

function sayHello(name: string | null) {
  console.log('hello' + name!.toLocaleLowerCase());
}

sayHello('adedire');

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) return values;
  return values.map((v) => v * factor);
}
const x: number | string = Math.random() < 0.5 ? 10 : 'hello world!';

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

const addup = firstElement([2]);

function impossibleTypeGuard(value: any) {
  if (typeof value === 'string' && typeof value === 'number') {
    return value;
  }
}

// Describable function

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

function describableFunction() {
  return true;
}

describableFunction.description = 'hello world';

doSomething(describableFunction);

// Generics
function firstElement1(arr: any[]) {
  return arr[0];
}

firstElement1([1, 3, 4, 'b']);

function firstElement2<Type>(arr: Type[]): Type {
  return arr[0];
}

firstElement2(['d', 1, 2, 3, 'b']);

const arrayOfStringAndNumbers: Array<string | number> = [3, 5, 'f'];

arrayOfStringAndNumbers[0].toString().split('');

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: 'Michael' }, { age: 30 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let description = 'Element has no value';

  if (element.length === 1) {
    description = 'Element has just 1 value';
  }

  if (element.length > 1) {
    description = 'Element has more than 1 values';
  }

  return [element, description];
};

console.log(countAndDescribe([3]));

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

extractAndConvert({ age: 3 }, 'age');

class ItemsStore<T extends string | number | boolean> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(item: T) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getItems() {
    return [...this.items];
  }
}

const stringStore = new ItemsStore<string>();
stringStore.addItem('this is a text');
stringStore.addItem('this is another text');
stringStore.addItem('991');

console.log('text store', stringStore.getItems());

// const objectStore = new ItemsStore<object>();

// objectStore.addItem({ name: 'Yinka' });
// objectStore.addItem({ name: 'Ace' });
// objectStore.removeItem({ name: 'Yinka' });

// console.log(objectStore.getItems());

const threes: 3[] = [];

threes.push(3);

// Classes

class Department {
  constructor(
    private readonly id: string,
    public name: string,
    private employees: string[] = []
  ) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  getInfo(this: Department) {
    console.log(
      `ID: ${this.id}. Department: ${this.name}. Employees: ${this.employees}`
    );
  }
}

const accountingDepartment = new Department('111', 'Accounting');
accountingDepartment.addEmployee('Shola');
accountingDepartment.addEmployee('Dammy');

accountingDepartment.getInfo();

// Class Inheritance

class AdminDepartment extends Department {
  constructor(id: string, private admins: string[] = []) {
    super(id, 'Admin');
  }

  getAdmins(this: AdminDepartment) {
    console.log(`Admins: ${this.admins}`);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }
}

const adminDepartment = new AdminDepartment('777');
adminDepartment.addEmployee('Yomi Fash');
adminDepartment.getInfo();
adminDepartment.addAdmin('Ace');
adminDepartment.addAdmin('Yinka');
adminDepartment.getAdmins();

// Interfaces
// interface defines the structure of an object

interface Person {
  name: string;
  age: number;
  height?: number;
  hobbies: string[];
  greet?(greeting: string): void;
}

const Ace: Person = {
  name: 'Ace Abubakar',
  age: 95,
  hobbies: ['joking around'],
  greet(greeting: string) {
    console.log(greeting);
  },
};

interface AddTwoNumbers {
  (n1: number, n2: number): number;
}

const addTwoNumbers: AddTwoNumbers = (n1, n2) => {
  return n1 + n2;
};

addTwoNumbers(4, 5);
