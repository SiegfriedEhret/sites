---
date: "2015-07-05T00:00:00.000Z"
updatedAt: "2021-05-23T19:10:56.290Z"
title: (and (keep calm) (hack lisp))
description: A quick presentation to discover the marvelous world of lisp.
tags: []
---

Hello there !

I made a small presentation about lisp at a functional programming event at [SFEIR](http://www.sfeir.com). In fact, it was more an intro than "hacking" into it.

This post explains a few things and some examples I used during this talk.

The slides are [here](http://slides.com/siegfriedehret/and-keep-calm-hack-lisp/).

First, I introduced John McCarthy (the guy who invented lisp) and Dennis Ritchie (you should know this guy, who admired lisp). They died in october 2011, I just wanted the audience to remember that Steve Jobs is not the only guy who died at this time...

![lisp logo](/contentful/5cBsgy1FYxD6g9pJIOED1h/1aabd28128aa52b813e62878070a2816/lisplogo_256.png)

Then, I talked about lisp, the spec and some implementations.

And Polish notation ([Let me wikipedia that for you](http://duckduckgo.com/?q=polish+notation+!w)).

With a nice clisp REPL open, I started showing a few examples (`> ` represent the REPL input):

```
> (print "Hello World !")
"Hello World !"
"Hello World !"
```

Why is "Hello World !" printed 2 times ?

Because everything **returns** something. The `print` function prints the given arguments and then returns the data. It is useful for things like:

```
> (+ (print 1) (print 2))
1
2
3
```

which print 1, then 2, and finally the computation of `(+ 1 2)` which is 3.

## Variables

I explained the differences between `defvar`, `defparameter`, `setq` and `let`.

### defvar and defparameter

`defvar` and `defparameter` are used to set variables. The latter one is, as I read, used for values that can have an effect on the program (I took the example of a ratio that can be modified and used in function bodies).

```
> (defvar *kikoo* "plop")
*KIKOO*
> *kikoo*
"plop"
```

### defconstant

Used for constants ! I used the following code to show the re-assignment warning, and to show that the final value was "plip".

```
> (defconstant *const* "plop")
> (defconstant *const* "plip")
> *const*
"plip"
```

### setq

I used the following code to describe how setq works for multiple variables and computations.

```
> (defvar a)
A
> (defvar b)
B
> (defvar c)
C
> (setq a 1 b 2 c 3)
3
> (setq a (+ 1 b) b (+ 1 a) c (+ a b))
7
```

### let

I should also have talked about let\* but I forgot what was the difference...
The last `x` is not defined since the let declaration is scoped, so I got an error.

```
> (let ((x 1) (y 2))
  (+ x y))
3
> x
*** - SYSTEM::READ-EVAL-PRINT: variable X has no value
Rentrées possibles:
USE-VALUE      :R1      Input a value to be used instead of X.
STORE-VALUE    :R2      Input a new value for X.
ABORT          :R3      Abort main loop

```

## Functions

### defun

I created 2 functions, a good old "hello world" and one with a parameter.
Note that when defining a function, the name of the function is returned.

```
> (defun hello-world ()
  (print "Hello, World!"))
HELLO-WORLD
> (hello-world)
"Hello World !"
"Hello World !"
```

I used format instead of print to introduce `NIL` (format doesn't return the data, but the `NIL` value).

```
> (defun hello-toto (name)
  (format t "Hello, ~a" name))
HELLO-TOTO
> (hello-toto "彩子")
Hello, 彩子
NIL
```

### funcall, lambda

They are used to "apply" a function to an arguments list. I chose to also introduced a lambda function.

```
> (funcall (lambda (x) (+ x 3)) 4)
7
```

## Conditions and predicates

I introduced quickly `if` and the über powered alternative `cond`. Also, predicates for everythings !

```
> (defun test-thing (thing)
  (print (if thing "yep" "nope")))
TEST-THING
> (test-thing "plop")
"yep"
> (test-thing NIL)
"nope"
```

## Loops

I didn't talk about them. Next time !

## Lisp stands for LISt Processing

Why choose a lisp instead of everything else ?
List manipulations are one of lisp's super powers.

I introduced cons and the quote operator.

```
> (cons 1 (cons 2 (cons 3 (cons 4 nil))))
(1 2 3 4)
> '(1 2 3 4)
(1 2 3 4)
```

Also, `car`:

```
> (car '(1 2 3))
1
```

And its buddy `cdr`:

```
> (cdr '(1 2 3))
(2 3)
```

```
> (mapcar (lambda (x) (* x 2)) '(1 2 3 4 5))
(2 4 6 8 10)
```

## Magic operators

### quote or '

In lisp, code is data !
You can use quote to **not** evaluate a list (in the second example, setq is not processed).

```
> (setq a 3)
3
> '(setq a 3)
(SETQ A 3)
```

### backquote / quasiquote and comma

Quasiquote is like the previous quote, but you can use comma **,** to evaluate the following expression:

```
> (let ((s 'hello))
  `(,s world))
(HELLO WORLD)
```

### sharpsign-quote

It's like `funcall` or `apply`.

```
> (mapcar #'sqrt '(1 2 3 4 5))
```

## HOLY MACROS

### DEFMACRO, MACROEXPAND

#### The macro

```
> (defmacro let1 (var val &body body)
  `(let ((,var ,val))
  ,@body))
LET1
```

#### The use

Allows to understand in a simple way the macro code. In this example:

```
> (let1 foo (+ 2 3)
  (princ "Lisp is awesome!")
  (* foo foo))
```

- `var` is `foo`
- `val` is `(+ 2 3)`
- `body` is `(princ "Lisp is awesome!")` and `(* foo foo)`

The macro body (after the quasiquote) shows that we use the evaluated values of `var` and `val` in a `let`. So we define a variable with the name `foo` and the value `(+ 2 3)`.

Then the `body` is evaluated:

- `(princ "Lisp is awesome!")` prints `Lisp is awesome!`
- `(* foo foo)` is evaluated to `(* (+ 2 3) (+ 2 3))` and prints `25`.

#### The expansion

Shows the expanded code from the macro, and returns `T` (true) if it has been expanded:

```
> (macroexpand '(let1 foo (+ 2 3)
  (* foo foo)))
(LET ((FOO (+ 2 3))) (* FOO FOO)) ;
T
```

### How to macros ?

![Maquereau](/contentful/2M9GwVmaWYVypZDvoWJp89/22da74f81f10a9bceb73a8f8f2690736/Maquereau.gif)
(Maquereau is the french word for Mackerel)

3 steps:

- write sample call and expansion
- write generative code
- prevent leaks

## Conclusion

![i have a lisp](/contentful/6HArEmceO7CckceOmd4zET/7767a7ca6a9559acc262b2a7f2ea0e53/i_have_a_lisp.gif)

I concluded this introduction to lisp saying that it is awesome, and even if I can't use it professionally, it's pretty interesting to play with it.

Also, I recommend reading:

- [Land of lisp](http://landoflisp.com/)
- [Practical Common Lisp](http://www.gigamonkeys.com/book/)
