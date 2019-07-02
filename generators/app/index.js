
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



   
    // fse.copy('./', './generators/', {
    //         clobber: true,
    //         filter: n => {
    //              if (fs.lstatSync(n).isDirectory()) {
    //                 return true;
    //             }
    //             var result = /\/app\//.test(n);
    //             //console.log(result ? 'copied' : 'skipped', n);
    //             return result;
    //         }
    //     },
    //     //() => console.log('done')
    // );
    // fse.copySync('_package.json', 'package.json')
    // fse.copySync('_README.md', 'README.md')
    fse.copySync('/generators/*', 'generators/')
    //  fse.copySync('_generators/templates/server/_README.md', 'generators/templates/server/README.md')
  //   fse.copySync('_generators/templates/server/_package.json', 'generators/templates/server/_package.json')
  //   fse.copySync('_generators/templates/server/_modernizr.json', 'generators/templates/server/_modernizr.json')
  //   fse.copySync('_generators/templates/server/_ldws-server.code-workspace', 'generators/templates/server/ldws-server.code-workspace')




  // //Copy application files

  // /////Generators
  // /////APP
  //   fse.copySync('_generators/app/templates/_dummyfile.txt', '_app/templates/_dummyfile.txt')
  //   fse.copySync('_generators/app/templates/_index.js', '_app/templates/_index.js')
 

      

  ///templates
  //server
    ///////data
    ///////cache

     /////alerts


  //   fse.copySync('_generators/templates/server/data/cache/_alerts.json', 'generators/templates/server/data/cache/alerts.json')
  //   fse.copySync('_generators/templates/server/data/cache/_solutions.json', 'generators/templates/server/data/cache/solutions.json')
  //   fse.copySync('_generators/templates/server/data/cache/_status.json', 'generators/templates/server/data/cache/status.json')
  //   fse.copySync('_generators/templates/server/data/config/_database.txt', 'generators/templates/server/data/config/database.txt')
  //   fse.copySync('_generators/templates/server/data/config/_sentry.txt', 'generators/templates/server/data/config/sentry.txt')
     
  // //////sql


  //   fse.copySync('_generators/templates/server/data/config/sql/_alerts.sql', 'generators/templates/server/data/config/sql/alerts.sql')
  //   fse.copySync('_generators/templates/server/data/config/sql/_minmax.sql', 'generators/templates/server/data/config/sql/minmax.sql')
  //   fse.copySync('_generators/templates/server/data/config/sql/_solutions.sql', 'generators/templates/server/data/config/sql/solutions.sql')
  //   fse.copySync('_generators/templates/server/data/config/sql/_status.sql', 'generators/templates/server/data/config/sql/status.sql')
  //   fse.copySync('_generators/templates/server/data/config/sql/_wetndry.sql', 'generators/templates/server/data/config/sql/wetndry.sql')



  
  //       /////logs

  //   fse.copySync('_generators/templates/server/data/logs/_gitkeep', 'generators/templates/server/data/logs/.gitkeep')


  //   ///.gitkeep

     

  //         ///////src
  //     fse.copySync('_generators/templates/server/src/_config.js', 'generators/templates/server/src/config.js')
  //     fse.copySync('_generators/templates/server/src/_list.js', 'generators/templates/server/src/list.js')
  //     fse.copySync('_generators/templates/server/src/_refresh.js', 'generators/templates/server/src/refresh.js')
  //     fse.copySync('_generators/templates/server/src/_refresh.test.js', 'generators/templates/server/src/refresh.test.js')
  //     fse.copySync('_generators/templates/server/src/_server.js', 'generators/templates/server/src/server.js')
         



  //             //////config
  
  //     fse.copySync('_generators/templates/server/src/config/_database.js', 'generators/templates/server/src/config/_database.js')
  //     fse.copySync('_generators/templates/server/src/config/_database.test.js', 'generators/templates/server/src/config/_database.test.js')
  //     fse.copySync('_generators/templates/server/src/config/_locations.js', 'generators/templates/server/src/config/_locations.js')
  //     fse.copySync('_generators/templates/server/src/config/_locations.test.js', 'generators/templates/server/src/config/_locations.test.js')
  //     fse.copySync('_generators/templates/server/src/config/_logging.js', 'generators/templates/server/src/config/_logging.js')
  //     fse.copySync('_generators/templates/server/src/config/_logging.test.js', 'generators/templates/server/src/config/_logging.test.js')
  //     fse.copySync('_generators/templates/server/src/config/_tracker.js', 'generators/templates/server/src/config/_tracker.js')
  //     fse.copySync('_generators/templates/server/src/config/_tracker.tets.js', 'generators/templates/server/src/config/_tracker.test.js')
             

  



  //     fse.copySync('_generators/templates/server/_gulpfile.js', 'generators/templates/server/gulpfile.js')
  //     fse.copySync('_editorconfig', '.editorconfig')
  //     fse.copySync('_eslintignore', '.eslintignore')
  //     fse.copySync('_gitattributes', '.gitattributes')
  //     fse.copySync('_gitignore', '.gitignore')
  //     fse.copySync('_travis.yml', '.travis.ym')
  //     fse.copySync('_yo-rc.json', '.yo-rc.json')


  }

  install() {

    this.installDependencies();

  }


};



