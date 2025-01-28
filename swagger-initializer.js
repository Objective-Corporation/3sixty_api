window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "openapi.json",
    supportedSubmitMethods: [], 
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    "deepLinking" : true,
    "defaultModelExpandDepth" : "1",
    "defaultModelsExpandDepth" : "-1",
    "displayOperationId" : false,
    "displayRequestDuration" : false,
    "docExpansion" : "none",
    "operationsSorter" : "method",
    "showCommonExtensions" : false,
    "showExtensions" : false,
    "tagsSorter" : "alpha",
    "validatorUrl" : ""
  });

  //</editor-fold>
};
