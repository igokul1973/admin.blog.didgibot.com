export const accumulateFormChanges = (acc: Record<string, string>[], v: Record<string, string>) => {
    Object.keys(acc[0]).forEach((key) => {
        if (acc[0][key] !== v[key]) {
            acc[1][key] = v[key];
        } else {
            delete acc[1][key];
        }
    });
    return acc;
};

export const getFormChangesFromResponse = (res: Record<string, string>[]) => {
    if (typeof res[1] === 'object' && Object.keys(res[1]).length) {
        return res[1];
    }
    return null;
};
