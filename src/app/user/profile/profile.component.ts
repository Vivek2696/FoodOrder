import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/Model/UserProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: UserProfile;

  constructor() {
    this.userDetails = {
      id: 'email',
      name: "name",
      password: "",
      phone: "phone",
      profession: "string",
      interests: ["ice cream", "pizza", "Curry"],
      imageUrl: "/assets/images/profile_pic.png"
    }
  }

  ngOnInit(): void {
  }

}
