module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
	if (item.enhancement === 20) {
		return { ...item };
	} else {
		return { ...item, enhancement: item.enhancement + 1 };
  }
  
}

function fail(item) {
	const durability =
		item.enhancement >= 15 ? item.durability - 10 : item.durability - 5;
	const enhancement =
		item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
	return { ...item, durability, enhancement };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
