(function (window) {//this will create an object that has library funtions as attributes
    function myLibrary() {
        //execute code here
        var catalog = createRandomCalalog(100);

        return {
            searchProductById: searchProductById,
            searchProductByPrice: searchProductByPrice,
            searchProductByType: searchProductByType,
            searchAllProducts: searchAllProducts
        }

        //function definitions go here
        function createRandomObject() {
            var typeArray = ['Electonics', 'Book', 'Clothing', 'Food'];
            var price = (Math.random() * 500).toFixed(2);
            var type = typeArray[Math.floor(Math.random() * 4)];
            return { price: price, type: type };
        };

        function createRandomCalalog(num) {
            var catalog = [];
            for (var i = 1; i < num; i++) {
                var obj = createRandomObject();
                catalog.push({ id: i, price: obj.price, type: obj.type });
            }
            return catalog;
        }
        //search all products
        function searchAllProducts() {
            var promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(catalog);
                }, 1000);
            });
            return promise;
        };
        //Search products by id
        function searchProductById(id) {
            var promise = new Promise(function (resolve, reject) {
                var i = 0;
                setTimeout(function () {
                    while (i < catalog.length) {
                        if (catalog[id] === id) {
                            resolve({ id: id, price: catalog[i].price, type: catalog[i].type });
                        }
                        i++;
                    }
                    reject("Invalid Id:" + id);
                }, 1000);
            });
            return promise;
        };
        //search product by type
        function searchProductByType(type) {
            var promise = new Promise(function (resolve, reject) {
                var i = 0;
                var typeArray = [];
                var possibleTypes = ['Electonics', 'Book', 'Clothing', 'Food'];
                if (!possibleTypes.includes(type)) {
                    reject("Invalid type:" + type);
                }
                else {
                    setTimeout(function () {
                        while (i < catalog.length) {
                            if (catalog[i].type === type) {
                                typeArray.push({ id: catalog[i].id, price: catalog[i].price, type: catalog[i].type })
                            }
                            i++;
                        }
                        resolve(typeArray);
                    }, 1000)
                }
            });
            return promise;
        };
        //search Products By Price
        function searchProductByPrice(price, difference) {
            var promise = new Promise(function (resolve, reject) {
                var i = 0;
                var priceArray = [];
                if (!isFinite(price)) {
                    reject("Invalid Price: " + price)
                }
                else {
                    setTimeout(function () {
                        while (i < catalog.length) {
                            if (Math.abs(catalog[i].price - price) < difference) {
                                priceArray.push({ id: catalog[i].id, price: catalog[i].price, type: catalog[i].type });
                            }
                            i++;
                        }
                        resolve(priceArray);
                    }, 1000);
                }
            });
            return promise;
        }
    }
    if (typeof (window.api) === 'undefined') {
        window.api = myLibrary();
    }
})(window);