import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSexoComponent } from './lista-sexo.component';

describe('ListaSexoComponent', () => {
  let component: ListaSexoComponent;
  let fixture: ComponentFixture<ListaSexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
