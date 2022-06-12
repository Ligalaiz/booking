import { requestDataMock } from './requestData.mock';

const requestApiMock = (status) => {
  if (status === 200) {
    return Promise.resolve({
      status,
      json: () => Promise.resolve(requestDataMock),
    });
  }
  return Promise.resolve({
    status,
    json: () => Promise.resolve(requestDataMock),
  });
};

export { requestApiMock };
