import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimercomponenteComponent } from './primercomponente.component';

describe('PrimercomponenteComponent', () => {
  let component: PrimercomponenteComponent;
  let fixture: ComponentFixture<PrimercomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimercomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
