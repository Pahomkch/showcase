import {classNames} from '../classNames'

describe('classNames helper', () => {
  it('Only one params', () => {
    const EXPECTED = 'my-class'
    expect(classNames(EXPECTED)).toBe(EXPECTED)
  })

  it('Two params', () => {
    const EXPECTED = 'default extra'
    expect(classNames('default', {extra: true})).toBe(EXPECTED)
  })

  it('False optional param', () => {
    const EXPECTED = 'default'
    expect(classNames('default', {extra: false})).toBe(EXPECTED)
  })

  it('Different value of optional params', () => {
    const EXPECTED = 'default more add-me'
    expect(
      classNames('default', {
        extra: false,
        more: true,
        'skip-me': false,
        'add-me': true,
      }),
    ).toBe(EXPECTED)
  })
})
