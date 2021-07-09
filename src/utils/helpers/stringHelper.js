export function replacer (string) {
  var replace = "https://www.youtube.com/watch?v=";
  var result = string.replace(replace, "");

  return result;
}
