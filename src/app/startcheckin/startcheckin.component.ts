import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSelect(id){
    
    this.route.navigate(['/checkin',id])
  }

}
