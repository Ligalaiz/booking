import { requestDataMock, resultData } from '@src/internals/mocks';
import { normalize } from './normalize.utils';

describe('Normalize data', () => {
  it('normalize check normalize request data', () => {
    const res = normalize(requestDataMock);

    expect(res).toEqual(resultData);
  });
});
