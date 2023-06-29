const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      collection.forEach(element => callback(element));
    } else if (typeof collection === 'object' ) {
      Object.values(collection).forEach(value => callback(value));
    }   
    return collection;
  }

function myMap(collection, callback ){
  let modifiedCollection
  if(Array.isArray(collection)){
        modifiedCollection = collection.map((element)=>{
          return callback(element)
      })
  }else if(typeof (collection) === 'object'){
    console.log(Object.values(collection));
        modifiedCollection = Object.values(collection).map((value)=>{
          return callback(value)
      })
  }
  
  return modifiedCollection
}

// const testArr = unmodifiedTestArr.slice() // arr is [1, 2, 3, 4]
// const testObj = Object.assign({}, unmodifiedTestObj) // obj is {one: 1, two: 2, three: 3, four: 4}
// const callback = (acc, val, collection) => (acc + (val * 3))
// const reduceWithAcc = myReduce(testObj, callback)
// console.log(reduceWithAcc);

function myReduce(collection, callback, acc=0){
  if (Array.isArray(collection)) {
    return  collection.reduce((accumulator, value)=>{
   return callback(accumulator, value, collection )
  }, acc)
  }else if(typeof(collection) === 'object'){
    let myObjectValues = Object.values(collection)
    console.log(myObjectValues);
    return myObjectValues.reduce((accumulator, value)=>{
      return callback(accumulator,value,collection)
    },acc)

  }
}

function myFind(collection, predicate){
  return collection.find((item)=>{
    return predicate(item)
  })
}

function myFilter(collection, predicate){
  let foundItems = []
  if(Array.isArray(collection)){
     foundItems =  collection.filter(item => {
    return predicate(item)
  })
  }else if(typeof collection === 'object'){
    let myValuesArray =  Object.values(collection)
    foundItems = myValuesArray.filter(item => {
     return predicate(item)
    })

  }
 
  if (foundItems.length === 0){
    return []
  }else {
    return foundItems
  }
}

function mySize(collection){
  if(Array.isArray(collection)){
    return collection.length
  }else if(typeof collection === 'object'){
    return Object.values(collection).length
  }

}

function myFirst(array, n=1){
  let myNewArray = []
  if(n<=1){
    return array[0]
  }else if(n>1){
    for(let i = 0; i<n; i++){
      myNewArray.push(array[i])
    } 
    return myNewArray
  }
   
  
}// console.log(myFirst([5, 4, 3, 2, 1],3));

function myLast(array, n=1){
  //let myNewArray = []
  if(n==1){
    return array[array.length-1]
  }else {
    return array.slice(-n)
  }

}console.log(myLast([5, 4, 3, 2, 1],3));

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
  return Object.values(object)
}