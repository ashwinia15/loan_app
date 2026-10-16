// Postgres returns decimals as strings; this converts them back to numbers.
export const decimalToNumber = {
  to: (v: number) => v,
  from: (v: string) => parseFloat(v),
};