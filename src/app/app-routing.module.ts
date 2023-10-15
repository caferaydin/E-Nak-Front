import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'drive',
        loadChildren: () =>
          import('./admin/components/drive/drive.module').then(
            (module) => module.DriveModule
          ),
      },
      {
        path: 'transport',
        loadChildren: () =>
          import('./admin/components/transport/transport.module').then(
            (module) => module.TransportModule
          ),
      },
      {
        path: 'vehicle',
        loadChildren: () =>
          import('./admin/components/vehicle/vehicle.module').then(
            (module) => module.VehicleModule
          ),
      },
    ],
  },
  { path: '', component: HomeComponent },
  {
    path: 'transport',
    loadChildren: () =>
      import('./ui/components/transport/transport.module').then(
        (module) => module.TransportModule
      ),
  },
  {
    path: 'prelimnaryoffer',
    loadChildren: () =>
      import('./ui/components/preliminary-offer/preliminary-offer.module').then(
        (module) => module.PreliminaryOfferModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
