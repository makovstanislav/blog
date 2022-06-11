---
title: Environment overview
description: breaking down typical Scala development environment
image: /images/scala3.png
---

This article breaks down typical Scala development environment. We installed it in the previous section.

||What is it?|What does it do?|When and how to use it?|
|------|-----------|-----------|-----------|
|**Metals**|	Extention for VS Code. Language server for Scala. |	It powers editing experience by error-checking, code formatting, autocompletion etc. Without it, the editor would not know how to assist you. Though it's not an IDE, it has rich IDE features.	| After you install the extension, the editor will automatically use it.|
|**Coursier**|Scala development environment installer.  Artefacts fetcher (or "dependency resolver")| It automatically installs applications and fetches other resources allowing Scala programs to run.| It is used from the terminal by the user to install Scala.|
|**Sbt** |Build automation tool. It stands for "simple build tool"| It builds runs Scala projects while interfacing with other applications. Consider it as a coordinator of those applications.|Go to the project via the terminal and type ```sbt```. |
|**Scalac**|Scala compiler|It converts Scala code into Java bytecode so that the Java Virtual Machine (JVM) can run it.|Sbt launches Scalac when you compile your program. Compilation is done before running the program when you execute the `run` command from sbt.|
|**JVM** |Java Virtual Machine. Distinguish from the Java programming language|Runs Java bytecode. Note: first, Scalac compiles (converts) Scala code into Java bytecode, and then the JVM runs the bytecode. |Sbt launches JVM automatically (under the hood) when you run your program by sbt.|
|**JDK**|Java development kit (it includes the standard Java libraries, the Java compiler, a debugger and many more components)|It facilitates applications creation for the Java platform.|There is no need for the programmer to use the applications of the JDK manually. Sbt launches them automatically when you run your program.|
|**Scalafmt**|Scala code formatter|It keeps formatting (indentation, line breaks etc) compatible with conventions.|Metals automatically triggers Scalafmt.|
|**Scala**| Scala REPL and script runner| Evaluates expressions written in Scala. It is also used to run compiled scala programs - *.class files.|	By the terminal when you want to run (e.g. test) easily some script without the overhead of setting up a project. Kind of "playground area".| 
|**Ammonite**|	Enhanced Scala REPL and script runner| Evaluates expressions written in Scala |	Is launched from the terminal when you want to run easily (e.g. for testing purposes) some script without the overhead of setting up a project. Kind of "playground area".|























