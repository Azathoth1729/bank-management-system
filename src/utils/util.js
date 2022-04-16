function stringifyArea(area) {
  // type area = Area | string
  switch (true) {
    case typeof area === "string":
      return area;
    case area.city === "":
      return `${area.province}-${area.region}`;
    default:
      return `${area.province}-${area.city}-${area.region}`;
  }
}

function stringifyObj(obj) {
  return JSON.stringify(obj, null, 2);
}

function stringifyAuthType(auth_type) {
  const authMap = { 0: "无", 1: "身份证", 2: "护照" };
  return authMap[auth_type];
}

function stringifyBondsman(bondsman) {
  return bondsman ? "需要" : "不需要";
}

export { stringifyObj, stringifyArea, stringifyAuthType, stringifyBondsman };
