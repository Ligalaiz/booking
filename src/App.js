import './styles/index.scss';
import { renderTicketsUtils } from '@utils/renderTickets.utils';
import { loadSearchRequest } from '@src/module/getFlights.module';
import { normalize } from '@utils/normalize.utils';

window.addEventListener('load', async () => {
  const tickets = document.getElementById('tickets');
  const page = document.getElementById('page');
  const allCheckbox = document.querySelector('input[data-filter="all"]');

  let sort = 'cheap';
  const filter = new Set();

  const handleClick = (e) => {
    const { dataset } = e.target;

    if (dataset.sort === 'fast') {
      sort = 'fast';
      document.querySelector('.btn__fast').classList.add('active');
      document.querySelector('.btn__cheap').classList.remove('active');
    }

    if (dataset.sort === 'cheap') {
      sort = 'price';
      document.querySelector('.btn__fast').classList.remove('active');
      document.querySelector('.btn__cheap').classList.add('active');
    }

    if (dataset.filter) {
      const { checked } = e.target;

      if (dataset.filter === 'all' && checked) {
        [...document.querySelectorAll('input[data-filter]')].slice(1).forEach((item) => {
          item.checked = false;
        });
        filter.clear();
      }

      if (dataset.filter === 'no' && checked) {
        filter.add(0);
        allCheckbox.checked = false;
      } else if (dataset.filter === 'no' && !checked) filter.delete(0);

      if (dataset.filter === 'one' && checked) {
        filter.add(1);
        allCheckbox.checked = false;
      } else if (dataset.filter === 'one' && !checked) filter.delete(1);

      if (dataset.filter === 'two' && checked) {
        filter.add(2);
        allCheckbox.checked = false;
      } else if (dataset.filter === 'two' && !checked) filter.delete(2);

      if (dataset.filter === 'three' && checked) {
        filter.add(3);
        allCheckbox.checked = false;
      } else if (dataset.filter === 'three' && !checked) filter.delete(3);
    }
    if (dataset.sort || dataset.filter) getData();
  };

  const getData = async () => {
    document.getElementById('tickets').innerHTML = '';
    document.getElementById('loader').classList.add('active');

    const result = await loadSearchRequest('http://localhost:3001/tickets', 5);

    document.getElementById('loader').classList.remove('active');

    const normalized = await normalize(result);

    const filtred = [...normalized]
      .filter((item) => {
        if ([...filter].length === 0) return true;
        const reg = new RegExp(`[${[...filter].join('')}]`, 'g');
        return !!item.stops.join('').match(reg);
      })
      .slice(0, 5);

    const sorted = [...filtred].sort((a, b) => parseInt(a[sort], 10) - parseInt(b[sort], 10));
    const html = await renderTicketsUtils(sorted);
    if (tickets) tickets.innerHTML = html;
  };

  getData();
  page.addEventListener('click', handleClick);
});
