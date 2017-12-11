export class Actor {
  private _firstName: string = '';
  private _lastName: string = '';
  private _birthDate: string = '';
  private _favoriteMovies: string[] = [];
  private _imageLink: string = '';

  get firstName(): string {
    return this._firstName;
  }
  set firstName(newName: string) {
    this._firstName = newName;
    console.log(newName);
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
    console.log(lastName);
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(birthDate: string) {
    this._birthDate = birthDate;
    console.log(birthDate);
  }

  get favoriteMovies() : string[] {
    return this._favoriteMovies;
  }

  set favoriteMovies(movies: string[]) {
    this._favoriteMovies = movies;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  set imageLink(imageLink: string) {
    this._imageLink = imageLink;
  }
}
