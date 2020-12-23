<?php 

trait A {
	public function greet() {
		echo "Hello";
	}
}

trait B {
	public function greet() {
		echo "Hi";
	}
}

class Person {
	use A, B {
		A::greet insteadof B;
		B::greet as hi;
	}
}

$p = new Person();
$p->greet();
$p->hi();

?>