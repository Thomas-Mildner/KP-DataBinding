export interface Joke {
  id: string;
  joke: string;
  category: string;
  reformat(firstName: string, lastName: string): string;
}

export interface JokesArrayResponse {
  count: number;
  jokes: Joke[];
}

export class FormattableJoke implements Joke {

  id: string;
  joke: string;
  category: string;
  private jokeTemplate: string;

  constructor(joke: Joke) {
    this.id = joke.id;
    this.category = joke.category;
    this.jokeTemplate = joke.joke
      .replace('Chuck', '${firstName}')
      .replace('Norris', '${lastName}');
    this.reformat('Chuck', 'Norris');

  }

  reformat(firstName: string, lastName: string): string {
    this.joke = this.jokeTemplate
      .replace('${firstName}', firstName)
      .replace('${lastName}', lastName);
    return this.joke;
  }
}
