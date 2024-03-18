import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRegisterComponent } from './blog-register.component';

describe('BlogRegisterComponent', () => {
  let component: BlogRegisterComponent;
  let fixture: ComponentFixture<BlogRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
