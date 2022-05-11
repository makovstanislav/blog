---
title: Onboarding to Scala 3 for absolute beginners
description: step-by-step explanation of how to build your first Scala 3 application from scratch on macOS.
image: /images/scala3.png
---
# Introduction
This article provides step-by-step explanation of how to build your first Scala 3 application from scratch on macOS. 
The sucess criteria will be a bot that registrates people to Scala Issue Spree event www.ScalaIssueSpree.com

The flow described here is regular and you may go through your own way to familirize yourself with Scala 3.



# Installation
## STARTER KIT
Lets see what apps shall be installed for running our future application

|Application|What is it?|What does it do?|What would we do without it?|Read more|
|------|-----------|-----------|-----------|-----------|
|Coursier|Dependency resolver. cli (command line interface). Scala application that is launched and used by command line. Scala artifacts fetcher|Installs applications needed to use Scala. Software bundle allowing scala program to run  (downloads sbt, Scala, Java etc)|-|https://get-coursier.io/docs/overview|
|JVM|compiler|converts Java code into byte code readable by machine|-----------|-----------|
|sbt|in full form: "simple build tool". build automation tool |- creates scala project - compiles, runs, tests scala code|Creating project structure is tedious. Sbt creates it basing on a template and answers that you give to sbt in a command line during creating a project|https://www.scala-sbt.org/1.x/docs/index.html|
|scala|REPL (read-evaluate-print loop) command line interpreter|converts commands of command line in functions that operating system undertstands|-----------|-----------|
|Ammonite|-----------|-----------|-----------|-----------|
|Bloop|-----------|compiles, tests and runs scala. Optimises local development workflow to accelerate feedback cycle|-----------|-----------|
|Maven|build automation tool for Java|Download Java libraries and maven plugins dynamically from maven repository. Updates the local cache with artifacts created by a local project. |-----------|-----------|
|Ivy| java library|resolves (locates absolute path) dependencies (jar files)|-----------|-----------|
|Adopt Open JDK)|(open source java development kit|----------e-----------|-----------|

## INSTALLATION PROCESS

# Creating a project

## Starter kit
## Structure of the project folder

Once sbt has created the project, the folder in your computer will have the following structure:

- [project_name] <--- this is "base directory", it contains the project 
    - project (sbt uses this for its own files)
        - build.properties
    - build.sbt (sbt's build definition file)
    - src
        - main
            - scala (all of your Scala code goes here)
                - Main.scala (Entry point of program)


See https://docs.scala-lang.org/scala3/book/tools-sbt.html and https://www.scala-sbt.org/1.x/docs/Organizing-Build.html for more about directory structure.

Particular attention should be given to build.sbt and Main.scala files.
They are created automatically and 


# Running code in action
Once you run the code that you have just written, this is what happens next

1. Your text editor asks the application named "sbt" to run the code
2. sbt 
  * gets your code
  * converts it into a code readable by machine ("1" and "0") by means of various pre-installed programs
  * makes a machine to execute your program
3. Machine is executing your code, that is reads and acts on the instructions you wrote. 
4. Once execution is completed, sbt tells the text editor about it
