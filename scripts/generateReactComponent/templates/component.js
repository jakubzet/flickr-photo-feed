function create(name) {
  return `import React from "react";

const ${name} = () => <div>Hello world!</div>;
  `;
}

module.exports = {
  create
};
