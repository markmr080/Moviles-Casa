import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Natbar } from './natbar';

describe('Natbar', () => {
  let component: Natbar;
  let fixture: ComponentFixture<Natbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Natbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Natbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
