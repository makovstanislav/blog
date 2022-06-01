---
title: What happens during launching?
description: This articles explains sequence of program execution
image: /images/scala3.png
---


> To run human-written code, it must be translated into machine-readable instructions. And then the machine will execute them. 
In essence, the process consists of compilation and execution. In our case, we need to convert Scala code into Java bytecode and execute the result on Java Virtual Machine. 


So that not to launch these processes manually, we normally use sbt application which calls different programs by itself. 
<br>Let's explore what happens once we`ve typed ```$sbt run``` in Terminal.</br>


<img src="/post_assets/2022-05-16-what-happens-during-launching/running-scheme-3.png" width="700" height="400">

## Step 1: Compilation

- sbt calls Scala compiler (scalac)
- scalac converts Scala source code into Java bytecode 

Source code is stored in .scala files. Now we also have .class files. They are regular Java class files containing Java bytecode to be executed by the Java Virtual Machine (JVM). By default, scalac generates the class files into the current working directory. 

Currently, there is the program bytecode stored in .class files in a separate folder and understandable to the machine. 


## Step 2: Running

- Once the files have been compiled, sbt calls scala 
- scala calls JVM
- JVM runs the resulting bytecode

**Output:**
Hello, world!

As we have seen, we just need to type ```$sbt run```  in CLI and sbt will take care of the rest.
































