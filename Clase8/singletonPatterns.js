class DataBase {
  constructor(data) {
    if (DataBase.exists) {
      return DataBase.instance;
    }
    this._data = data;
    DataBase.instance = this;
    DataBase.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

const mysql = new DataBase("mysql");
console.log(mysql.getData());
console.log(mysql.setData());

const mongo = new DataBase("mongo");
console.log(mongo.getData());
