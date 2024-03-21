import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardDetailPageComponent } from './blog-card-detail-page.component';

describe('BlogCardDetailPageComponent', () => {
  let component: BlogCardDetailPageComponent;
  let fixture: ComponentFixture<BlogCardDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogCardDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
