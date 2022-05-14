---
title: Creating first Scala 3 application 
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
Install **[VS Code](https://code.visualstudio.com)**. You may choose another editor: Sublime Text, Vim or Emacs. Each of them is lightweight and beloved by coders. This article is tailored to the interaction with VS Code.


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

Congrats! 🥳 One of the coolest programming language is ready for using on your computer.
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
Write 
```
sbt
```
Write 
```
run
```
See the output. Your first Scala 3 application has been runned successfully.


## What I`ve just done?

Lets debrief what we have for now

#### Build structure


#### Installed apps

|Application|What is it?|What does it do?|When and how to use it?|Read more|
|------|-----------|-----------|-----------|-----------|
|Coursier|Scala artifacts fetcher (or "dependency resolver")|installs applications and fetch other resources allowing Scala program to run| It is used by command line (CLI).|There is no need to open it manually. Sbt launches scalac automatically (under the hood) when you run your Scala program by sbt|
|sbt ("scala build tool")|build automation tool|*builds Scala project automatically *exploit various apps to run Scala code|There is no need to open it manually. Sbt launches JVM automatically (under the hood) when you run your Scala program by sbt.|
|scalac|Scala compiler|converts Scala code into Java bytecode (readable by machine)|
|JVM ("Java Virtual Machine")|virtual machine|executes programs written in Java bytecode (readable by machine)|
|Adopt Open JDK|Java development kit (it includes JVM, standard java libraries etc)|facilitates creation applications on Java platform|There is no need to open parts of JDK manually. Sbt launches them automatically (under the hood) when you run your Scala program by sbt|
|scalafmt|Scala code formatter|keeps formatting (indentation, line breaks etc) compatible to conventions





























