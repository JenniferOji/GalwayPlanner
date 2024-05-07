import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader,
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLinkWithHref,
    IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonGrid, IonButton, IonRadio, IonRadioGroup]
})
export class ItineraryPage {

  //getting the data saved in storage 
  myStatus: string = "";
  myStatus2: string = "";
  myStatus3: string = "";
  myStatus4: string = "";
  myStatus5: string = "";


  landmarksChoice: string = '';
  landmarkImage: string = "";
  landmarkDescription: string = '';


  resturauntChoice: string = "";
  resturauntImage: string = "";
  resturauntDescription: string = '';


  activityChoice: string = "";
  activityImage: string = "";
  activityDescription: string = '';


  eveningChoice: string = "";
  eveningImage: string = "";
  eveningDescription: string = '';

  cafeChoice: string = "";
  cafeImage: string = "";
  cafeDescription: string = '';


  constructor(private storage: Storage) { }
  async ionViewWillEnter() {
    await this.storage.create();
   
    this.myStatus = await this.storage.get('status');
    this.myStatus2 = await this.storage.get('status2');
    this.myStatus3 = await this.storage.get('status3');
    this.myStatus4 = await this.storage.get('status4');
    this.myStatus5 = await this.storage.get('status5');

    if (this.myStatus5 === 'hidden') {

      this.cafeChoice = "The Jungle Cafe";
      this.cafeDescription = "Start your day bright and early with a lovely visit to the Jungle Cafe where you can indulge in their beautiful jungle like environment and food";
      this.cafeImage = "assets/images/restaurants/jungle.png"

    }

    else if (this.myStatus5 === 'known') {

      this.cafeChoice = "Nero Cafe";
      this.cafeDescription = "Start your day bright and early with a lovely visit to the Nero Cafe where you can indulge and relax in their peacfull environment and enjoy great food";
      this.cafeImage = "assets/images/restaurants/nero.jpg"


    }

    if (this.myStatus === 'historical') {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      switch (randomNumber) {
        case 1:
          this.landmarksChoice = "Kylemore Abbey";
          this.landmarkDescription = "Venture out to Kylemore Abbey! Surrounded by lush greenery, this historic site offers a glimpse into Ireland's past. Explore the beautiful gardens and capture memorable moments against the abbey's majestic backdrop.";
          this.landmarkImage = "assets/images/landmarks/kylemore.jpg"
          break;
        case 2:
          this.landmarksChoice = "Galway Cathedral";
          this.landmarkDescription = " Venture out to the awe-inspiring Galway Cathedral! Admire the stunning architecture and intricate stained glass windows inside this sacred space.";
          this.landmarkImage = "assets/images/landmarks/cathedral.jpg"
          break;
        case 3:
          this.landmarksChoice = "Lynchs Castle";
          this.landmarkDescription = "Venture out to Lynchs Castle a medieval landmark in Galway City. This fortress stands as a testament to the city's rich history. ";
          this.landmarkImage = "assets/images/landmarks/lynch.jpg"
          break;
        default:
          this.landmarksChoice = "Unknown outcome";
          break;
      }
    }
    else if (this.myStatus === 'natural') {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      switch (randomNumber) {
        case 1:
          this.landmarksChoice = "Aran Islands";
          this.landmarkDescription = "Venture out to the scenic Aran Islands! Discover hidden coves, cycle along coastal trails, and indulge in fresh seafood while immersing yourself in Gaelic culture.";
          this.landmarkImage = "assets/images/landmarks/islands.jpg"
          break;

        case 2:
          this.landmarksChoice = "Connemara National Park";
          this.landmarkDescription = "Venture out to the breathtaking landscapes of Connemara National Park! Hike scenic trails, spot native wildlife, and soak in panoramic views of rolling hills and rugged coastline.";
          this.landmarkImage = "assets/images/landmarks/park.jpg"
          break;
        case 3:
          this.landmarksChoice = "Salthill Promenade";
          this.landmarkDescription = "Venture out for a picturesque walk along the Atlantic Ocean, where visitors can stroll, cycle, or simply soak up the stunning coastal views.";
          this.landmarkImage = "assets/images/landmarks/salthill.jpg"
          break;
        default:
          this.landmarksChoice = "Unknown outcome";
          break;
      }

    }

    if (this.myStatus2 === 'adventurous') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.resturauntChoice = "Oscars Seafood Bistro";
          this.resturauntDescription = "After you've worked up an appetite, indulge in a culinary adventure at Oscar's Seafood Bistro! Dive into delectable seafood dishes crafted with locally sourced ingredients.";
          this.resturauntImage = "assets/images/restaurants/oscars.jpg"
          break;
        case 2:
          this.resturauntChoice = "Tomodachi";
          this.resturauntDescription = "After you've worked up an appetite, indulge in a culinary adventure at Tomadochi, experience a taste of Japan right in the heart of Ireland.";
          this.resturauntImage = "assets/images/restaurants/tomo.jpg"
          break;
        default:
          this.resturauntChoice = "Unknown outcome";
          break;
      }
    }

    else if (this.myStatus2 === 'familiar') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.resturauntChoice = "The Cellar Bar and Resturaunt";
          this.resturauntDescription = "After you've worked up an appetite, savor the cozy ambiance and delicious fare at The Cellar Bar and Restaurant. Treat yourself to hearty Irish classics and signature cocktails in a charming setting.";
          this.resturauntImage = "assets/images/restaurants/cellar.jpg"
          break;
        case 2:
          this.resturauntChoice = "An Pucan";
          this.resturauntDescription = "After you've worked up an appetite, experience the vibrant atmosphere of An Pucan! Enjoy traditional Irish pub grub and live music while mingling with locals and fellow travelers.";
          this.resturauntImage = "assets/images/restaurants/pucan.jpg"
          break;
        default:
          this.resturauntChoice = "Unknown outcome";
          break;
      }
    }

    if (this.myStatus3 === 'outdoor') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.activityChoice = "Wildlands";
          this.activityDescription = "Next, embark on an outdoor adventure at Wildlands! Zip through treetop canopies, conquer challenging obstacles, and immerse yourself in nature's playground.";
          this.activityImage = "assets/images/activities/wildlands.png"
          break;
        case 2:
          this.activityChoice = "River Corrib Kayaking";
          this.activityDescription = "Next, experience the thrill of kayaking along the scenic River Corrib, where every paddle stroke unveils the natural beauty of Galway in a new light.";
          this.activityImage = "assets/images/activities/kayaking.jpg"
          break;
        default:
          this.activityChoice = "Unknown outcome";
          break;
      }
    }

    else if (this.myStatus3 === 'indoor') {
      const randomNumber = Math.floor(Math.random() * 2) + 1;
      switch (randomNumber) {
        case 1:
          this.activityChoice = "Galway Museum";
          this.activityDescription = "Next, uncover Galway's rich history at the Galway Museum! Delve into captivating exhibits showcasing the city's cultural heritage and archaeological treasures.";
          this.activityImage = "assets/images/activities/museum.jpg"
          break;
        case 2:
          this.activityChoice = "Great Escape Rooms";
          this.activityDescription = "Next, test your wits at the Great Escape Rooms! Solve puzzles, crack codes, and race against the clock to escape themed rooms filled with mystery and excitement.";
          this.activityImage = "assets/images/activities/rooms.jpg"
          break;
        default:
          this.activityChoice = "Unknown outcome";
          break;
      }
    }


    if (this.myStatus4 === 'cozy') {

      this.eveningChoice = "Palas";
      this.eveningDescription = "After your long day, wind down with a cozy movie night at Palas! Grab some popcorn, sink into plush seats, and enjoy the latest blockbuster in this stylish cinema.";
      this.eveningImage = "assets/images/activities/palas.jpg"


    }

    else if (this.myStatus4 === 'nightlife') {

      this.eveningChoice = "Electric Nightclub";
      this.eveningDescription = "If you still have energy, dance the night away at Electric Nightclub! Immerse yourself in pulsating beats, vibrant lights, and electric atmosphere as you make unforgettable memories on the dance floor.";
      this.eveningImage = "assets/images/activities/electric.jpg"

    }

  }

  async saveItinerary() {
    await this.storage.set('landmarksChoice', this.landmarksChoice);
    await this.storage.set('landmarkImage', this.landmarkImage);
    await this.storage.set('landmarkDescription', this.landmarkDescription);

    await this.storage.set('resturauntChoice', this.resturauntChoice);
    await this.storage.set('resturauntImage', this.resturauntImage);
    await this.storage.set('resturauntDescription', this.resturauntDescription);

    await this.storage.set('activityChoice', this.activityChoice);
    await this.storage.set('activityImage', this.activityImage);
    await this.storage.set('activityDescription', this.activityDescription);

    await this.storage.set('cafeChoice', this.cafeChoice);
    await this.storage.set('cafeImage', this.cafeImage);
    await this.storage.set('cafeDescription', this.cafeDescription);

    await this.storage.set('eveningChoice', this.eveningChoice);
    await this.storage.set('eveningImage', this.eveningImage);
    await this.storage.set('eveningDescription', this.eveningDescription);


   
  }

}
