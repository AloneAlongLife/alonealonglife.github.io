export function classFromList(classes: Array<string|null>): string {
    return classes.filter(x => typeof x === "string").join(" ");
}
