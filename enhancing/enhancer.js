module.exports = {
  // succeed,
  fail,
  repair
  // get
};

function repair(item) {
  return { ...item, durability: 100 };
}
