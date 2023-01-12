import { TestBed } from '@angular/core/testing';

import { FileuploadingService } from './fileuploading.service';

describe('FileuploadingService', () => {
  let service: FileuploadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuploadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
