import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesListComponent } from './top-movies-list.component';

describe('TopMoviesListComponent', () => {
  let component: TopMoviesListComponent;
  let fixture: ComponentFixture<TopMoviesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMoviesListComponent]
    });
    fixture = TestBed.createComponent(TopMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
