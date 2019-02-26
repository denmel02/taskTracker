export default (array, key) => array.reduce((newObject, item) => {
    newObject[item[key]] = newObject[item[key]] || [];
    newObject[item[key]].push(item);

    return newObject;
}, {});
