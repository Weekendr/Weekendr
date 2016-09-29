 +  var str
 +
 +function isNumber(elem) {
 +  return ((parseInt(elem[0]) / 1) === parseInt(elem[0]))
 +}
 +
 +function hasSuggested(str) {
 +  if (str === undefined) return ''
 +  if (str.indexOf('Suggested') !== -1) {
 +    return true
 +  } else {
 +    return false
 +  }
 +}
 +
 +function parseSuggested(str) {
 +return str.slice(21).split(', ')
 +}
 +
 +function convertStrToJSON(str) {
 +  return str.split('\n').filter((elem) => {
 +    return (typeof elem === 'string' && elem !== '')
 +  }).reduce((a,b,i, arr) => {
 +  if (isNumber(b)) {
 +  var suggested = (hasSuggested(arr[i+1]) ? parseSuggested(arr[i+1]) : ['US'])
 +  a.push({
 +    id: b,
 +    name: arr[i-1],
 +    suggest: suggested
 +  })
 +  }
 +  return a
 +}, [])
 +}
 +
 +var json = convertStrToJSON(str)
 +module.exports = json
