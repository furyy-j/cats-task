import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcatComponent } from './searchcat.component';

describe('SearchcatComponent', () => {
  let component: SearchcatComponent;
  let fixture: ComponentFixture<SearchcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
