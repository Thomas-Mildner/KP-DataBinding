/**
 * Plain actor model
 * logs all setter calls to the console to demonstrate when the data binding happens
 */
export class Actor {
  private _firstName: string = '';
  private _lastName: string = '';
  private _birthDate: string = '';
  private _favoriteMovies: string[] = [];
  private _imageLink: string = '';

  /* get and set methods are transpiled as JS property */
  get firstName(): string {
    return this._firstName;
  }
  set firstName(newName: string) {
    this._firstName = newName;
    console.log(newName);
  }

  /* get and set methods are transpiled as JS property */
  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
    console.log(lastName);
  }

  /* get and set methods are transpiled as JS property */
  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(birthDate: string) {
    this._birthDate = birthDate;
    console.log(birthDate);
  }

  /* get and set methods are transpiled as JS property */
  get favoriteMovies(): string[] {
    return this._favoriteMovies;
  }

  set favoriteMovies(movies: string[]) {
    this._favoriteMovies = movies;
  }

  /* get and set methods are transpiled as JS property */
  get imageLink(): string {
    return this._imageLink;
  }

  set imageLink(imageLink: string) {
    this._imageLink = imageLink;
    console.log(imageLink);
  }
}
