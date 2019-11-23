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

async function validateComponentName(input) {
  const hasValidName =
    textHasProperLength(input) && textStartsWithCapitalLetter(input);

  const dirExist = await directoryDoesNotExistYet(input);

  if (!hasValidName) {
    console.error(
      "\nIncorrect name, please remember to use Capital letter and proper length!"
    );
    return;
  }

  if (dirExist) {
    console.error("\nComponent already exist, please enter some other name!");
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

async function generateComponentDirAndFiles(config) {
  const { name } = config;
  const dirPath = path.resolve(componentsDirectoryPath, name);

  await fs.mkdir(dirPath);

  const componentFileContent = templates.component.create(name);

  await fs.writeFile(path.resolve(dirPath, `${name}.js`), componentFileContent);

  console.log(`Component ${name} has been successully created`);
}

async function initializeGenerator(mode = ENV) {
  try {
    if (mode !== "development") {
      throw new Error("> Generator is only available in development mode");
    }

    const userAnswers = await promptQuestions();

    generateComponentDirAndFiles(userAnswers);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  textStartsWithCapitalLetter,
  textHasProperLength,
  directoryDoesNotExistYet
};

module.exports.default = initializeGenerator();
