const stripIndent = require("strip-indent");

/* istanbul ignore next */
function create(name) {
  return stripIndent(`
    import { Meta, Story, Preview, Props } from "@storybook/addon-docs/blocks";
    import ${name} from "./${name}";

    <Meta
      title="Components|${name}"
      component={${name}}
      parameters={{ jest: ["${name}"] }}
    />

    # ${name}

    ${name} description placeholder.

    <Preview>
      <Story name="default">
        <${name} />
      </Story>
    </Preview>

    <Props of={${name}} />
  `).trim();
}

module.exports = {
  create
};
