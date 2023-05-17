import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { FintechfeedComponent } from './fintechfeed.component';

describe('FintechfeedComponent', () => {
  let component: FintechfeedComponent;
  let fixture: ComponentFixture<FintechfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintechfeedComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FintechfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
