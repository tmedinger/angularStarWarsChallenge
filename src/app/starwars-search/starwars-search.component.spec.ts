import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsSearchComponent } from './starwars-search.component';

describe('StarwarsSearchComponent', () => {
  let component: StarwarsSearchComponent;
  let fixture: ComponentFixture<StarwarsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
