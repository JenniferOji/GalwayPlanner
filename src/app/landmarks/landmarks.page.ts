import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
  IonIcon,
IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { TabsNavComponent } from '../tabs-nav/tabs-nav.component';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.page.html',
  styleUrls: ['./landmarks.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
  IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton, TabsNavComponent]
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
    //https://www.jsonblob.com/1236431268022706176
    const url = 'https://www.jsonblob.com/api/jsonBlob/1236431268022706176'; 
    this.http.get<any>(url).subscribe(data => {
      this.places = data.places.landmarks; 
      console.log(this.places);

    });
  }

  img(placeName: string): string {
    if (placeName === 'Kylemore Abbey') {
      return 'assets/images/landmarks/kylemore.jpg';
    } 
    else if (placeName === 'Galway Cathedral') {
      return 'assets/images/landmarks/cathedral.jpg';
    }
     else if (placeName === 'Aran Islands'){
      return 'assets/images/landmarks/islands.jpg'
    }
    else if (placeName === 'Connemara National Park'){
      return 'assets/images/landmarks/park.jpg'
    }
    else if (placeName === 'Lynchs Castle'){
      return 'assets/images/landmarks/lynch.jpg'
    }
    else if (placeName === 'Salthill Promenade'){
      return 'assets/images/landmarks/salthill.jpg'
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
      if(placeName === 'Salthill Promenade'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d215937-Reviews-Salthill_Promenade-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Lynchs Castle'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Attraction_Review-g186609-d215919-Reviews-Lynch_s_Castle-Galway_County_Galway_Western_Ireland.html'
        });
      }
      
    } catch (error) {
      console.error('Error opening browser:', error);
    }
  }
  

}