import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2'
    )
  })

  test('with mods true', () => {
    expect(
      classNames('someClass', { hoverable: true, scrollable: true }, ['class'])
    ).toBe('someClass class hoverable scrollable')
  })

  test('with mods false', () => {
    expect(
      classNames('someClass', { hoverable: true, scrollable: false }, ['class'])
    ).toBe('someClass class hoverable')
  })

  test('with mods undefined', () => {
    expect(classNames('someClass', { hoverable: undefined }, ['class'])).toBe(
      'someClass class'
    )
  })
})
