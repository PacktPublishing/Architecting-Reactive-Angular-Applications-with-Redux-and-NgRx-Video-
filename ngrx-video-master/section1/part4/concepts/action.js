// action 

const action = { type: 'CREATE_ITEM', payload: 'new item' };

// action creator

const create = (item) => ({ type: 'CREATE_ITEM', payload: item });

create('item1');
create('item2');
create('item3');
create('item4');