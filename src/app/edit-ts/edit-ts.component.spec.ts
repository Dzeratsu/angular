import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTsComponent } from './edit-ts.component';

describe('EditTsComponent', () => {
  let component: EditTsComponent;
  let fixture: ComponentFixture<EditTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
