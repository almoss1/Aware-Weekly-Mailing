



'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the spectacular ${chalk.red('generator-aware-weekly-mailing-g')} generator!`)
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
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
};

module.exports = class extends Generator {
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
};




var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();


env.register(require.resolve('generator-aware-weekly-emailing-g'), 'npm:app');
env.run('npm:app', done);

env.lookup(function () {
  env.run('angular');
});




// Main package function
function awareWeeklyMailingG(input) {
  // Returns true if the input is either undefined, null, or empty, false otherwise
  return (input === undefined || input === null || input === '');
}

// Make the main function available to other packages that require us
module.exports = awareWeeklyMailingG;


