export const BASE_PATH = process.env.NODE_ENV === "production" ? "/Creative_Agency" : "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
