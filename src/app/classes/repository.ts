export class Repository {
    name:string
    description:string
    owner:object
    url:string

    constructor(name:string,description:string,owner:object,url:string){
        this.name = name
        this.description = description
        this.owner = owner
        this.url = url  

    }
}
