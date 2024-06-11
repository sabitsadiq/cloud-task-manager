export function getInitials(fullname) {
  const names = fullname?.split(" ");
  const initails = names?.slice(0, 2).map((name) => name[0].toUpperCase());
  const initailsStr = initails?.join("");
  return initailsStr;
}
