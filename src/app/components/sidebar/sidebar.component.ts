import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { FetchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loggedInUser:string = "chacha-john"

  defaultUser:User = new User('','','','','','','')
  
  userLink = ""

  constructor(private fetchService:FetchService) { }

  ngOnInit(): void {
    // this.fetchService.getInfo(this.loggedInUser).subscribe((res)=>{
    //   this.defaultUser.bio = res.bio
    //   this.defaultUser.name = res.name
    //   this.defaultUser.repos = res.public_repos
    //   this.defaultUser.followers = res.followers
    //   this.defaultUser.following = res.following
    //   this.defaultUser.avatar = res.avatar_url
    //   this.defaultUser.login = res.login
    //   this.userLink = res.html_url

    // })
  }

}
