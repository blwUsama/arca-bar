import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    InputSwitchModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  isRomanian: boolean = false;

  constructor(private translate: TranslateService) {}

  toggleSidebar() {
    console.log('sidebar status: ' + this.sidebarVisible);
    this.sidebarVisible = !this.sidebarVisible;
    document.body.style.position = this.sidebarVisible ? 'fixed' : 'static';
  }

  scrollToSection(section: string): void {
    console.log('scroll to section called');
    const element = document.getElementById(section);
    if (element) {
      console.log('element found');
      element.scrollIntoView({ behavior: 'smooth' });
      // // Calculate the element's position relative to the viewport
      // const elementRect = element.getBoundingClientRect();
      // const elementTop = elementRect.top + window.scrollY;
      // const offset = 210; // Height of the fixed/sticky navbar
      // const offsetPosition = elementTop - offset - window.scrollY;
      // console.log('scroll pixels:', offsetPosition);
      // window.scrollTo({
      //   top: -offsetPosition,
      //   left: 0,
      //   behavior: 'smooth',
      // });
    }
  }

  toggleLanguage(): void {
    let selectedLanguage: string = this.isRomanian ? 'ro' : 'en';
    this.translate.use(selectedLanguage);
  }
}
