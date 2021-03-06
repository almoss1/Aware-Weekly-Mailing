
'use strict';
//Require dependencies
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
const fse = require('fs-extra')


module.exports = class extends Generator {

  async prompting() {

    // Have Yeoman greet the user.

    this.log(

      yosay(`Welcome to the spectacular ${chalk.red('generator-aware-weekly-mailing-g')} generator!`),
      yosay('Current directory: ' + process.cwd())
    );

    const prompts = [

      {

        type: 'confirm',

        name: 'someAnswer',

        message: 'Would you like to enable this option?',

        default: true

      }

    ];

    const props = await this.prompt(prompts);

    // To access props later use this.props.someAnswer;

    this.props = props;

  }

  writing() {

    this.fs.copy(
      this.templatePath('../../'),
      this.destinationPath('./Generators'));
  

  this.fs.copy(
    this.templatePath('../../../.editorconfig'),
    this.destinationPath('./.editorconfig'));

  this.fs.copy(
    this.templatePath('../../../.eslintignore'),
    this.destinationPath('./.eslintignore'));

  this.fs.copy(
    this.templatePath('../../../.gitattributes'),
    this.destinationPath('./.gitattributes'));

  this.fs.copy(
    this.templatePath('../../../##gitignore##'),
    this.destinationPath('./.gitignore'));

  this.fs.copy(
    this.templatePath('../../../.travis.yml'),
    this.destinationPath('./.travis.yml'));

  this.fs.copy(
    this.templatePath('../../../package.json'),
    this.destinationPath('./package.json'));

  this.fs.copy(
    this.templatePath('../../../README.md'),
    this.destinationPath('./README.md'));

  this.fs.copy(
    this.templatePath('../../../LICENSE'),
    this.destinationPath('./LICENSE'));
  
  
  this.fs.copy(
    this.templatePath('../../templates/server/.babelrc'),
    this.destinationPath('generators/templates/server/.babelrc'));

  this.fs.copy(
    this.templatePath('../../templates/server/.editorconfig'),
    this.destinationPath('generators/templates/server/.editorconfig'));

  this.fs.copy(
    this.templatePath('../../templates/server/.env'),
    this.destinationPath('generators/templates/server/.env'));
  
  this.fs.copy(
    this.templatePath('../../templates/server/.gitattributes'),
    this.destinationPath('generators/templates/server/.gitattributes'));

  this.fs.copy(
    this.templatePath('../../templates/server/##gitignore##'),
    this.destinationPath('generators/templates/server/.gitignore'));
  

    }

  install() {

    this.installDependencies();

  }


};





