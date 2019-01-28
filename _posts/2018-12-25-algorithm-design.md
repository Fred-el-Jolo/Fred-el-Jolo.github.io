---
layout:         post
title:          Algorithm design
date:           2019-01-28 23:28:00 +1
image:          noun_algorithm_311718.png
image-alt:      algorithm by Sergey Novosyolov from the Noun Project
use_math:       true
tags:           [algorithm]
categories:     [notes]
---

Reading notes from "The Algorithm Design manual" book written by Steven S. Skiena.

<!-- more -->

1. TOC
{:toc}

## Definitions

### Proper mathematical proof:
1. Clear & precise statement of what you are trying to prove
2. Set of assumptions which are taken to be true
3. Chain of reasonning takes you from the assumptions to the statement you are trying to prove
4. QED

### Algorithmic notations: 
- English
- Pseudo code
- Real programming language

Heart of an algorithm is an idea. This idea must be clearly revealed when the algorithm is expressed.

### Problem specification: 
- Set of allowed  input instances
- Required properties of the algorithm's output

Counter-examples to demonstrate incorrectness

Develop counter-examples hunting skill:
- Think small
- Think exhaustively
- Hunt for the weakness
- Go for a tie
- Seek extremes

### Correctness: induction & recursion
- Induction: 
  + Prove a formula, for example $$\sum_{i=1}^n = \frac{ n(n+1) }{2}$$ work for basis cases (like 1 or 2)
  + Assume it was true up to $$n-1$$
  + Prove is was true to general $$n$$ using the assumption
- Recursion is induction
  + General & boundary conditions, with the general condition breaking the problem into smaller and smaller pieces

Have to be suspicious about induction.
- Boundary errors
- Wrong extension claims (for example, adding an item that completely changes the solution of a problem)

e.g. Prove that $$\sum_{i=1}^n i \times i! = (n+1)!-1$$ by induction

1. $$n=1$$
\begin{align\*}
    \sum_{i=1}^n i \times i! &= 1 \times 1 \\\
    &= 1
\end{align\*}
&nbsp;  
\begin{align\*}
    (n+1)!-1 &= 2! - 1 \\\
    &= 1
\end{align\*}

2. Assume the statement is true up to $$n$$. Prove that it is also true for $$n+1$$
\begin{align\*}
    \sum_{i=1}^{n+1} i \times i! &= (n+1) \times (n+1)! + \sum_{i=1}^n i \times i! \\\
    &= (n+1) \times (n+1)! + (n+1)!-1 \\\
    &= (n+1)! \times ( (n+1) + 1 ) -1 \\\
    &= (n+1)! \times ( n+2 ) -1 \\\
    &= (n+2)! -1 \\\
    &\blacksquare
\end{align\*}

### Modeling the problem
Try to describe the problem abstractly, in terms of procedures on fundamental structures (e.g. permutatons, graphs, sets ...)

#### Combinatorial objects
##### Permutations
Arrangements, ordering of items. $${1,4,3,2}$$ and $${4,3,2,1}$$ are two distinct permutations of the same set of four integers.