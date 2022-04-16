import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FetchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userInfo: any = []

  constructor(private fetchSerive:FetchService) { }

  onSubmit(term:NgForm){
    this.fetchSerive.getInfo(term.value.username).subscribe((res)=>{
      this.userInfo = res
    })

    console.log(this.userInfo);
    

  }

  ngOnInit(): void {
  }

}
