export function resultSuccess(data) {
  return {
    data,
    code: 200,
    message: 'ok'
  }
}

export function resultError(message = '', code = 500) {
  return {
    code,
    message,
    data: null
  }
}
