import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TaskTrackerClientService } from 'src/services/task-tracker-client.service';
import { Task } from 'src/model/task';
import { STATUS } from 'src/model/status';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task?: Task;
  @Output() refreshEvent = new EventEmitter<boolean>();
  statusList = STATUS;
  detailForm!: FormGroup;
  submitted: boolean = false;
  selectedStatus?: "TODO";

  constructor(private taskTrackerClientService: TaskTrackerClientService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.detailForm = this.formBuilder.group(
      {
        id: ['', []],
        title: ['', [Validators.required,Validators.minLength(10)]],
        description: ['', [Validators.required]],
        status: ['', Validators.required],
        raisedBy: ['', Validators.required],
        assignee: ['', []],
        startDate: ['', [Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
        endDate: ['', [Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
      }
    );

  }

  OnSubmit(): void {
    if (this.detailForm.valid) {      
      this.task = this.detailForm.value;
      if(this.task!=null){
        this.taskTrackerClientService.saveTask(this.task).subscribe(t => {
          console.log(t);
          this.refreshEvent.emit(true);
        });
      }      
    }    
  }

  get f() { return this.detailForm.controls; }

  onStatusChange(event: any) {
    this.detailForm.get('status')?.setValue(event.target.value, { onlySelf: true});
  }
}
