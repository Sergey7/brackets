module.exports = function check(str, bracketsConfig) {
  let tmp = '';
  let ans = str;
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0].includes('(') || bracketsConfig[i][0].includes('[') || bracketsConfig[i][0].includes('{') || bracketsConfig[i][0].includes('|')) {
      tmp = tmp + `\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}|`;
    } else {
      tmp = tmp + `${bracketsConfig[i][0]}${bracketsConfig[i][1]}|`;
    }
  }
  let reg = RegExp(tmp, "g");
  let checkStr = str;
  while (true) {
    ans = ans.replace(reg, '')
    if (ans === checkStr) {
      break
    } else {
      checkStr = ans;
    }
  }
  return (ans)?false:true

}
