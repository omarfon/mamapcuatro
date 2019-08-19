import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpagePage } from './detailpage.page';

describe('DetailpagePage', () => {
  let component: DetailpagePage;
  let fixture: ComponentFixture<DetailpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
