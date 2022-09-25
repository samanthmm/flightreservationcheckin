import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-chekin',
  templateUrl: './chekin.component.html',
  styleUrls: ['./chekin.component.css']
})
export class ChekinComponent implements OnInit {
   data:any;
  constructor(private route:ActivatedRoute,private service:DataService) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get("id"));

  }

}
