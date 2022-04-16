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

function formatDate(date) {
  function format(date) {
    if (date < 2) {
      date = "0" + date;
    }
  }

  let year = date.getFullYear();
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();

  let hour = "" + date.getHours();
  let minutes = "" + date.getMinutes();
  let secondas = "" + date.getSeconds();

  format(month);
  format(day);

  format(hour);
  format(minutes);
  format(secondas);
  const less = [year, month, day].join("-");
  const more = [hour, minutes, secondas].join(":");
  return `${less}\t${more}`;
}

function moduloGetItem(arr, index) {
  return arr[index % arr.length];
}

export { stringifyObj, stringifyArea, stringifyAuthType, stringifyBondsman };

export { formatDate };

export { moduloGetItem };
