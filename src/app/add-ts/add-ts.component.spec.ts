import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTsComponent } from './add-ts.component';

describe('AddTsComponent', () => {
  let component: AddTsComponent;
  let fixture: ComponentFixture<AddTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
