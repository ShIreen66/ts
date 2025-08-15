// function getData(data: number | string | boolean) {
//   if (typeof data === "number") {
//     console.log(data.toFixed(2));
//   } else if (typeof data === "string") {
//     console.log(data.toUpperCase());
//   } else {
//     console.log(!data);
//   }
// }

// getData(true)

// type Male = { nobirth: () => {} };
// type Female = { birth: () => {} };

// function Human(person: Male | Female) {
//   person;
//   if ("nobirth" in person) {
//     console.log(person);
//   } else {
//     person;
//   }
// }

function valueType(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.getMinutes());
  } else {
    console.log(x.toUpperCase());
  }
}

// valueType(new Date());
valueType("hello");
