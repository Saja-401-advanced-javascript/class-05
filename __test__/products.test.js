

require('@code-fellows/supergoose');

const Products = require('../products/products.js');

const product = new Products();

describe(' Categories Testing ', () => {

  it(' can get() any product ', () => {
    let newRec = { price: 14, weight: 47, quantity_in_stock: 10 };

    return product.create(newRec)
      .then(record => {
        return product.get(record._id)
          .then(proItem => {
            Object.keys(newRec).forEach(key => {
              expect(proItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });


  it(' can create() A new product ', () => {
    let newRec = { price: 14, weight: 47, quantity_in_stock: 10 };
    return product.create(newRec)
      .then(record => {
        Object.keys(newRec).forEach(key => {
          expect(record[key]).toEqual(newRec[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it(' can update() A product ', () => {
    let newRec = { price: 14, weight: 47, quantity_in_stock: 10 };
    return product.create(newRec)
      .then(record => {
        return product.update(record._id, record)
          .then(proItem => {
            Object.keys(newRec).forEach(key => {
              expect(proItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });

  it(' can Delete() A product ', () => {
    let newRec = { price: 14, weight: 47, quantity_in_stock: 10 };
    return product.create(newRec)
      .then(record => {
        return product.delete(record._id, record)
          .then(proItem => {
            Object.keys(newRec).forEach(key => {
              expect(proItem[key]).toEqual(newRec[key]);
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });

});