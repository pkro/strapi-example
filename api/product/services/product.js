"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  find(params, populate) {
    console.log(params);
    // you could email something here for example; doesn't seem to be the right place for filtering by custom parameters

    // if (params._titles_only) {
    //   return strapi
    //     .query("product")
    //     .find(params, populate)
    //     .map((product) => product.name);
    // }

    return strapi.query("product").find(params, populate);
  },
};
