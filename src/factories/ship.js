const Ship = (type, length, isVertical) => {
  let hits = [];

  const hit = (position) => {
    if (hits.includes(position) || position < 0 || position >= length) return;
    hits.push(position);
  };

  const isSunk = () => {
    return hits.length == length;
  };
  return { type, length, hits, hit, isSunk, isVertical };
};

module.exports = Ship;
