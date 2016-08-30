"use strict";

module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "property-no-unknown": [true, { ignoreProperties: ["composes"] }],
    "selector-list-comma-newline-after": null
  }
};
