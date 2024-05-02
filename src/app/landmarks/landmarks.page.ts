import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.page.html',
  styleUrls: ['./landmarks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
  IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton]
})
export class LandmarksPage implements OnInit {
  places: any;
  type: any;
  expandedDescriptions: { [key: string]: boolean } = {};
  hidden: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.type = history.state.type; 
    const url = 'assets/json/places.json'; 
    this.http.get<any>(url).subscribe(data => {
      this.places = data.places.landmarks; 
      console.log(this.places);

    });
  }

  img(placeName: string): string {
    if (placeName === 'Kylemore Abbey') {
      return 'https://i.pinimg.com/originals/ab/46/10/ab461063aad4d54b3d50b52a9b99ad12.jpg';
    } else if (placeName === 'Galway Cathedral') {
      return 'https://www.agoda.com/wp-content/uploads/2020/02/Galway-Cathedral-things-to-do-in-Galway-Ireland.jpg';
    } else if (placeName === 'Aran Islands'){
      return 'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/e23de216-1621-4f09-98a4-769678d2304c/ugc-jdodonncada-na-seacht-dteampaill-aran-islands-galway.jpg'
    }
    else if (placeName === 'Connemara National Park'){
      return 'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/da37b066-aac9-44fe-b778-6970b6317271/header-connemara-galway.jpg'
    }
    else {
      return ''; 
    }
  }

  show(place: any) {
    place.hidden = !place.hidden;
  }

  openBrowser(placeName: string): void {
    try {
      if (placeName === 'Kylemore Abbey') {
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g674246-d215841-Reviews-Kylemore_Abbey_Victorian_Walled_Garden-Kylemore_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Galway Cathedral'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d215066-Reviews-Galway_Cathedral-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Aran Islands'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/AttractionProductReview-g186609-d14085523-Aran_Islands_and_Cliffs_of_Moher_Cruise_from_Galway-Galway_County_Galway_Western_I.html'
        });
      }
      if(placeName === 'Connemara National Park'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d546269-Reviews-Connemara_National_Park_Visitor_Centre-Galway_County_Galway_Western_Ireland.html'
        });
      }
      
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  }
  
  
  

}