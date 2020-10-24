import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public homePageImages;
  ngOnInit() {

   this.homePageImages = ['briefcase', 'barn', 'saw', 'weld', 'workstation'].map((n) => `../../assets/images/${n}.jpg`);
  }

}
