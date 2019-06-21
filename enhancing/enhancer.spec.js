const enhancer = require("./enhancer.js");
// test away!

const { repair, succeed } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(repair({ durability: 89 }).durability).toBe(100);
      expect(repair({ durability: -89 }).durability).toBe(100);
      expect(repair({ durability: 100 }).durability).toBe(100);
      expect(repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });
});

describe("succeed()", () => {
  it("increases enhancement by 1", () => {
    expect(succeed({ enhancement: 19 }).enhancement).toBe(20);
    expect(succeed({ enhancement: 0 }).enhancement).toBe(1);
    expect(succeed({ enhancement: 1 }).enhancement).toBe(2);
  });

  it("doesnt increase enhancement", () => {
    expect(succeed({ enhancement: 20 }).enhancement).toBe(20);
  });
});
