module.exports = {
  makeId(arrLength) {
    const keyList = "abcdefjhijklmnopqrstuvwxyz";
    let temp = '';
    const now = Date.now();
    for (let i = 0; i < 8; i += 1) {
      temp += keyList.charAt(Math.floor(Math.random() * keyList.length))
    }
    const newId = arrLength.toString().split('').concat(temp.split('').concat(now.toString().split(''))).join('');
    return newId;
  }
}