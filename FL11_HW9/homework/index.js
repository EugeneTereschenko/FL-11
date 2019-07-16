let inputData = [{
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];

// 0
function getNumbers(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (!isNaN(str[i])) {
      arr.push(parseInt(str[i]));
    }
  }
  return arr;
}

// 1
function findTypes() {
  let types = {};
  for (let i = 0; i < arguments.length; i++) {
    let type = typeof arguments[i];
    if (types.hasOwnProperty(type)) {
      types[type] += 1;
    } else {
      types[type] = 1;
    }
  }
  return types;
}

// 2
function executeforEach(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    fun(arr[i]);
  }
}

// 3
function mapArray(arr, fun) {
  let result = [];
  executeforEach(arr, function (item) {
    result.push(fun(item));
  })
  return result;
}

// 4
function filterArray(arr, fun) {
  let result = [];
  executeforEach(arr, function (item) {
    if (fun(item)) {
      result.push(item);
    }
  })
  return result;
}

// 5
function showFormattedDate(inDate) {
  let dateForm = inDate.toLocaleDateString('en-us', {
    month: 'short',
    day: '2-digit'
  });
  return 'Date:' + ' ' + dateForm + ' ' + inDate.getFullYear();
}

// 6
function canConvertToDate(inDate) {
  let dateForm = new Date(inDate);
  return !isNaN(dateForm);
}

// 7
function daysBetween(inDateOne, inDateTwo) {
  let date1 = new Date(inDateOne);
  let date2 = new Date(inDateTwo);
  let diffTime = date2 - date1;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// 8
function getAmountOfAdultPeople(inputData) {
  let years = 18;
  let days = 365;
  let adults = years * days;
  return filterArray(inputData, function (item) {
    return daysBetween(new Date(item.birthday), new Date()) > adults;
  });
}

// 9
function keys(obj) {
  const keys = [];
  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      keys.push(val);
    }
  }
  return keys;
}

// 10
function values(obj) {
  let values = [];
  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      values.push(obj[val]);
    }
  }
  return values;
}