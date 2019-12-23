import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },  
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule',canActivate: [AuthGuard]},
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule',canActivate: [AuthGuard] },
  { path: 'zayvka', loadChildren: './pages/zayvka/zayvka.module#ZayvkaPageModule',canActivate: [AuthGuard]},
  { path: 'zayvkaikonom', loadChildren: './pages/zayvkaikonom/zayvkaikonom.module#ZayvkaikonomPageModule',canActivate: [AuthGuard] },
  { path: 'zayvkadop', loadChildren: './pages/zayvkadop/zayvkadop.module#ZayvkadopPageModule',canActivate: [AuthGuard]},
  { path: 'moyuk', loadChildren: './pages/moyuk/moyuk.module#MoyukPageModule',canActivate: [AuthGuard] },
  { path: 'chatdispecher', loadChildren: './pages/chatdispecher/chatdispecher.module#ChatdispecherPageModule', canActivate: [AuthGuard] },
  { path: 'partner', loadChildren: './pages/partner/partner.module#PartnerPageModule', canActivate: [AuthGuard] },
  { path: 'pokazanie', loadChildren: './pages/pokazanie/pokazanie.module#PokazaniePageModule', canActivate: [AuthGuard] },
  { path: 'priceulug', loadChildren: './pages/priceulug/priceulug.module#PriceulugPageModule',canActivate: [AuthGuard] },
  { path: 'priceulugikonom', loadChildren: './pages/priceulugikonom/priceulugikonom.module#PriceulugikonomPageModule',canActivate: [AuthGuard] },
  { path: 'slyzby', loadChildren: './pages/slyzby/slyzby.module#SlyzbyPageModule', canActivate: [AuthGuard] },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule', canActivate: [AuthGuard] },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule', canActivate: [AuthGuard] },
  { path: 'shet', loadChildren: './pages/shet/shet.module#ShetPageModule', canActivate: [AuthGuard] },
  { path: 'shetpokaza', loadChildren: './pages/shetpokaza/shetpokaza.module#ShetpokazaPageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchikone', loadChildren: './pages/dobshetchikone/dobshetchikone.module#DobshetchikonePageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchiktwo', loadChildren: './pages/dobshetchiktwo/dobshetchiktwo.module#DobshetchiktwoPageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchikfree', loadChildren: './pages/dobshetchikfree/dobshetchikfree.module#DobshetchikfreePageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchikfou', loadChildren: './pages/dobshetchikfou/dobshetchikfou.module#DobshetchikfouPageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchikfive', loadChildren: './pages/dobshetchikfive/dobshetchikfive.module#DobshetchikfivePageModule', canActivate: [AuthGuard] },
  { path: 'dobshetchiksex', loadChildren: './pages/dobshetchiksex/dobshetchiksex.module#DobshetchiksexPageModule', canActivate: [AuthGuard] },
  { path: 'shetmy', loadChildren: './pages/shetmy/shetmy.module#ShetmyPageModule', canActivate: [AuthGuard] },
  { path: 'profileupdate', loadChildren: './pages/profileupdate/profileupdate.module#ProfileupdatePageModule', canActivate: [AuthGuard] },
  { path: 'dopulugimeny', loadChildren: './dopulugimeny/dopulugimeny.module#DopulugimenyPageModule',canActivate: [AuthGuard] },
  { path: 'odn', loadChildren: './pages/odn/odn.module#OdnPageModule',canActivate: [AuthGuard] },
  { path: 'myzayvk', loadChildren: './pages/myzayvk/myzayvk.module#MyzayvkPageModule',canActivate: [AuthGuard] },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}