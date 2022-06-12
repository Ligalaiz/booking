const renderTicketsUtils = (flights) => {
  const detailsTemplate = (details) => {
    return details
      .map((detail) => {
        let transfer = 'без пересадок';

        if (detail.stops.length === 1) transfer = '1 пересадка';
        if (detail.stops.length > 1) transfer = `${detail.stops.length} пересадки`;
        if (detail.stops.length > 4) transfer = `${detail.stops.length} пересадок`;

        return `
        <div class="flight__details details">
          <div class="detail">
            <div class="details__item details__right">
              <div class="details__city">
                <p class="details__title">${detail.points}</p>
              </div>
              <div class="details__time">
                <p class="details__desc">${detail.range}</p>
              </div>
            </div>
            <div class="details__item details__middle">
              <p class="details__title">В пути</p>
              <div class="details__duration">
                <p class="details__desc">${detail.duration}</p>
              </div>
            </div>
            <div class="details__item details__left">
              <div class="details__transfer">
                <p class="details__title">${transfer}</p>
                <div class="details__transfer--place">
                  <p class="details__desc details__place">${detail.stops.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join('');
  };

  const flightTemplate = (flight) => `
      <div class="flight">
        <div class="flight__title">
          <p class="flight__price">${flight.price} Р</p>
          <div class="flight__company">
            <img class="flight__img" src="http://pics.avs.io/99/36/${flight.carrier}.png" alt="${flight.carrier}" />
          </div>
        </div>
        ${detailsTemplate(flight.segments)}
      </div>`;

  return flights
    .map((flight) => {
      return flightTemplate(flight);
    })
    .join('');
};

export { renderTicketsUtils };
