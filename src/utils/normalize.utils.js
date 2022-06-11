const normalize = (flights) => {
  return flights.map((flight) => {
    const segments = flight.segments.map((segment) => {
      const dateArrive = new Date(segment.date);
      const hoursArrive = dateArrive.getHours();
      const minuteArrive = dateArrive.getMinutes();

      const dateDep = new Date(+dateArrive + segment.duration * 60 * 1000);
      const hoursDep = dateDep.getHours();
      const minuteDep = dateDep.getMinutes();

      const addZero = (val) => (val < 10 ? `0${val}` : val);

      const range = `${addZero(hoursArrive)}:${addZero(minuteArrive)} - ${addZero(hoursDep)}:${addZero(minuteDep)}`;
      const duration = `${addZero(Math.trunc(segment.duration / 60))}ч:${addZero(segment.duration % 60)}м`;

      return {
        points: `${segment.origin} - ${segment.destination}`,
        range,
        duration,
        stops: segment.stops,
        time: segment.duration,
      };
    });

    let price = `${flight.price}`;
    if (price.length >= 4) price = `${price.slice(0, -3)} ${price.slice(-3)}`;

    const fast = Math.min(...segments.map((item) => item.time));
    const stops = segments.map((item) => item.stops.length);

    return {
      price,
      fast,
      stops,
      carrier: flight.carrier,
      segments,
    };
  });
};

export { normalize };
