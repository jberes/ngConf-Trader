import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { IgxInputGroupModule, IgxIconModule, IgxChipsModule, IgxListModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxGridModule, IgxDialogModule, IgxCardModule, IgxAvatarModule, IgxActionStripModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxBadgeComponent } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxFinancialChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashboardviewComponent } from './dashboardview/dashboardview.component';
import { Fdc3playgroundComponent } from './fdc3playground/fdc3playground.component';
import { FintechfeedComponent } from './fintechfeed/fintechfeed.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardsComponent,
    DashboardviewComponent,
    Fdc3playgroundComponent,
    FintechfeedComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxChipsModule,
    IgxListModule,
    IgxCategoryChartModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxGridModule,
    IgxBadgeComponent,
    IgxDialogModule,
    FormsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxActionStripModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule,
    IgxFinancialChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
