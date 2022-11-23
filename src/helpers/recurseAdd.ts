export const recurseAdd = (accArr: any[], currentSub: any[], level: number) => {
    currentSub.map((item) => {
        accArr.push({ ...item, level: level, sub: item.sub ? item.sub.length : null });
        if (item.sub) {
            recurseAdd(accArr, item.sub, level + 1);
        }
    });
};
