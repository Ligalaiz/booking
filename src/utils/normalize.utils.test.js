import { normalize } from './normalize.utils';
import { requestDataMock, resultData } from '@src/internals/mocks';

describe('Normalize data', () => {
  it('normalize check normalize request data', () => {
    const res = normalize(requestDataMock);

    expect(res).toEqual(resultData);
  });
});
