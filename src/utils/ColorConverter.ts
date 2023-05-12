/**
 * Convert 6 digits hexadecimal color code to RGBA format
 * @param {string} hex - hexadecimal color to convert
 * @param {string} opacity - (optional) Default value: 1.
 * @returns {string} RGBA color
 **/
export const hexToRgba = (hex: string, opacity: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}