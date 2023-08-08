public with sharing class ExternalAPIRequest {
  private String endpoint;
  private String method;
  private Map<String, String> headers;
  private String body;

  public ExternalAPIRequest(String endpoint) {
    this.endpoint = endpoint;
  }

  public ExternalAPIRequest setMethod(String method) {
    this.method = method;
    return this;
  }

  public ExternalAPIRequest setHeaders(Map<String, String> headers) {
    this.headers = headers;
    return this;
  }

  public ExternalAPIRequest setBody(String body) {
    this.body = body;
    return this;
  }

  public HttpResponse send() {
    HttpRequest request = new HttpRequest();
    request.setEndpoint(this.endpoint);
    request.setMethod(this.method);
    request.setHeader('Content-Type', 'application/json');

    if (headers != null) {
      for (String key : headers.keySet()) {
        request.setHeader(key, headers.get(key));
      }
    }

    if (body != null) {
      request.setBody(body);
    }

    Http http = new Http();
    return http.send(request);
  }
}
