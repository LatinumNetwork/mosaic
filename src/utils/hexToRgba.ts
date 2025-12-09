/**
 * Convert hex color to rgba format
 * @param hex Hex color code (e.g., #RRGGBB or #RGB)
 * @param opacity Opacity value as a percentage (0-100)
 * @returns RGBA color string
 */
export const hexToRgba = (hex: string, opacity: number): string => {
  hex = hex.replace(/^#/, '');

  if (hex.length !== 6 && hex.length !== 3) {
    throw new Error('Invalid hex color format');
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const alpha = opacity / 100;

  return `rgba(${r},${g},${b},${alpha})`;
};
