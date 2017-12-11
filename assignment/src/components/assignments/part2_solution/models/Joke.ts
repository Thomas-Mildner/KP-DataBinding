/**
 * Basic interface for a Joke
 * also used to pseudo type the API response
 */
export interface Joke {
  id: string;
  joke: string;
  category: string;
  reformat(firstName: string, lastName: string): string;
}

/**
 * Wrapper for the API response for pseudo typing
 */
export interface JokesArrayResponse {
  count: number;
  jokes: Joke[];
}

/**
 * Helper class to reformat all jokes at once
 */
export class FormattableJoke implements Joke {

  id: string;
  joke: string;
  category: string;
  private jokeTemplate: string;

  /**
   * Default constructor
   * replaces the default first and last name by a template string which is used in the reformat method
   * @param joke joke to wrap
   */
  constructor(joke: Joke) {
    this.id = joke.id;
    this.category = joke.category;
    this.jokeTemplate = joke.joke
      .replace('Chuck', '${firstName}')
      .replace('Norris', '${lastName}');
    this.reformat('Chuck', 'Norris');

  }

  /**
   * Helper method to replace all template strings in the jokeTemplate by actual names
   * @param firstName first name to set in the joke
   * @param lastName last name to set in the joke
   */
  reformat(firstName: string, lastName: string): string {
    this.joke = this.jokeTemplate
      .replace('${firstName}', firstName)
      .replace('${lastName}', lastName);
    return this.joke;
  }
}
