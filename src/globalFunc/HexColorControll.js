export function HexControll(hex, value) {
  if (!checkHexColor(hex)) {
    return "none";
  }
  let r, g, b;
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);

  r = Math.floor(r * value);
  g = Math.floor(g * value);
  b = Math.floor(b * value);

  r = r.toString(16).length < 2 ? `0${r.toString(16)}` : r.toString(16);
  b = b.toString(16).length < 2 ? `0${b.toString(16)}` : b.toString(16);
  g = g.toString(16).length < 2 ? `0${g.toString(16)}` : g.toString(16);

  return `#${r}${g}${b}`;
}

export function getComplementary(hex) {
  if (!checkHexColor(hex)) {
    return "none";
  }
  let r, g, b;
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);

  r = 255 - r;
  b = 255 - b;
  g = 255 - g;

  r = r.toString(16).length < 2 ? `0${r.toString(16)}` : r.toString(16);
  b = b.toString(16).length < 2 ? `0${b.toString(16)}` : b.toString(16);
  g = g.toString(16).length < 2 ? `0${g.toString(16)}` : g.toString(16);

  return `#${r}${g}${b}`;
}

function checkHexColor(hex) {
  const hash = /^#[0-9a-f]{6}$/i;

  if (!hash.test(hex)) {
    return false;
  }
  return true;
}
