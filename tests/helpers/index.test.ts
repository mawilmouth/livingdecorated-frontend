import * as Helpers from '../../helpers';

describe('#getField', () => {
  interface SubjectType {
    [key: string]: string | number | null;
  }

  const subject: SubjectType[] = [
    { id: 1, slug: 'slug-one' },
    { id: '2', slug: 'slug-two' },
    { id: 'three', slug: 'slug-three' }
  ];

  it('returns the id of each object', () => {
    const expected: (string | number)[] = [1, '2', 'three']
    const actual = Helpers.getField('id', subject);

    expect(expected).toEqual(actual);
  });

  it('does not return any null or undefined values', () => {
    const expected: (string | number)[] = [1, '2', 'three']
    const actual = Helpers.getField('id', [{ id: null }, ...subject]);

    expect(expected).toEqual(actual);
  });
});

describe('#trimString', () => {
  it('returns a string with the corrent amount of characters', () => {
    const expected: number = 2;
    const actual: number = Helpers.trimString('this is a test', 2).length;

    expect(expected).toEqual(actual);
  });

  it('returns a string with the corrent characters appended to it', () => {
    const expected: string = 'th...';
    const actual: string = Helpers.trimString('this is a test', 2, '...');

    expect(expected).toEqual(actual);
  });

  it('does not append if the passed length is greater than the passed string length', () => {
    const expected: string = 'this is a test';
    const actual: string = Helpers.trimString('this is a test', 50, '...');

    expect(expected).toEqual(actual);
  });
});