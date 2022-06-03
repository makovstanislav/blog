---
title: Creating first application 
description: step-by-step explanation of how to build your first Scala 3 application from scratch on macOS


---
The article explains how to build "Hello, world" application in Scala 3. 

#### Pre-requisites
* entry-level programming knowledge
* macOS

If you are an experienced developer I`d recommend starting with **[Scala 3 Book](https://docs.scala-lang.org/scala3/book/introduction.html)**. 


## Step 1: Install development software 

#### Code editor

Install **[VS Code](https://code.visualstudio.com)**. You might choose another editor: Sublime Text, Vim or Emacs. Each of them is lightweight and beloved by the community. The other excellent way of editing Scala code is using **[IntelliJ IDEA](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html)**. Still, for immediate immersion in Scala, we stick with VS Code. 



#### Extention for the  editor 
Install **[Metals](https://marketplace.visualstudio.com/items?itemName=scalameta.metals)**.
This plugin enriches the editor with an understanding of Scala code. As a result, the editor enhances your development experience. For instance, it highlights syntax errors, autocompletes code (kind of T9) or keeps indentation. Of course, if you do not install the extension, you still can write in Scala, but an editor won`t know how to assist you.

#### Development environment

 Install a default set of applications allowing Scala program to run. Just insert the following in Terminal:

   ```
   curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-apple-darwin.gz | gzip -d > cs && chmod +x cs && (xattr -d com.apple.quarantine cs || true) && ./cs setup
   ```

   <img src="/post_assets/2022-05-14-creating-first-application/cs-setup.gif" width="600" height="400">

This command launches the application called Coursier that installs the bundle. As a whole, these apps consist typical Scala development environment. The list of them can be found **[here](https://get-coursier.io/docs/cli-installation)**. If you are looking for other ways to set up Scala development environment, e.g. using Brew, see  [Coursier documentation](https://get-coursier.io/docs/cli-installation). 

Let's check if the installation has been successful. Run ```scala -version``` in Terminal. Once it outputs Scala version and year, everything is fine:
```
Scala code runner version 3.1.2 -- Copyright 2002-2022, LAMP/EPFL
```
If you do not receive similar output, please reboot your computer 💻

   <img src="/post_assets/2022-05-14-creating-first-application/scala-version.gif" width="600" height="400">

Perfect. One of the coolest programming languages is ready to use 👌

#### 

## Step 2: Create a project

"Create a project" implies generating a folder containing your program's source files. For this purpose, 
1. Create an empty folder on your computer manually. Feel free to name and locate it for your consideration.

   <img src="/post_assets/2022-05-14-creating-first-application/creating-folder.gif" width="600" height="400">

2. Open the created folder with Terminal. You can do it either by tapping "New Terminal at Folder" or, in case you are familiar with Terminal, cd to the folder.

   <img src="/post_assets/2022-05-14-creating-first-application/sbt-new.gif" width="600" height="400">

3. Run the following in Terminal: ```sbt new scala/scala3.g8```
4. In a short while, Terminal will prompt you to name your project. Write “hello-world” and press enter. 

   <img src="/post_assets/2022-05-14-creating-first-application/hello-world.gif" width="600" height="400">


## Step 3: Open the project with the editor
1. Launch VS Code. 
2. Click "Open Folder" and select “hello-world” directory. The directory is located in the project folder you created earlier
3. Once you`ve selected and clicked “Open”, VS Code will start opening the project and ask you whether to import the build. Press “Import build”.
   
   ![The San Juan Mountains are beautiful!](/post_assets/2022-05-14-creating-first-application/open.gif "San Juan Mountains")




## Step 4: Run the code

1. Open Terminal in VS Code
2. Run command ```sbt```. We have just started the so-called "sbt server". Now it is accepting (listening and implementing) input from Terminal.
3. Run the command ```run``` and see the output. 

   ![The San Juan Mountains are beautiful!](/post_assets/2022-05-14-creating-first-application/run.gif "San Juan Mountains")

Perfect 👍  
Your first Scala 3 application has been run successfully.


For running your program, you should always start sbt server once (by ```sbt``` command), and then type ```run``` command (for each running). This is because VS Code doesn't know how to handle Scala projects. So it is safe to say that Sbt acts as a coordinator of Scala development environment.



























