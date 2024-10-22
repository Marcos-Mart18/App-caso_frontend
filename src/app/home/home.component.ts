import { Component, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Correcto
})
export class HomeComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e:Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}
