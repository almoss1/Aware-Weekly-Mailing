# Scaffolding Email



This is a scaffold for the weekely emails for each sensor. This has the server folder and can be editted to fit what each email needs to be generated later on.


# Which Scaffold

This scaffold was created with Yoeman. In order to use Yoeman, there are a few steps that need to be done. 

The first step is to have npm or yarn installed. To check if it is installed:

~~~cmd
C:\Users\Alexm\Desktop> npm -v 

or 

C:\Users\Alexm\Desktop> yarn -v 
~~~

If it is not installed then to install:

~~~cmd
C:\Users\Alexm\Desktop> npm install

or 

C:\Users\Alexm\Desktop> yarn install 
~~~

Once one, or both, of these are installed then the next step is to install Yoeman. 

To install:
~~~cmd
C:\Users\Alexm\Desktop> npm install -g yo
~~~

If you would like to create your own generator then continue on. If not, skip to Gulp.

The next step is to install a generator of your choice.

~~~cmd
C:\Users\Alexm\Desktop> npm install -g generator-<generator name>
~~~

Then, once Yoeman is install, the command for Yoeman is yo. If you type yo in the command line then you can choose form different generators that you installed or choose different options to complete.

The generator that was used to create this template was:
~~~cmd
C:\Users\Alexm\Desktop> yo webapp
~~~

# Gulp

Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

In this project, Gulp will be used so you will need to install it. 

To install:

~~~cmd 
C:\Users\Alexm\Desktop> npm install --save-dev gulp
~~~

To check the version:
~~~cmd 
C:\Users\Alexm\Desktop> gulp --version
~~~

You could also use Gulp to run your application. 

There are three scripts to use gulp with. 

* gulp -- This would run the default script
* gulp build -- This would build the code
* gulp serve -- This would execute the code onto a localhost


# Yoeman-Environment
It provides a high-level API to discover, create and run generators, as well as further tuning of where and how a generator is resolved.

To install:

You should first have Yoeman already installed but if you dont you can reference back to the README file in the main directory.

~~~cmd 
C:\Users\Alexm\Desktop> npm install yeoman-environment
~~~
#### Trouble
If there are any issues, run: yo doctor.

# Testing
If you would like to test your applications you will have to download jest. 

To install jest:
~~~cmd
C:\Users\Alexm\Desktop> npm install --save-dev jest
~~~

Then when you would like to run tests you will have to change directories to the server and then test the code by doing:

~~~cmd
C:\Users\Alexm\Desktop> yarn run test
~~~