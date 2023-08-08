public with sharing class RetrieveJokes {
  @AuraEnabled(cacheable=true)
  public static JokeApiResponse retrieveJokes() {
    Map<String, String> headers = new Map<String, String>{
      'Authorization' => 'Bearer 123456'
    };

    ExternalAPIRequest apiCall = new ExternalAPIRequest(
        'https://v2.jokeapi.dev/joke/Any'
      )
      .setMethod('GET')
      .setHeaders(headers);

    HttpResponse response = apiCall.send();
    String responseBody = response.getBody();

    // Deserialize the API response into the custom JokeApiResponse class
    JokeApiResponse apiResponse = (JokeApiResponse) JSON.deserialize(
      responseBody,
      JokeApiResponse.class
    );

    return apiResponse;
  }
}
