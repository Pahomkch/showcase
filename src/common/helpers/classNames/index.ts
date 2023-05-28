export function classNames(classes?: string, optionalValues?: Record<string, boolean>): string {
  return [
    classes ?? '',
    ...Object.entries(optionalValues ?? {}).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
  ].join(' ')
}


console.log('AE4')
console.log(classNames());
console.log(classNames('hello classnames'));
console.log(classNames('1', {'2': true}));
console.log(classNames('4', {'5': false}));
console.log(classNames('70', {'80': false, '90': true}));
