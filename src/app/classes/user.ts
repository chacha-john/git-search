export class User {
    name:string
    bio:string
    repos:string
    gists:string
    followers:string
    following:string
    avatar:string
    login:string

    constructor(name:string,bio:string,repos:string,gists:string,followers:string,following:string,avatar:string,login:string){
        this.name = name
        this.bio = bio
        this.repos = repos
        this.gists = gists
        this.followers = followers
        this.following = following
        this.avatar = avatar
        this.login = login

    }
}
