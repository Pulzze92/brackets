module.exports = function check(str, bracketsConfig) {
  let a = new Map(bracketsConfig);
  let array = [];
		for (let i = 0; i < str.length; i++) {
			if (str[i] === a.get(array[array.length - 1])) {
				array.pop();
			}
				else { array.push(str[i]);
				}
		}
		return (array.length === 0) ? true : false;
}
