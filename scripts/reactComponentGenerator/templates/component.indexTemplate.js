/* istanbul ignore next */
function create(name) {
  return `export { ${name} as default } from "./${name}";`;
}

module.exports = {
  create
};
