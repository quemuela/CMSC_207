import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/model/task';

@Pipe({
    name: 'taskStatusFilter',
    pure: false
})
export class TaskStatusFilter implements PipeTransform {
    transform(items: Task[], taskStatusFilter: (item: any) => boolean): any {
        if (!items || !taskStatusFilter) {
            return items;
        }
        return items.filter(item => taskStatusFilter(item));
    }
}