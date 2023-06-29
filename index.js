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

}

function myFirst(array, [n]){


   
}

function myLast(array, [n]){

}