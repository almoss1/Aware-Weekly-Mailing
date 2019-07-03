
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
      this.templatePath('../../../'),
      this.destinationPath('./'));
  

  this.fs.copy(
    this.templatePath('../../../.editorconfig'),
    this.destinationPath('./.editorconfig'));
}


  install() {

    this.installDependencies();

  }


};





