const test = (fn, enableJournaling = false) => {
  
  const testParams = [undefined, null, NaN, Infinity, -Infinity, 0, 10, -10, 1e100, -1e100, 
                      '', '10', '10qwe', 'qwe10', true, false, () => 1, {}, {'1': 1}, [],
                      [1, 2, 3], ['a', 'b', 'c'], '\t', '\n']
  let errorCounter = 0
  
  const testFn = param => {
    try {
      if (enableJournaling) {
        console.log(param, fn(param))
      } else {
        fn(param)
      }
    } catch(e) {
      errorCounter++
      console.log(errorCounter, param, e.toString())
    }
  }
  
  console.log(`${fn.name}: `)
  
  testParams.forEach(elemet => testFn(elemet))
  
  if (errorCounter === 0) {
    console.log(`\tОшибок нет\n\tТест пройден!\n`)
  } else {
    console.log(`\tТест не пройден!\n\tКол-во ошибок:${errorCounter}\n`)
  }
  
}
