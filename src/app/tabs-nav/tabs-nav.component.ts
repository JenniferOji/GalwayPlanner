import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { addIcons } from 'ionicons';
import { heart, map, restaurant, bicycle, clipboard} from 'ionicons/icons';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss'],
  standalone: true,
  imports: [ IonicModule, RouterLinkWithHref]
})
export class TabsNavComponent{

  constructor() {
    addIcons({map});
    addIcons({restaurant});
    addIcons({bicycle});
    addIcons({clipboard});


   }


}
