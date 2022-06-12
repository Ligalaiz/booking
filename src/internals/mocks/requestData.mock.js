const requestDataMock = [
  {
    price: 15529,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-10-22T09:59:00.000Z',
        stops: ['HKG'],
        duration: 1072,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-11-11T07:10:00.000Z',
        stops: ['HKG'],
        duration: 1190,
      },
    ],
  },
];

const requestErrorMock = {
  error: 'Failed to fetch',
};
export { requestDataMock, requestErrorMock };
