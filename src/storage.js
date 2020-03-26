export default class Storage {
  constructor(name = "jokes") {
    this._storageName = name;
    this._storage = window.localStorage;
  }

  getItems = () => {
    const data = JSON.parse(this._storage.getItem(this._storageName));
    try {
      if (data) {
        return data;
      } else {
        return [];
      }
    } catch (err) {
      console.error(err.message);
      return [];
    }
  };

  updateItems = itemsArr => {
    this._storage.setItem(this._storageName, JSON.stringify(itemsArr));
  };
}
