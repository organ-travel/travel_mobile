let host = ''
let debug = true
let mockHost = ''

if (window.location.host == '') {
  host = ''
  mockHost = ''
} else if (window.location.host == '') {
  host = ''
  mockHost = ''
  debug = false
} else {
  host = ''
  mockHost = ''
}

export default {
  host,
  mockHost,
  debug
}
