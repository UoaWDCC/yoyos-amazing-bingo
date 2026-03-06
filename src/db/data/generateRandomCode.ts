import random from "random-string-generator";

export default function generateRandomCode() {
  return random(6, "alphanumeric");
}