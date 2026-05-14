export function stripCardSuffix(name: string): string {
  return name.replace("_card", "");
}

export function cardToJailKey(name: string): string {
  return name.replace("_card", "_jail");
}
