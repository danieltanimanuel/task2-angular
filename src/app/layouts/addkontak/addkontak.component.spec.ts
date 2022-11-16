import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkontakComponent } from './addkontak.component';

describe('AddkontakComponent', () => {
  let component: AddkontakComponent;
  let fixture: ComponentFixture<AddkontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddkontakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddkontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
