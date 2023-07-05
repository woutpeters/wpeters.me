export function makeFirstCharUpper(val: string) {
  if (val === '') return val
  const firstChar = val.at(0)?.toLocaleUpperCase() || ''
  const otherChar = val.slice(1)
  return firstChar + otherChar
}

export function formatDate(string: string) {
  const options: Object = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(string).toLocaleDateString('nl-NL', options)
  return date
}
