const products = [
  {
    id: 205135453,
    name: '大秦科技基金',
    start_date: '2016-05-01',
    end_date: '2023-05-02',
    price: 100000,
    rate: 0.15,
    detail: 'detail',
    tag: '白酒',
    
    stock: 6000,
    payed_stock: 500,
    white_list: 1,
    penalty: '固定罚款',
    
    area: [],
    auth_type: ['身份证', '护照', '社保卡'],
    bondsman: [2126121],
  },
  {
    id: 205231234,
    name: 'A',
    start_date: '2016-04-02',
    end_date: '2022-04-02',
    price: 500000,
    rate: 0.04,
    detail: 'details of A',
    tag: '半导体',

    stock: 15000,
    payed_stock: 500,
    white_list: 2,
    penalty: '固定罚款',

    area: [],
    auth_type: [],
    bondsman: [2126121],
  },
  {
    id: 205135441,
    name: 'B',
    start_date: '2015-05-02',
    end_date: '2020-05-02',
    price: 10000,
    rate: 0.25,
    detail: 'detail of B',
    tag: '医疗',

    stock: 5000,
    payed_stock: 500,
    white_list: 3,
    penalty: '固定罚款',

    area: [],
    auth_type: [],
    bondsman: [2126121],
  },
  {
    id: 201325000,
    name: 'C',
    start_date: '2019-05-02',
    end_date: '2022-01-02',
    price: 15000,
    rate: 0.35,
    detail: 'detail of C',
    tag: '汽车',
    
    stock: 5500,
    payed_stock: 500,
    white_list: 4,
    penalty: '固定罚款',

    area: [],
    auth_type: [],
    bondsman: [2126121],
  },
]

export function getAllProducts() {
  return products
}

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

// export function setProduct(id, product) {
//   let target = getProductById(id)
//   target = product
// }

export default products
