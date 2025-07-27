import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { About } from "../about/about";

@Component({
  selector: 'app-header',
  imports: [RouterModule, About],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
