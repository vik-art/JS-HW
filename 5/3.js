class Storage {
  constructor(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(item);
    }
  }
  getItems() {
    this.items.push();
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
    return this.items;
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > 0) {
      this.items.splice(index, 1);
    }
  }
}
console.log(typeof Storage);
// 'function'*/

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */

storage.removeItem('Пролонгер');
console.log(storage.removeItem());
/* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
