import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile Page Title';

  imageUrl = 'https://wgsi.utoronto.ca/wp-content/uploads/2020/12/blank-profile-picture-png.png';
  
  viewCount1 = 0;

  name = "Mannan";
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementCount()
{
  this.viewCount1++;
}
}
