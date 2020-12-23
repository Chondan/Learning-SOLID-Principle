# SOLID Principle

In `object-oriented computer programming`, **SOLID** is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. 

SOLID Principles are:
1. Single responsibility
	- A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
2. Open-closed
	- "Software entities ... should be open for extension, but closed for modification."
3. Liskov substitution
	- "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."
4. Interface segregation
	- "Many client-specific interfaces are better than one general-purpose interface."
5. Dependency inversion
	- One should "depend upon abstractions, [not] concretions."

---

## Single-responsibility principle
- The single-responsibility principle (SRP) is a computer-programming principle that states that every class in a computer program should have responsiblity over a single part of that program's functionality, which it should encapsulate.
- All of that module, class or function's services should be narrowly aligned with the responsiblity.

> Robert C. Martin, the originator of the term, expresses the principle as, "A class should have only one reason to change".

### Example
Martin defines a responsibility as a *reason to change*, and concludes that a clas or module should have one, and only one, reason to be changed (e.g. rewritten). 

As an example, consider a module that compiles and prints a report. Imagine such a module can be changed for two reasons. First, the content of the report could change. Second, the format of the report could change. These two things change for very different causes; one substantive, and one cosmetic. The single-responsibility principle says that these two aspects of the problem are really two separate responsibilities, and should, therefore, be in separate classes or modules.

---

## Open-closed principle
- In object-oriented programming, the **open-closed principle** states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; that is, such an entity can allow its behaviour to be extended without modifying its source code.

The name open-closed principle has been used in two ways. Both ways use generalizations (for instance, inheritance or delegate functions) to resolve the apparent dilemma, but the goals, techniques, and results are different.

### Meyer's open-closed principle
Bertrand Meyer is generally credited for having originated the term open-closed principle, which appeared in his 1988 book *Object Oriented Software Construction*.
- A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs.
- A module will be said to be closed if if is available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding).

> A class is closed, since it may be compiled, stored in a library, baselined, and used by client classes. But it is also open, since any new class may use it as parent, adding new features. When a descendant class is defined, there is no need to change the original or to disturb its clients.

### Polymorphic open-closed principle
During the 1990s, the open-closed principle became popularly redefined to refer to the use of abstracted interfaces, where the implementations can be changed and multiple implementations could be created and polymorphically substituted for each other.

In contrast to Meyer's usage, this definition advocates inheritance from abstract base classes. Interface specifictaions can be reused through inheritance but implementation need not be. The existing interface is closed to modifications and new implementations must, at a minimum, implement that interface.

---

## Liskov substitution principle
**Substitutability** is a principle in object oriented programming stating that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., an object of type T may be substitued with any object of a subtype S) withou altering any of the desirable properties of the program (correctness, task performed, etc.).

The main idea of the Liskov substitution principle is that any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking. This essentially means that a class is interchaneable with its subclasses.

---

## Interface segrefation principle
In the field of software engineering, the **interface-segregation principle (ISP)** states that no client should be forced to depend on methods it does not use. 

ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest of them. Such shrunken interfaces are so called *role interfaces*.

ISP is intened to keep a system decoupled and thus easier to refactor, change, and redeploy.

The main idea of the interface segregation principle is that any class that implements an interface must use all functions/properties of the interface. JavaScript does not have actual interfaces, but a class inheritance structure is similar enough that it works in this instance. This means that any class that inherits from another class needs to use all of the methods/properties from the base class. This encourage writing small classes instead of large classes.

---

## Dependency inversion principle
In object-oriented design, the **dependency inversion principle** is a specific form of decoupling software modules.

