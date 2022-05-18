---
title: Creating first application 
description: step-by-step explanation of how to build your first Scala 3 application from scratch on macOS
---
The article explains how to build "Hello, world" application in Scala 3. 

**Pre-requisites**
* entry-level programming knowledge
* macOS

If you are an experienced developer I`d recommend to start with **[Scala 3 Book](https://docs.scala-lang.org/scala3/book/introduction.html)**. 

## Step 1: Install development software 

#### Code editor
Install **[VS Code](https://code.visualstudio.com)**. You may choose another editor: Sublime Text, Vim or Emacs. Each of them is lightweight and beloved by community. The other cool way of editing Scala code is using [Intellij IDEA](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html). Still, for fast immersion  to Scala, we stick with VS Code. 


#### Extention for the  editor 
Install **[Metals](https://marketplace.visualstudio.com/items?itemName=scalameta.metals)**.
This plugin enriches the editor with understanding of Scala code. As a result, the editor enhances your development experience. For instance, it highlights syntax errors, autocompletes code (kind of T9) or keeps indentation. If you do not install the extension, you still be able to write in Scala but an editor won`t know how to assist you.

#### Development environment

 Install a default set of applications allowing Scala program to run. Just insert the following in Terminal:

```
curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-apple-darwin.gz | gzip -d > cs && chmod +x cs && (xattr -d com.apple.quarantine cs || true) && ./cs setup
```
This command launches the application called Coursier that installs the bundle. As a whole, these apps consist typical Scala development environment. The list of the them can be found **[here](https://get-coursier.io/docs/cli-installation)**. If you are looking for other ways to setup Scala development environment, e.g. using Brew, see  [Coursier documentation](https://get-coursier.io/docs/cli-installation). 

Lets check if the installation has been successful. Run ```scala -version``` in Terminal. Once it outputs Scala version and year, everything is fine
```
Scala code runner version 3.1.2 -- Copyright 2002-2022, LAMP/EPFL
```

Great. One of the coolest programming language is ready for use 🤘

#### 

## Step 2: Create a project

"Create a project" implies to generate a folder containing source files of your program. For this purpose, 
1. Create an empty folder on your computer manually. Feel free to name and locate it at your consideration.

2. Open the created folder with Terminal. You can do it either by tapping "New Terminal at Folder" or, in case you are familiar with Terminal, cd to the folder.

3. Run the following in Terminal: ```sbt new scala/scala3.g8```
4. In a short while, Terminal will prompt you to name your project. Write “hello-world” and press enter. 


## Step 3: Open the project with editor

1. Launch VS Code. 
2. Click "Open Folder" and select “hello-world” directory. The directory is located in the project folder you created earlier
3. Once you`ve selected and clicked “Open”, VS Code will start opening the project and ask you whether to import the build. Press “Import build”.




## Step 4: Run the code

1. Open Terminal in VS Code
2. Run command ```sbt```. We have just started so-called "sbt server". Now it is accepting (listening and implementing) input from Terminal.
3. Run the command ```run``` and see the output. 
   [IMG]
   Perfect 👍  
   Your first Scala 3 application has been runned successfully.


To run your program, you should always start sbt server once (by ```sbt``` command), and then type ```run``` command (for each running). This is because VS Code doesn't know how to handle Scala projects. Therefore, we use Sbt as a coordinator (like a project manager in an office).

The following [article]() highlights the installed staff in detail. 


























