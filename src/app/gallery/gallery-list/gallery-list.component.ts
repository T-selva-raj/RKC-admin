import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-gallery-list',
  standalone: true,
  imports: [HeaderComponent, FloatLabel, InputTextModule, ImageModule, CardModule, ButtonModule, SpeedDialModule],
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent {
  headerActions = [
    { label: 'Add Images', icon: 'pi pi-plus', type: 'outlined', severity: 'success' as 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast', action: 'add' },
  ]
  images = [
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
    { title: 'hello world', url: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg' },
  ]
  imageButtons: MenuItem[] = [
    {
      icon: 'pi pi-pencil',
      command: () => {
        console.log("hello");

      }
    },
  ]
}
