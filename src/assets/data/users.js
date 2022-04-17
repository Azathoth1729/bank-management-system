const users = [
  {
    id: 2124121,
    username: "秦傲杰",
    credits: 300,
    white_list: 1,
    bondsman_list: 3,
  },
  {
    id: 2124125,
    username: "徐孝鸽",
    credits: 260,
    white_list: 1,
    bondsman_list: 3,
  },
  {
    id: 2126121,
    username: "尚圣东",
    credits: 310,
    white_list: 2,
    bondsman_list: 2,
  },
  {
    id: 2724121,
    username: "徐孝鸽",
    credits: 100,
    white_list: 2,
    bondsman_list: 1,
  },
  {
    id: 2124521,
    username: "A",
    credits: 300,
    white_list: 2,
    bondsman_list: 1,
  },
  {
    id: 2124021,
    username: "B",
    credits: 3500,
    white_list: 3,
    bondsman_list: 2,
  },
  {
    id: 2124021,
    username: "C",
    credits: 30,
    white_list: 3,
    bondsman_list: 2,
  },
];

function getUserByFilter(f) {
  return users.filter(f);
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function getWhiteList(listId) {
  return getUserByFilter((user) => listId === user.white_list);
}

export function getBondsmanList(listId) {
  return getUserByFilter((user) => listId === user.bondsman_list);
}

export default users;
