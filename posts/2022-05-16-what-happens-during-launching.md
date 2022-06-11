---
title: What happens during launch?
description: This articles explains sequence of program execution
image: /images/scala3.png
---

> For running human-written code, it must be translated into machine-readable instructions. And then the machine will able to execute them. 
In essence, the process of launching the program consists of compilation and execution. In our case, we need to convert Scala code into Java bytecode and execute the result on Java Virtual Machine. 

So that not to launch these processes manually, we usually use sbt application, which calls different programs. <br>Let's explore what happens once we've typed `$sbt run` in the terminal.</br>
<img src="/post_assets/2022-05-16-what-happens-during-launching/running-scheme-3.png" width="700" height="400">

## Step 1: Compilation

- sbt calls Scala compiler (scalac)
- scalac converts Scala source code into Java bytecode 

The source code is stored in `.scala` files. After the compilation, we get also the `.class` files. They are regular Java class files containing Java bytecode to be executed by the Java Virtual Machine (JVM). By default, scalac generates the class files into the current working directory. 

## Step 2: Execution

- once the files have been compiled, sbt calls `scala` 
- Scala calls JVM
- JVM runs the resulting bytecode

**Output:**
Hello, world!

As we have learned, we just need to type `sbt run`  in CLI and sbt will take care of the rest.






























