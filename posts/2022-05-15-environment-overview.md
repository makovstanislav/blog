---
title: Environment overview
description: breaking down typical Scala development environment
image: /images/scala3.png
---


This article breaks down typical Scala development environment. We installed it in the previous section.

||What is it?|What does it do?|When and how to use it?|
|------|-----------|-----------|-----------|
|**Metals**|	Extention for VS Code. Language server for Scala. |	It powers editing experience by error-checking, code formatting, autocompletion etc. Without it, the editor would not know how to assist you. Though it`s not IDE, it has rich IDE features.	| Once you install the extension, the editor automatically uses it.|
|**Coursier**|Scala development environment installer.  Artefacts fetcher (or "dependency resolver")| It automatically installs applications and fetches other resources allowing Scala program to run.| It is used by the command line (CLI).|
|**Sbt** |Build automation tool. In full form: "scala build tool"| It builds Scala projects automatically and exploits various apps to run Scala code. Consider it as a coordinator.|Go to the project folder by CLI and type ```sbt```. |
|**Scalac**|Scala compiler|It converts Scala code into Java bytecode so that a virtual machine can read it and run.|Sbt launches Scalac automatically (under the hood) when you run your program by sbt.|
|**JVM** |Java Virtual Machine. Not the Java programming language|Runs Java bytecode. Note: firstly, Scalac compiles (converts) Scala code into Java bytecode, and then JVM runs the bytecode. |Sbt launches JVM automatically (under the hood) when you run your program by sbt.|
|**Adopt Open JDK**|Java development kit (it includes standard Java libraries, Java compiler, debugger and many more components)|It facilitates applications creation on Java platform.|There is no much need to open components of JDK manually. Sbt launches them automatically (under the hood) when you run your program by sbt.|
|**Scalafmt**|Scala code formatter|It keeps formatting (indentation, line breaks etc) compatible with conventions.|Metals automatically triggers Scalafmt.|
|**scala**| Scala REPL and script runner| Evaluates expressions written in Scala. |	By CLI when you want to run (e.g. test) easily some script without the overhead of setting up a project. Kind of "playground area".| 
|**Ammonite**|	Enhanced Scala REPL and script runner| Evaluates expressions written in Scala |	By CLI when you want to run (e.g. test) easily some script without the overhead of setting up a project. Kind of "playground area".	|























