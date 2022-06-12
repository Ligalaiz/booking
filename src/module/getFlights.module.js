import { delay } from '@src/utils';

const loadSearchRequest = async (url, n) => {
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('tickets request failed');
    }

    const result = await delay(() => response.json(), 0);

    return result;
  } catch (err) {
    if (n <= 1) return err.message;
    await delay(() => {}, 1000);
    return loadSearchRequest(url, n - 1);
  }
};

export { loadSearchRequest };
