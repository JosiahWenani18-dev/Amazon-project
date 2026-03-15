import formatCurreny from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurreny(2095)).toEqual('20.95');
  });

  it('works with zero', () => {
    expect(formatCurreny(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cents', () => {
    expect(formatCurreny(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cents', () => {
    expect(formatCurreny(2000.4)).toEqual('20.00');
  });
});