import { TestBed } from '@angular/core/testing';

import { RightDrawerService } from './right-drawer.service';

describe('RightDrawerService', () => {
    let service: RightDrawerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RightDrawerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
