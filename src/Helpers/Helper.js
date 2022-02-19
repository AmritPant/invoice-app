export const BODY = document.querySelector("body");

export const randomIdGenerator = function () {
  let randomPassword;
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomTwoLetter =
    letter[Math.trunc(Math.random() * 26)] +
    letter[Math.trunc(Math.random() * 26)];
  return (randomPassword =
    randomTwoLetter + Math.trunc(Math.random() * 9999 + 1));
};
