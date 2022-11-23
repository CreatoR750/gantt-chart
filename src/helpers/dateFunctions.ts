const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getWeeksDiff(startDate: Date, endDate: Date): number {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.ceil(Math.abs(endDate.getTime() - startDate.getTime()) / msInWeek);
}

export function getDaysDiff(startDate: Date, endDate: Date): number {
    const Difference_In_Time = endDate.getTime() - startDate.getTime();
    return Difference_In_Time / (1000 * 3600 * 24) + 1;
}

export function getStartDate(date: Date): string {
    const month = date.getMonth() + 1;
    if (month < 10) return `2022-0${month}-01`;
    else {
        return `2022-${month}-01`;
    }
}

export function getWeeks(startDate: Date, endDate: Date): { firstDay: string; lastDay: string }[] {
    const weeksNumber = getWeeksDiff(startDate, endDate);
    let weeksArr = [];
    for (let i = 0; i < weeksNumber; i++) {
        if (i === 0) {
            const firstDay = new Date(startDate.setDate(startDate.getDate()));
            const lastDay = new Date(startDate.setDate(startDate.getDate() + 6));
            const week = {
                firstDay: `${firstDay.getDate()} ${month[firstDay.getMonth()]}`,
                lastDay: `${lastDay.getDate()} ${month[lastDay.getMonth()]}`,
            };
            weeksArr.push(week);
        } else {
            const firstDay = new Date(startDate.setDate(startDate.getDate() + 1));
            const lastDay = new Date(startDate.setDate(startDate.getDate() + 6));
            const week = {
                firstDay: `${firstDay.getDate()} ${month[firstDay.getMonth()]}`,
                lastDay: `${lastDay.getDate()} ${month[lastDay.getMonth()]}`,
            };
            weeksArr.push(week);
        }
    }
    return weeksArr;
}

export function getDaysArr(startDate: Date, endDate: Date): number[] {
    let daysNumber = getDaysDiff(startDate, endDate);
    let daysArr: number[] = [];
    for (let i = 0; i < daysNumber; i++) {
        if (i === 0) {
            const firstDay = new Date(startDate.setDate(startDate.getDate()));
            daysArr.push(firstDay.getDate());
        } else {
            const firstDay = new Date(startDate.setDate(startDate.getDate() + 1));
            daysArr.push(firstDay.getDate());
        }
    }
    return daysArr;
}

export function getDaysInString(startDate: Date, endDate: Date) {
    let daysNumber = getDaysDiff(startDate, endDate);
    let daysArr: any[] = [];
    for (let i = 0; i < daysNumber; i++) {
        if (i === 0) {
            const firstDay = new Date(startDate.setDate(startDate.getDate()));
            daysArr.push(firstDay.toISOString().split("T")[0]);
        } else {
            const firstDay = new Date(startDate.setDate(startDate.getDate() + 1));
            daysArr.push(firstDay.toISOString().split("T")[0]);
        }
    }
    return daysArr;
}
