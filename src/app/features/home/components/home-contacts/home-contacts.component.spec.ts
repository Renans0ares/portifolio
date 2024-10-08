import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactsComponent } from './home-contacts.component';

describe('HomeContactsComponent', () => {
  let component: HomeContactsComponent;
  let fixture: ComponentFixture<HomeContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
