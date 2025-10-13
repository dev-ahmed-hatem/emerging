export type Level = {
  name: string;
  weight: number;
  id: string;
};

export const generateBluePalette = (count: number): string[] => {
  // Reference gradient range (based on your sample)
  const startColor = { r: 165, g: 216, b: 255 }; // #a5d8ff
  const endColor = { r: 24, g: 100, b: 171 }; // #1864ab

  const colors: string[] = [];

  for (let i = 0; i < count; i++) {
    const ratio = i / Math.max(count - 1, 1);
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);
    colors.push(
      `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
        .toString(16)
        .padStart(2, "0")}`
    );
  }

  return colors;
};