// module.exports = yeoman.generator.Base.extend({
// //Configurations will be loaded here.

//     prompting: function() {

//         this.log(
//             yosay(`Welcome to the tremendous ${chalk.red('generator-aware-weekly-mailing-g')} generator!`)
//          );

//         var done = this.async();
//         this.prompt({
//         type: 'input',
//         name: 'name',
//         message: 'Your project name',
//         //Defaults to the project's folder name if the input is skipped
//         default: this.appname
//         }, function(answers) {
//         this.props = answers
//         this.log(answers.name);
//         done();
//         }.bind(this));
//     },
//     writing: {
//         //Copy the configuration files
//         config: function () {
//                 this.fs.copyTpl(
//                   this.templatePath('_package.json'),
//                   this.destinationPath('package.json'), {
//                       name: this.props.name
//                     }
//                 );
//                 this.fs.copyTpl(
//                   this.templatePath('_README.md'),
//                   this.destinationPath('README.md'), {
//                       name: this.props.name
//                     }
//                 );

//                 this.fs.copyTpl(
//                   this.templatePath('_generators/templates/server/_README.md'),
//                   this.destinationPath('generators/templates/server/README.md'), {
//                       name: this.props.name
//                     }
//                 );

//                 this.fs.copyTpl(
//                   this.templatePath('_generators/templates/server/_package.json'),
//                   this.destinationPath('generators/templates/server/package.json'), {
//                       name: this.props.name
//                     }
//                 );

//                 this.fs.copyTpl(
//                   this.templatePath('_generators/templates/server/_modernizr.json'),
//                   this.destinationPath('generators/templates/server/modernizr.json'), {
//                       name: this.props.name
//                     }
//                 );

//                 this.fs.copyTpl(
//                   this.templatePath('_generators/templates/server/_ldws-server.code-workspace'),
//                   this.destinationPath('generators/templates/server/ldws-server.code-workspace'), {
//                       name: this.props.name
//                     }
//                 );

                
//             },
    
//             //Copy application files
//         app: function() {
           
//             /////Generators
//             /////APP
            
//           this.fs.copy(
//             this.templatePath('_app/templates/_dummyfile.txt'),
//             this.destinationPath('app/templates/dummyfile.txt'));
                
//           this.fs.copy(
//             this.templatePath('_app/templates/_dummyfile.txt'),
//             this.destinationPath('app/index.js'));
                
    
//             ///templates
//             //server
//               ///////data
//               ///////cache

//                /////alerts
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/cache/_alerts.json'),
//               this.destinationPath('generators/templates/server/data/cache/alerts.json'));
//             ////solutions
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/cache/_solutions.json'),
//               this.destinationPath('generators/templates/server/data/cache/alerts.json'));
//               ////status
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/cache/_status.json'),
//               this.destinationPath('generators/templates/server/data/cache/alerts.json'));
//             ///config
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/_database.txt'),
//               this.destinationPath('generators/templates/server/data/config/database.txt'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/_sentry.txt'),
//               this.destinationPath('generators/templates/server/data/config/sentry.txt'));


//             //////sql
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/sql/_alerts.sql'),
//               this.destinationPath('generators/templates/server/data/config/sql/alerts.sql'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/sql/_minmax.sql'),
//               this.destinationPath('generators/templates/server/data/config/sql/minmax.sql'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/sql/_solutions.sql'),
//               this.destinationPath('generators/templates/server/data/config/sql/solutions.sql'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/sql/_status.sql'),
//               this.destinationPath('generators/templates/server/data/config/sql/status.sql'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/config/sql/_wetndry.sql'),
//               this.destinationPath('generators/templates/server/data/config/sql/wetndry.sql'));
              
//                   /////logs
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/logs'),
//               this.destinationPath('generators/templates/server/data/logs'));

//               ///.gitkeep

//                         ///////secrets

