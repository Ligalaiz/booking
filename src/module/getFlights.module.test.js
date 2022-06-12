import { loadSearchRequest } from './getFlights.module';
import { requestApiMock } from '@src/internals/mocks';

describe('Request works', () => {
  const originalFetch = window.fetch;

  beforeAll(() => {
    window.fetch = () => requestApiMock(200);
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  it('request check request sending', async () => {
    const res = await loadSearchRequest('test', 1);

    expect(Array.isArray(res)).toEqual(true);
    expect(res).toHaveLength(1);
  });
});

describe('Request failed', () => {
  const originalFetch = window.fetch;

  beforeAll(() => {
    window.fetch = () => requestApiMock(400);
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  it('request check request failed', async () => {
    const res = await loadSearchRequest('test', 1);

    expect(res).toEqual('tickets request failed');
  });
});
