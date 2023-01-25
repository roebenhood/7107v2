import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.css']
})
export class JobseekersComponent implements OnInit {

  jobSeeker1 = '../../../../../assets/images/home-jobseekers.jpg';
  jobSeeker2 = '../../../../../assets/images/home-for-employers.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
