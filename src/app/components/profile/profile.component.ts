import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  slides = [
    {img: '/assets/images/people/amber.jpg'},
    {img: '/assets/images/people/anna.jpg'},
    {img: '/assets/images/people/catlyn.jpg'},
    {img: '/assets/images/people/elena.jpg'},
    {img: '/assets/images/people/jin.jpg'},
    {img: '/assets/images/people/kate.jpg'},
  ];

  instagramSliderConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 3,
    'dots': true,
    'arrows': false
  };

  profilePictureSliderConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'dots': false,
    'arrows': false
  };

  ngOnInit() {
  }
}
