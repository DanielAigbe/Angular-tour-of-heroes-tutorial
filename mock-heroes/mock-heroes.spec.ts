import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHeroes } from './mock-heroes';

describe('MockHeroes', () => {
  let component: MockHeroes;
  let fixture: ComponentFixture<MockHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockHeroes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockHeroes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
