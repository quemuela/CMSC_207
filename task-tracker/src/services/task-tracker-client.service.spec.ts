import { TestBed } from '@angular/core/testing';

import { TaskTrackerClientService } from './task-tracker-client.service';

describe('TaskTrackerClientService', () => {
  let service: TaskTrackerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTrackerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
