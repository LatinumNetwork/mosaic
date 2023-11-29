type AllowedOpacity = 45 | 60;

export default (hex: string, opacity: AllowedOpacity): string => {
  hex = hex.replace(/^#/, '');

  if (hex.length !== 6) {
    throw new Error('Invalid hex color format');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const alpha = opacity / 100;

  return `rgba(${r},${g},${b},${alpha})`;
};
