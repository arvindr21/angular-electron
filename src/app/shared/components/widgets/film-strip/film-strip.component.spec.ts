import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmStripComponent } from './film-strip.component';

describe('FilmStripComponent', () => {
  let component: FilmStripComponent;
  let fixture: ComponentFixture<FilmStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
