const { select, subscribe, dispatch } = require('./store');

class ListView {
  constructor() {
    // select data
    
    this.list = select(state => state.list)
    console.log('list', this.list);
    // subscribe
    subscribe(this.update.bind(this));
  }

  update() {
    console.log('updated');
    // refetch data
    this.list = select(state => state.list)
    console.log('updated list', this.list);
  }

  remove(index) {
    const action = { type: 'REMOVE_ITEM', payload: { id: index } };
    dispatch(action);
  }
}

const listView = new ListView();
module.exports = listView;