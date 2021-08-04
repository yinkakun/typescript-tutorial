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

let myMame: string | number = 'Adedire';

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
