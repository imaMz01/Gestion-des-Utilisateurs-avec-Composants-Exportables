import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResestPassWordComponent } from './resest-pass-word.component';

describe('ResestPassWordComponent', () => {
  let component: ResestPassWordComponent;
  let fixture: ComponentFixture<ResestPassWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResestPassWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResestPassWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
