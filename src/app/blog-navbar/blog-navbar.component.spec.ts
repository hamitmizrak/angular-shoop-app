import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNavbarComponent } from './blog-navbar.component';

describe('BlogNavbarComponent', () => {
  let component: BlogNavbarComponent;
  let fixture: ComponentFixture<BlogNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
