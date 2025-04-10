import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncrementadorPage } from './incrementador.page';

describe('IncrementadorPage', () => {
  let component: IncrementadorPage;
  let fixture: ComponentFixture<IncrementadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
