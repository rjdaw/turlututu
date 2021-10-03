const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'items.json'
);

const getItemsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Item {
    constructor(id, tags, imageUrl, price, name, description) {
        this.id = id;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static fetchAll(cb) {
        getItemsFromFile(cb);
    }

    static findById(id, cb) {
        getItemsFromFile(items => {
            const item = items.find(p => p.id === id);
            cb(item);
        });
    }
};