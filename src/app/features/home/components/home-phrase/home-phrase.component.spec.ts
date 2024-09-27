import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhraseComponent } from './home-phrase.component';

describe('HomePhraseComponent', () => {
  let component: HomePhraseComponent;
  let fixture: ComponentFixture<HomePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePhraseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