//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/secrets/_aware-storage-account.txt'),
//               this.destinationPath('generators/templates/server/data/secrets/aware-storage-account.txt'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/secrets/_dababase-aware.txt'),
//               this.destinationPath('generators/templates/server/data/secrets/dababase-aware.txt'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/secrets/_dababase-dev.txt'),
//               this.destinationPath('generators/templates/server/data/secrets/dababase-dev.txt'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/secrets/_dababase-prod.txt'),
//               this.destinationPath('generators/templates/server/data/secrets/dababase-prod.txt'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/data/secrets/_sentry-test.txt'),
//               this.destinationPath('generators/templates/server/data/secrets/sentry-test.txt'));


//                     ///////src

//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/_config.js'),
//               this.destinationPath('generators/templates/server/src/config.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/_list.js'),
//               this.destinationPath('generators/templates/server/src/list.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/_refresh.js'),
//               this.destinationPath('generators/templates/server/src/refresh.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/_refresh.test.js'),
//               this.destinationPath('generators/templates/server/src/config.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/_server.js'),
//               this.destinationPath('generators/templates/server/src/server.js'));
//                         //////config
            
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_database.js'),
//               this.destinationPath('generators/templates/server/src/config/database.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_database.test.js'),
//               this.destinationPath('generators/templates/server/src/config/database.test.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_locations.js'),
//               this.destinationPath('generators/templates/server/src/config/locations.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_locations.test.js'),
//               this.destinationPath('generators/templates/server/src/config/locations.test.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_logging.js'),
//               this.destinationPath('generators/templates/server/src/config/logging.js'));

//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_logging.test.js'),
//               this.destinationPath('generators/templates/server/src/config/logging.test.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_tracker.js'),
//               this.destinationPath('generators/templates/server/src/config/tracker.js'));
//             this.fs.copy(
//               this.templatePath('_generators/templates/server/src/config/_tracker.test.js'),
//               this.destinationPath('generators/templates/server/src/config/tracker.js'));

//             this.fs.copy(
//               this.templatePath('_generators/templates/server/_gulpfile.js'),
//               this.destinationPath('generators/templates/server/src/config/gulpfile.js'));


          

//             this.fs.copy(
//               this.templatePath('_.editorconfig'),
//               this.destinationPath('editorconfig'));
        
//             this.fs.copy(
//               this.templatePath('_.eslintignore'),
//               this.destinationPath('.eslintignore'));
        
           
//             this.fs.copy(
//               this.templatePath('_.gitattributes'),
//               this.destinationPath('.gitattributes'));
        
          
//             this.fs.copy(
//               this.templatePath('_.gitignore'),
//               this.destinationPath('.gitignore'));

//             this.fs.copy(
//               this.templatePath('_.travis.yml'),
//               this.destinationPath('.travis.yml'));

//             this.fs.copy(
//               this.templatePath('_.yo-rc.json'),
//               this.destinationPath('.yo-rc.json'));
//         }
        
//         },
    
//     //Install Dependencies
//     install: function() {
//         this.installDependencies();
//     }

    
//     });






















//     'use strict';

// const Generator = require('yeoman-generator');

// const chalk = require('chalk');

// const yosay = require('yosay');

// module.exports = class extends Generator {

//   async prompting() {

//     // Have Yeoman greet the user.

//     this.log(

//       yosay(`Welcome to the spectacular ${chalk.red('generator-aware-weekly-mailing-g')} generator!`)

//     );

//     const prompts = [

//       {

//         type: 'confirm',

//         name: 'someAnswer',

//         message: 'Would you like to enable this option?',

//         default: true

//       }

//     ];

//     const props = await this.prompt(prompts);

//     // To access props later use this.props.someAnswer;

//     this.props = props;

//   }

//   writing() {

//     this.fs.copy(

//       this.templatePath('dummyfile.txt'),

//       this.destinationPath('dummyfile.txt')

//     );

//   }
//   install() {

//     this.installDependencies();

//   }

// };


// module.exports = class extends Generator {

//   // The name `constructor` is important here

//   constructor(args, opts) {

//     // Calling the super constructor is important so our generator is correctly set up

//     super(args, opts);
//     // Next, add your custom code

//     this.option('babel'); // This method adds support for a `--babel` flag
//   }

// };
// module.exports = class extends Generator {
//   method1() {
//     this.log('method 1 just ran');
//   }
//   method2() {

//     this.log('method 2 just ran');

//   }

// };

// var yeoman = require('yeoman-environment');

// var env = yeoman.createEnv();

// env.register(require.resolve('generator-aware-weekly-emailing-g'), 'npm:app');
// env.run('npm:app', done);
// env.lookup(function () {

//   env.run('angular');

// });

// // Main package function

// function awareWeeklyMailingG(input) {

//   // Returns true if the input is either undefined, null, or empty, false otherwise

//   return (input === undefined || input === null || input === '');

// }

// // Make the main function available to other packages that require us

// module.exports = awareWeeklyMailingG;



