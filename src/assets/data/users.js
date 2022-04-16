const users = [
  {
    id: 2124121,
    account: "2019141460306",
    username: "秦傲杰",
    credits: 300,
    area: [],
    products: [],
    white_list: 1,
  },
  {
    id: 2124125,
    account: "2019141460175",
    username: "徐孝鸽",
    credits: 260,
    area: [],
    products: [],
    white_list: 1,
  },
  {
    id: 2126121,
    account: "2019141460324",
    username: "尚圣东",
    credits: 310,
    area: [],
    products: [],
    white_list: 1,
  },
  {
    id: 2724121,
    account: "2019141460175",
    username: "徐孝鸽",
    credits: 100,
    area: [],
    products: [],
    white_list: 2,
  },
  {
    id: 2124521,
    account: "2019141460001",
    username: "A",
    credits: 300,
    area: [],
    products: [],
    white_list: 2,
  },
  {
    id: 2124021,
    account: "2019141460002",
    username: "B",
    credits: 3500,
    area: [],
    products: [],
    white_list: 3,
  },
  {
    id: 2124021,
    account: "2019141460003",
    username: "C",
    credits: 30,
    area: [],
    products: [],
    white_list: 3,
  },
];

function getProductsByFilter(f) {
  return users.filter(f);
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function getWhiteList(listId) {
  return getProductsByFilter((user) => listId === user.white_list);
}

export default users;
