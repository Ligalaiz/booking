class LocalStorageMock {
  store = {};
  length = 0;
  key = (idx) => {
    const values = Object.values(this.store);
    return values[idx];
  };

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export { LocalStorageMock };
