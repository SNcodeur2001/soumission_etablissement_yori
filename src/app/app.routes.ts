import { Routes } from '@angular/router';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { MainLayoutComponent } from './core/components/layouts/main-layout/main-layout.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

export const routes: Routes = [{ path: '', component: HeaderComponent }];
