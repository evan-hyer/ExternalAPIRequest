# API External Callout Helper

This is supposed to demosrate the power of the builder design pattern and how to enable customizations for different api types and types

## Additional details

The ExternalAPIRequest class contains a nested Builder class that is used to construct ExternalAPIRequest objects. The Builder class contains several methods that allow you to set various properties of the ExternalAPIRequest, such as the endpoint, method, request body, and headers.

The Builder class has a constructor that takes an endpoint parameter and sets default values for the other properties. The method method allows you to set the HTTP method for the request. The body method allows you to set the body of the request. The header method allows you to set headers for the request.

The build method creates a new ExternalAPIRequest object and sets its httpRequest property to a new HttpRequest object. It then sets the endpoint, method, body, and headers of the httpRequest object using the values that were set in the Builder object. Finally, it returns the new ExternalAPIRequest object.

One of the benefits of the Builder pattern is that it allows you to create objects with optional parameters in a clear and concise way. In this example, the body property is optional, so if it is not set, the httpRequest object will not have a body. This can help simplify the code and make it easier to reason about.

## Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
