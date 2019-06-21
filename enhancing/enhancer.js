module.exports = {
  succeed,
  fail,
  repair
  // get
};

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  const enhancement = item.enhancement;

  if (enhancement == 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}
