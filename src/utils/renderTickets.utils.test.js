import { resultData, renderTicket } from '@src/internals/mocks';
import { renderTicketsUtils } from './renderTickets.utils';

describe('Render Tickets utils', () => {
  it('renderTicketsUtils check render ticket template', () => {
    const res = renderTicketsUtils(resultData);

    expect(res).toEqual(renderTicket);
  });
});
