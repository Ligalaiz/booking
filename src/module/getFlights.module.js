import { delay } from '@src/utils';

const loadSearchRequest = async (url) => {
  document.getElementById('tickets').innerHTML = '';
  document.getElementById('loader').classList.add('active');

  try {
    const response = await fetch(url);

    let result = await delay(response.json(), 0);

    document.getElementById('loader').classList.remove('active');
    return result;
  } catch (err) {
    console.log({ err });
    document.getElementById('loader').classList.remove('active');
  }
};

export { loadSearchRequest };
