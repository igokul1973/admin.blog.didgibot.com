/**
 * Turn enum into array
 */
const enumToArray = (stringEnum: Record<string, string>): string[] => {
    return Object.keys(stringEnum).map((key) => stringEnum[key]);
};

export default enumToArray;
