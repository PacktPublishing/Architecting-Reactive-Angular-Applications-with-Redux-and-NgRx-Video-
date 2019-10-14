const getProductsAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Bad - Michael Jackson", price: 10, categoryId: 1 },
        { id: 2, name: "Lord of the Rings", price: 20, categoryId: 2 }
      ]);
    }, 3000);
  });
};

const getCategoriesAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Music" }, { id: 2, name: "Movie" }]);
    }, 3000);
  });
};

@Injectable()
export class Service {
  getData() {
    // synchronous flow - easy to see what happens

    const products = [
      { id: 1, name: "Bad - Michael Jackson", price: 10, categoryId: 1 },
      { id: 2, name: "Lord of the Rings", price: 20, categoryId: 2 }
    ];
    const categories = [{ id: 1, name: "Music" }, { id: 2, name: "Movie" }];
    const productsWithCat = products.map(p => {
      return { ...p, category: categories.find(c => c.i === p.categoryId) };
    });
  }

  async getDataAsyncFixed() {
    // asynchronous flow - better but we still mix async + synch
    const products = await getProductsAsync();
    const categories = await getCategoriesAsync();
    const productsWithCat = products.map(p => {
      return { ...p, category: categories.find(c => c.i === p.categoryId) };
    });
  }
}
