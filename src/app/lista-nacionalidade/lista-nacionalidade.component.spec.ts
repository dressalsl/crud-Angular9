import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNacionalidadeComponent } from './lista-nacionalidade.component';

describe('ListaNacionalidadeComponent', () => {
  let component: ListaNacionalidadeComponent;
  let fixture: ComponentFixture<ListaNacionalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNacionalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNacionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
