export const required = (value) => {
  if(value) return undefined
  return 'обязательно для заполнения'
}

export const maxLengthCreator = (maxLength) => (value) => {
  if(value.length > maxLength) return `превышена длина в ${maxLength} символов`
  return undefined
}