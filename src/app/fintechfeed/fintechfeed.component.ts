import { Component, OnInit } from '@angular/core';
import { FinTech2500Service } from '../services/fin-tech2500.service';

@Component({
  selector: 'app-fintechfeed',
  templateUrl: './fintechfeed.component.html',
  styleUrls: ['./fintechfeed.component.scss']
})
export class FintechfeedComponent implements OnInit {
  public finTech2500Fins: any = null;

  constructor(
    private finTech2500Service: FinTech2500Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.finTech2500Service.getFins().subscribe(data => this.finTech2500Fins = data);
  }
}
