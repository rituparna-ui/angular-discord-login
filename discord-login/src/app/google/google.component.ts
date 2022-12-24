import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css'],
})
export class GoogleComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.queryParams.subscribe((p) => {
      console.log(p);
    });
  }
}
