import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton, IonRadio, IonRadioGroup]
  })
export class QuestionsPage implements OnInit {
  myStatus: string = "";
  myStatus2: string = "";
  myStatus3: string = "";
  myStatus4: string = "";
  myStatus5: string = "";


  constructor(private storage: Storage, private router: Router) { }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    this.myStatus2 = await this.storage.get('status2');
    this.myStatus3 = await this.storage.get('status3');
    this.myStatus4 = await this.storage.get('status4');
    this.myStatus5 = await this.storage.get('status5');

    }

    async saveStatus() {
      await this.storage.set('status', this.myStatus)
      await this.storage.set('status2', this.myStatus2)
      await this.storage.set('status3', this.myStatus3)
      await this.storage.set('status4', this.myStatus4)
      await this.storage.set('status5', this.myStatus5)


      .then(
      ()=>{
      this.router.navigate(['/itinerary'])
      })
      .catch();
      }
      
  ngOnInit() {
  }

}
