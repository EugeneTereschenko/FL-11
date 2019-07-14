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
function executeforEach(arr, fun){
  for (let i = 0; i < arr.length; i++){
    fun(arr[i]);
  }
}
// 3
function mapArray(arr, fun){
  let result = [];
  executeforEach(arr, function(item){
    result.push(fun(item));
  })
  return result;
}
// 4
function filterArray(arr, fun){
  let result = [];
  executeforEach(arr, function(item){
    if (fun(item)){
      result.push(item);
    }
  })
  return result;
}
// 5
function showFormattedDate(inDate){
  let dateForm = inDate.toLocaleDateString('en-us', { month: 'short', day: '2-digit'});
  return 'Date:' + ' ' + dateForm + ' ' + inDate.getFullYear();
}

// 6

function canConvertToDate(inDate) {
  let dateForm = new Date(inDate);
  return !isNaN(dateForm);
}