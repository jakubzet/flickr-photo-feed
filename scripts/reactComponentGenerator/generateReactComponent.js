const path = require("path");
const fs = require("fs-extra");
const inquirer = require("inquirer");
const templates = require("./templates");

const ENV = process.env.NODE_ENV || "development";

// TODO: Prepare config initialization function
const componentsDirectoryPath = path.resolve(
  __dirname,
  "../../react/components"
);

function textStartsWithCapitalLetter(text) {
  const firstChar = text.charAt(0);
  return firstChar.toUpperCase() === firstChar;
}

function textHasProperLength(text) {
  return text.length > 3 && text.length < 240;
}

function directoryDoesNotExistYet(name) {
  const dirPath = path.resolve(componentsDirectoryPath, name);

  return new Promise(resolve => {
    fs.stat(dirPath, err => {
      resolve(!err);
    });
  });
}

async function addComponentExport(name) {
  const dirPath = path.resolve(componentsDirectoryPath, "index.js");
  const indexFileBuffer = await fs.readFile(dirPath);
  let indexFileContent = indexFileBuffer.toString().trim();

  indexFileContent += `\nexport { default as ${name} } from "./${name}";\n`;

  await fs.writeFile(dirPath, indexFileContent);

  console.log(
    `> Component ${name} export has been successully added into components' index file`
  );
}

async function generateComponentDirAndFiles(config) {
  const { name } = config;
  const dirPath = path.resolve(componentsDirectoryPath, name);
  const { componentTpl, styledTpl, testTpl, indexTpl } = templates;

  await fs.mkdir(dirPath);

  await fs.writeFile(
    path.resolve(dirPath, `${name}.js`),
    componentTpl.create(name)
  );

  await fs.writeFile(
    path.resolve(dirPath, `styled.js`),
    styledTpl.create(name)
  );

  await fs.writeFile(
    path.resolve(dirPath, `${name}.test.js`),
    testTpl.create(name)
  );

  await fs.writeFile(path.resolve(dirPath, "index.js"), indexTpl.create(name));

  console.log(`> Component ${name} has been successully created`);

  addComponentExport(name);
}

async function validateComponentName(input) {
  const trimmedInput = input.replace(/ /gim, "");
  const hasValidName =
    textHasProperLength(trimmedInput) &&
    textStartsWithCapitalLetter(trimmedInput);
  const dirExist = await directoryDoesNotExistYet(trimmedInput);

  if (!hasValidName) {
    console.error(
      "\n> Incorrect name, please remember to use Capital letter and proper length!"
    );
    return;
  }

  if (dirExist) {
    console.error("\n> Component already exist, please enter some other name!");
    return;
  }

  return true;
}

async function promptQuestions() {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Enter Component's name",
      validate: validateComponentName
    }
  ];

  const results = await inquirer.prompt(questions);

  return results;
}

async function initializeGenerator(mode = ENV) {
  if (mode !== "development") {
    throw new Error("> Generator is only available in development mode");
  }

  const userAnswers = await promptQuestions();

  generateComponentDirAndFiles(userAnswers);
}

module.exports = {
  textStartsWithCapitalLetter,
  textHasProperLength,
  directoryDoesNotExistYet,
  promptQuestions,
  initializeGenerator
};
