const { dispatch } = require('./store');
counter = 1;

class CreateView {
  constructor() {}

  save() {
    const data = this.getTextInput();
    // create action
    const action = { type: 'CREATE_ITEM', payload: { id: counter++, title: data} };
    // dispatch
    dispatch(action);
  }

  getTextInput() {
    return 'data';
    // return document.getElementById('input').value;
  }
}

const createView = new CreateView();
module.exports = createView;