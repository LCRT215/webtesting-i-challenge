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

function fail(item) {
  const enhancement = item.enhancement;
  const durability = item.durability;

  if (enhancement < 15) {
    return { ...item, durability: Math.max(0, durability - 5) };
  } else {
    if (enhancement > 16) {
      return {
        enhancement: enhancement - 1,
        durability: Math.max(0, durability - 10)
      };
    } else {
      return { ...item, durability: Math.max(0, durability - 10) };
    }
  }
}
