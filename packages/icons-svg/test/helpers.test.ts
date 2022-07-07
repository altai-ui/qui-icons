import { IdentifierMeta, getIdentifier } from '../utils';

describe('getIdentifier', () => {
  const examples: IdentifierMeta[] = [
    { name: 'smile', themeSuffix: 'Filled' },
    { name: 'heskey-baozi-furry', themeSuffix: 'Outlined' },
    { name: 'I-should-be-converted', themeSuffix: void 0 },
    { name: 'I-should-be-converted', themeSuffix: '' as any },
    { name: `__test_what's that??`, themeSuffix: 'Filled' }
  ];
  it('should computed identifiers correctly.', () => {
    expect(examples.map(meta => getIdentifier(meta))).toStrictEqual([
      'SmileFilled',
      'HeskeyBaoziFurryOutlined',
      'IShouldBeConverted',
      'IShouldBeConverted',
      'TestWhatsThatFilled'
    ]);
  });
});
