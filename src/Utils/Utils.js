function toTitleCase(str) {
    // const str = "foo bar baz";
    const newStr = str
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
    console.log(newStr);
    return newStr;
}

export default toTitleCase;
