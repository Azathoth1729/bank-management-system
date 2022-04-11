const products = [
  {
    id: 205135453,
    name: '大秦科技基金',
    start_date: '2016-05-01',
    end_date: '2023-05-02',
    price: 100000,
    rate: 0.15,
    detail: 'detail',
    tags: ['白酒', '消费'],
    area: [],
    stock: 6000,
    payed_stock: 500,
    auth_type: [],
    penalty: '固定罚款',
    white_list: 1,
    bondsman: [2126121],
  },
  {
    id: 205235453,
    name: 'A',
    start_date: '2016-04-02',
    end_date: '2022-04-02',
    price: 500000,
    rate: 0.04,
    detail: 'details of A',
    tags: ['地产'],
    area: [],
    stock: 15000,
    payed_stock: 500,
    auth_type: [],
    penalty: '固定罚款',
    white_list: 2,
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
    tags: ['医疗'],
    area: [],
    stock: 5000,
    payed_stock: 500,
    auth_type: [],
    penalty: '固定罚款',
    white_list: 3,
    bondsman: [2126121],
  },
  {
    id: 2051353253,
    name: 'C',
    start_date: '2019-05-02',
    end_date: '2022-01-02',
    price: 15000,
    rate: 0.35,
    detail: 'detail of C',
    tags: ['汽车', '新能源'],
    area: [],
    stock: 5500,
    payed_stock: 500,
    auth_type: [],
    penalty: '固定罚款',
    white_list: 4,
    bondsman: [2126121],
  },
]

export function getAllProducts() {
  return products
}

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

export function setProduct(id, product) {
  let target = getProductById(id)
  target = product
}

export default products
