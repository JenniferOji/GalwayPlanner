import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
IonItem, IonLabel, IonList, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { RouterLinkWithHref } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton]})
export class RestaurantsPage implements OnInit {
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
      this.places = data.places.restaurants; 
      console.log(this.places);

    });
  }

  img(placeName: string): string {
    if (placeName === 'The Cellar Bar and Resturaunt') {
      return 'https://thisisgalway.ie/wp-content/uploads/2023/07/the-cellar-1.jpg';
    }  
    else if (placeName === 'Oscars') {
      return 'https://1.bp.blogspot.com/-c6OMzcJHxDc/Xv5Rut1RNEI/AAAAAAABng8/nKKYfJEtIRMdw3WpwymwM13Y2iAzESnDwCK4BGAsYHg/s3211/20200702_214704.jpg';
    } 
    else if (placeName === 'An Pucan') {
      return 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/f5/76/1f/we-cannot-wait-to-welcome.jpg';
    }
    else if (placeName === 'The Jungle Cafe') {
      return 'https://i2-prod.galwaybeo.ie/incoming/article5877726.ece/ALTERNATES/s615/1_Jungle-Cafe-Galway-Facebook.jpg';
    }
    else if (placeName === 'Cafe Nero') {
      return 'https://coffeeshops.ie/wp-content/uploads/2023/09/Caffe-Nero-Galway-City-min.jpg';
    }
    else if (placeName === 'Tomodachi') {
      return 'https://c1.staticflickr.com/5/4467/37860029986_7c4a314b6b_b.jpg';
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
      if (placeName === 'Oscars') {
        Browser.open({
          url: 'https://www.tripadvisor.ie/Restaurant_Review-g186609-d2016877-Reviews-Oscar_s_Seafood_Bistro-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'The Cellar Bar and Resturaunt'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Restaurant_Review-g186609-d2542334-Reviews-The_Cellar_Bar_and_Restaurant-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'An Pucan'){
        Browser.open({
          url: 'https://www.tripadvisor.ie/Restaurant_Review-g186609-d2325103-Reviews-An_Pucan_Bar_Restaurant-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'The Jungle Cafe'){
        Browser.open({
          url: '//https://www.tripadvisor.ie/Restaurant_Review-g186609-d3806097-Reviews-Jungle_Cafe_Galway-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Cafe Nero'){
        Browser.open({
          url: 'https://www.tripadvisor.com/ShowUserReviews-g186609-d15669293-r937617006-Caffe_Nero-Galway_County_Galway_Western_Ireland.html'
        });
      }
      if(placeName === 'Tomodachi'){
        Browser.open({
          url: 'https://www.tripadvisor.com/Restaurant_Review-g186609-d11913503-Reviews-Tomodachi_Sushi_Bar-Galway_County_Galway_Western_Ireland.html'
        });
      }
    } catch (error) {
      console.error('Error opening browser:', error);
    }

  }
}