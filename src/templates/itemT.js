import uuid from 'uuid';

const itemT = () => ({
    itemID: uuid(),
    productID: "",
    unitPrice: "",
    unit: "",
    quantity: ""
});

export default itemT;