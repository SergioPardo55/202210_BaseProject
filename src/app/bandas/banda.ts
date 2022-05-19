export class Banda {
  id: number;
  name: string;
  numberOfMembers:number;
  description: string;
  popularSongs: String[];
  image:string;

  constructor(id:number,name:string,numberOfMembers:number,description:string,popularSongs: String[],image:string){
    this.id=id;
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.description = description;
    this.popularSongs = popularSongs;
    this.image=image;
  }

}
