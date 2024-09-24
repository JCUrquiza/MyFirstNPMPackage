import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SideMenuComponent
  ],
  templateUrl: './admin-layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

  isAuthenticated = signal(false);

  public onLogin() {
    this.isAuthenticated.set(true);
  }

  public onLogout() {
    this.isAuthenticated.set(false);
  }

}
