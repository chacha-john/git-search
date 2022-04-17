import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { FetchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userInfo: User = new User('','','','','','','','')

  constructor(private fetchSerive:FetchService) { }

  onSubmit(term:NgForm){
    this.fetchSerive.getInfo(term.value.username).subscribe((res)=>{
      this.userInfo.bio = res.bio
      this.userInfo.name = res.name
      this.userInfo.repos = res.public_repos
      this.userInfo.followers = res.followers
      this.userInfo.following = res.following
      this.userInfo.gists = res.public_gists
      this.userInfo.avatar = res.avatar_url
      this.userInfo.login = res.login
      
    })

    

  }

  ngOnInit(): void {
  }

}
