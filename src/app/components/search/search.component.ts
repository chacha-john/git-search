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

  userInfo: User = new User('','','','','','','')

  searchedItems:object = []

  constructor(private fetchSerive:FetchService) { }

  onSubmit(term:NgForm){  
    if (term.value.iput == "users"){
      this.fetchSerive.getInfo(term.value.username).subscribe((res)=>{
      console.log(res);
      this.userInfo.bio = res.bio
      this.userInfo.name = res.name
      this.userInfo.repos = res.public_repos
      this.userInfo.followers = res.followers
      this.userInfo.following = res.following
      this.userInfo.avatar = res.avatar_url
      this.userInfo.login = res.login
      
    })
    
    }
    else if (term.value.iput=="repos"){
      this.fetchSerive.getRepos(term.value.username).subscribe((res)=>{
        this.searchedItems = res.items
        console.log(this.searchedItems);
        
        
      })
    }
    else{
      console.log(Error);
      
    }  

  }

  ngOnInit(): void {
  }

}
