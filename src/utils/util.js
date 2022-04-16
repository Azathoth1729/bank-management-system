export function stringifyArea(area) {
  // type area = Area | string
  if (typeof area === "string") {
    return area;
  }
  if (area.city === "") {
    return `${area.province}-${area.region}`;
  }
  return `${area.province}-${area.city}-${area.region}`;
}

export function stringifyObj(obj) {
  return JSON.stringify(obj, null, 2)
}

export function stringifyAuthType(auth_type) {
  a = {0: "无", 1: "身份证", 2:"护照"};
}