import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';
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

  constructor(private storage: Storage, private router: Router) { }

  async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    }

    async saveStatus() {
      await this.storage.set('status', this.myStatus)
      .then(
      ()=>{
      this.router.navigate(['/itinerary'])
      })
      .catch();
      }
      
  ngOnInit() {
  }

}
