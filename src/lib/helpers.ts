export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (err) {
    console.log("error",err);
    
    return false;
  }
}

export const urlFixer = (url: string[]) => {
  return url.map((part) => decodeURIComponent(part)).join("/");
};