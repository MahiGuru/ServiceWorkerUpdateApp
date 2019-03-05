import { TestBed } from '@angular/core/testing';

import { NotifyAppUpdatesService } from './notify-app-updates.service';

describe('NotifyAppUpdatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifyAppUpdatesService = TestBed.get(NotifyAppUpdatesService);
    expect(service).toBeTruthy();
  });
});
