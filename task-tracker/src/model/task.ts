export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    raisedBy: string;
    assignee: string;
    startDate: string;
    endDate: string;
    sprint: string;
}