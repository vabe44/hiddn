import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  modalActive = false;
  constructor(private location: Location) { }

  ngOnInit() {
  }

  toggleModal(event: Event) {
    event.stopPropagation();
    this.modalActive = !this.modalActive;
  }

  showAchievementsDetails() {
    this.modalActive = true;
  }

  hideModal() {
    this.modalActive = false;
  }

  navigateBack() {
    this.location.back();
  }
}
