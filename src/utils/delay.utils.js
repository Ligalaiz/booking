const delay = (response, ms) => {
  return new Promise((res) => {
    setTimeout(() => res(response()), ms);
  });
};

export { delay };
