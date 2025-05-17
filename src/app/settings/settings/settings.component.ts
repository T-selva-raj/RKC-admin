import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [HeaderComponent, CardModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings = [
    { title: "Registration", description: "Here you can control the teams registration", bg: "bg-pink-200" },
    { title: "Announcements", description: "Here you can add and edit announcements", bg: "bg-green-200" },
    { title: "Site settings", description: "Here you can manage the site contents", bg: "bg-gray-200" },
    { title: "Management", description: "Here you can add management persons", bg: "bg-yellow-200" },
    { title: "Commitee", description: "Here you can add edit comitte members", bg: "bg-purple-200" },
    { title: "Last Year winners", description: "Here you can add edit last year winners", bg: "bg-blue-200" }
  ];

}
