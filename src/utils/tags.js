const tagType = ['', 'success', 'info', 'warning', 'danger']

function* genTag() {
  for (let i = 0; ; i++) yield tagType[i % tagType.length]
}

let generator = genTag()

// for (let val of generator) {
//   console.log(val);
// }

console.log(generator.next().value)
