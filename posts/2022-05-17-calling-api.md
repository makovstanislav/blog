---
title: Calling API
description: step-by-step explanation of how to build your first Scala 3 application from scratch on macOS.
image: /images/scala3.png
---


The article explains how to build minimal Scala 3 application from scratch on macOS. 
The flow described here is regular and you may go through your own way to familirize yourself with Scala 3. The less experienced you are, the more it is recommended to stick to the guide below.

## pre-requisites
|Coding experience|Operating system|
|---|---|
|Absolute beginner|macOS|

<a href="/post_assets/2022-02-19-launching-rockets/7318FA49-2DD7-4C51-BAA2-B195B2DF1862.jpeg" target="_blank"><img src="/post_assets/2022-02-19-launching-rockets/7318FA49-2DD7-4C51-BAA2-B195B2DF1862.jpeg" width="50%"/></a>

## Step 1: Install development software 

#### Code editor
Install **[VS Code](https://code.visualstudio.com)**. You may choose another editor: Sublime Text, Vim or Emacs. Each of them is lightweight and beloved by community. The other cool way of editing Scala code is using [Intellij IDEA](https://www.jetbrains.com/help/idea/discover-intellij-idea-for-scala.html). Still, for easy diving to Scala, the article is tailored to VS Code. 


#### Extention for the  editor 
Install **[Metals](https://marketplace.visualstudio.com/items?itemName=scalameta.metals)**.
This is the plugin (extension) for code editors designed for Scala developers. It enriches the editor with knowledge how to deal with Scala 3 files. Its job is enhancing your development experience. For instance, highlighting syntax errors before you run the code, autocompletion (kind of T9 for coders) and many more. If you do not install this extension, you still be able to write Scala applications but the text editor won`t know how to assist you.

#### Development environment

Lets install a package of applications and resources allowing any Scala program to run. You can do it just by writing the following command in Terminal. 

```
curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-apple-darwin.gz | gzip -d > cs && chmod +x cs && (xattr -d com.apple.quarantine cs || true) && ./cs setup
```
If you are looking for other ways to setup Scala development environment, e.g. using Brew, see the [installer documentation](https://get-coursier.io/docs/cli-installation) for more. 

Lets check if the installation has been successful. Type scala -version in Terminal. Once it outputs the following, everything is fine
```
Scala code runner version 3.1.2 -- Copyright 2002-2022, LAMP/EPFL
```

Congrats! 🥳 One of the coolest programming language is ready for using.

#### 

## Step 2: Create "build"

Manually create an empty folder on your computer. You are going to store files of your future application there. Feel free to name it whatever you like.

Open the created folder with the command line. You can do it by tapping "New Terminal at Folder" or, in case you are familiar with Terminal, cd to the folder.

In Terminal write 
```
sbt new scala/scala3.g8
```

In a short while, Terminal will prompt you to name your application. Write “hello-world” and press enter. 


## Step 3: Open "build" with editor

Launch VS Code. Click "Open Folder" and select “hello-world” directory. The directory is located in the project folder you created earlier. Once you`ve selected and clicked “Open”, VS Code will start opening the project and ask you whether to import the build. Press “Import build”.



## Step 4: Running the code

Open Terminal in VS Code

Run command 
```
sbt
```
We have just startet so-called "sbt server". Then run the command 
```
run
```
See the output
[IMG]

Perfect 👍 
Your first Scala 3 application has been runned successfully ✅

The following [article]() breaks down the installed staff. 






























