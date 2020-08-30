// https://gist.github.com/dperini/729294
export const URL_REGEX = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

export const replaceDotsInKeys = rewriteProperties;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function rewriteProperties(obj: any) {
  if (typeof obj !== "object") return obj;
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      obj[prop.replace(/\./g, "_")] = rewriteProperties(obj[prop]);
      if (prop.indexOf(".") > -1) {
        delete obj[prop];
      }
    }
  }
  return obj;
}
