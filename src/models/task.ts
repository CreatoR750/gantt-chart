export interface ITask {
    id: number | null;
    title: string;
    period_start: string;
    period_end: string;
    level: number;
    sub?: number | null;
}
