export function classNames(
  classes?: string,
  optionalValues?: Record<string, boolean>,
): string {
  return [
    classes ?? '',
    ...Object.entries(optionalValues ?? {})
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ].join(' ')
}
