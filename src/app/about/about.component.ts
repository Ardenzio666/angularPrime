import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  params: any;
  queryParam: any;

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['course'];

  }
}
