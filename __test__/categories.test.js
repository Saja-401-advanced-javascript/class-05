

require('@code-fellows/supergoose');

const Categories = require('../categories/categories.js');

const category = new Categories();

describe(' Categories Testing ', () => {

  it(' can get() any category ', () => {
    let newRec = { name: 'test category' };

    return category.create(newRec)
      .then(record => {
        return category.get(record._id)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });


  it(' can create() A new category ', () => {
    let newRec = { name: 'test category' };
    return category.create(newRec)
      .then(record => {
        Object.keys(newRec).forEach(key => {
          expect(record[key]).toEqual(newRec[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it(' can update() A category ', () => {
    let newRec = { name: 'test category' };
    return category.create(newRec)
      .then(record => {
        return category.update(record._id, record)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });

  it(' can Delete() A category ', () => {
    let newRec = { name: 'test category' };
    return category.create(newRec)
      .then(record => {
        return category.delete(record._id, record)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });

});