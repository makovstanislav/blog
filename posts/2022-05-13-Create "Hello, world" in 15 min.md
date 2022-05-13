---
title: Creating first Scala 3 application for absolute beginners
description: step-by-step explanation of how to build your first Scala 3 application from scratch on macOS.
image: /images/scala3.png
---


The article explains how to build minimal Scala 3 application from scratch on macOS. 
The flow described here is regular and you may go through your own way to familirize yourself with Scala 3.

<a href="/post_assets/2022-02-19-launching-rockets/7318FA49-2DD7-4C51-BAA2-B195B2DF1862.jpeg" target="_blank"><img src="/post_assets/2022-02-19-launching-rockets/7318FA49-2DD7-4C51-BAA2-B195B2DF1862.jpeg" width="50%"/></a>

![Tux, the macOS mascot](/static/post_assets/2022-02-19-launching-rockets/3C9D58A6-43C8-4E36-855B-CD4574E4C183.jpeg)

## Step 1: Install development software 

#### Code editor
Download **[VS Code](https://code.visualstudio.com)**.


#### Extention for the  editor 
Download **[Metals](https://marketplace.visualstudio.com/items?itemName=scalameta.metals)**.

#### Development environment


```
curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-apple-darwin.gz | gzip -d > cs && chmod +x cs && (xattr -d com.apple.quarantine cs || true) && ./cs setup
```
Check if the installation has been successful. Write in the command line
```
scala -version
```
shall output
```
Scala code runner version 3.1.2 -- Copyright 2002-2022, LAMP/EPFL
```
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