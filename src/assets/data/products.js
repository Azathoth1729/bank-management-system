const areas = [
  {
    province: "四川",
    city: "成都",
    region: "双流区",
  },
  {
    province: "四川",
    city: "成都",
    region: "金牛区",
  },
  {
    province: "北京",
    city: "",
    region: "朝阳区",
  },
  {
    province: "云南",
    city: "昆明",
    region: "五华区",
  },
];

const products = [
  {
    id: 205135453,
    name: "大秦科技基金",
    start_date: "2016-05-01",
    end_date: "2023-05-02",
    price: 100000,
    rate: 0.15,
    detail: "detail",
    tag: "白酒",

    stock: 6000,
    payed_stock: 500,
    white_list: 1,
    penalty: 0,

    areas: [areas[0], areas[2]],
    auth_type: 2,
    bondsman: false,
    calculate_rate: 1,
  },
  {
    id: 205231234,
    name: "A",
    start_date: "2016-04-02",
    end_date: "2022-04-02",
    price: 500000,
    rate: 0.04,
    detail: "detail of A",
    tag: "半导体",

    stock: 15000,
    payed_stock: 500,
    white_list: 2,
    penalty: 1,

    areas: [areas[1]],
    auth_type: 0,
    bondsman: true,
    calculate_rate: 1,
  },
  {
    id: 205135441,
    name: "B",
    start_date: "2015-05-02",
    end_date: "2020-05-02",
    price: 10000,
    rate: 0.25,
    detail: "detail of B",
    tag: "医疗",

    stock: 5000,
    payed_stock: 500,
    white_list: 3,
    penalty: 2,

    areas: [areas[3]],
    auth_type: 1,
    bondsman: false,
    calculate_rate: 1,
  },
  {
    id: 201325000,
    name: "C",
    start_date: "2019-05-02",
    end_date: "2022-01-02",
    price: 15000,
    rate: 0.35,
    detail: "detail of C",
    tag: "汽车",

    stock: 5500,
    payed_stock: 500,
    white_list: 2,
    penalty: 0,

    areas: "all",
    auth_type: 1,
    bondsman: false,
    calculate_rate: 1,
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

function getProductsByFilter(f) {
  return products.filter(f);
}

export default products;
