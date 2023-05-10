import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/task';
import { TaskTrackerClientService } from 'src/services/task-tracker-client.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  selectedTask?: Task;      
  taskList: Task[] = [];

  constructor(private taskTrackerClient: TaskTrackerClientService) {}

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  filterTodo(task: Task): boolean {
    return task.status == "TODO";
  }

  filterDone(task: Task): boolean {
    return task.status == "DONE";
  }

  filterInProgress(task: Task): boolean {
    return task.status == "INPROGRESS";
  }

  ngOnInit(): void {        
    this.getAllTasks();
  }

  getAllTasks() : void {
    this.taskTrackerClient.getTasks().subscribe(tasks => {      
      this.taskList = tasks;
    });    
  }  

  newTask(): void {
   this.selectedTask = {
    id:-1,
    title:"",
    description:"",
    status: "TODO",
    raisedBy: "",
    assignee: "",
    startDate: "",
    endDate:"",
    sprint:""
   }; 
  }

  refreshEventHandler($event: any) {
    this.getAllTasks();
  }
}
