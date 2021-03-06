---
layout:         post
title:          Functionnal programming in Scala
date:           2020-01-02 13:00:00 +1
image:          RPi-Logo-SCREEN.png
image-alt:      Raspberry pi logo
tags:           [functional programming]
categories:     [notes]
---

Functionnal programming in Scala

<!-- more -->

1. TOC
{:toc}

## What is functional programming
### Referentiel transparency
An expression e is referentially transparent if, for all programs p, all occurrences of e in p can be replaced by the result of evaluating e without affecting the meaning of p.

A function f is pure if the expression f(x) is referentially transparent for all referentially transparent x.

### Substitution model
Consists in replacing all variables with their referents and reduce the function to its simplest form.

### Benefits
- Better modularity:
   - Local reasoning: Simply look at the function's definition and substitute arguments into its body.
   - composable

## Scala
### Functional loop (without mutated variable)
Recursive loop.

#### Tail call elimination
A call is said to be in tail position if the caller does nothing other than return the value of the recursive call.

#### Polymorphic functions
Abtsracting over types


## Functionnal data structures
### Functional structure
Operated on using only pure functions.
Immutable.
End up with extra copies of data => no !

### LinkedList

### PatternMatching


## Sources



Graphic logo for Visual Studio Code software from [en.wikipedia.org/wiki/Visual_Studio_Code#/media/File:Visual_Studio_Code_1.18_icon.svg](https://en.wikipedia.org/wiki/Visual_Studio_Code#/media/File:Visual_Studio_Code_1.18_icon.svg)
