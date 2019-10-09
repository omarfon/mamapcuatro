import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoServicePage } from './modal-no-service.page';

describe('ModalNoServicePage', () => {
  let component: ModalNoServicePage;
  let fixture: ComponentFixture<ModalNoServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNoServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
