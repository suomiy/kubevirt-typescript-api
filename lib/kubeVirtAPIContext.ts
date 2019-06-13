/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class KubeVirtAPIContext extends msRest.ServiceClient {

  /**
   * Initializes a new instance of the KubeVirtAPIContext class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.KubeVirtAPIOptions) {

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost";
    this.requestContentType = "application/json; charset=utf-8";

  }
}
