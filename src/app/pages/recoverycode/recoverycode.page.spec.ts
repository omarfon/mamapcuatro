import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverycodePage } from './recoverycode.page';

describe('RecoverycodePage', () => {
  let component: RecoverycodePage;
  let fixture: ComponentFixture<RecoverycodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverycodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverycodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
