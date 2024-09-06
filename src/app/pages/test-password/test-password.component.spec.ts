import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPasswordComponent } from './test-password.component';

describe('TestPasswordComponent', () => {
  let component: TestPasswordComponent;
  let fixture: ComponentFixture<TestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
