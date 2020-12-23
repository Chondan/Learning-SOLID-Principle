<?php 

class Entity {
	function __construct($name) {
		$this->name = $name;
	}
}

trait mover {
	public function move() {
		echo sprintf("%s moved\n", $this->name);
	}
}

trait attacker {
	public function attack($targetEntity) {
		echo sprintf("%s attacked %s for %d damage\n", $this->name, $targetEntity->name, $this->attackDamage);
		$targetEntity->takeDamage($this->attackDamage);
	}
}

trait hasHealth {
	public function takeDamage($amount) {
		$this->health -= $amount;
		echo sprintf("%s has %s remaining\n", $this->name, $this->health);
	}
}

class Character extends Entity {
	function __construct($name, $attackDamage, $health) {
		parent::__construct($name);
		$this->attackDamage = $attackDamage;
		$this->health = $health;
	}
	use mover, attacker, hasHealth;
}

class Wall extends Entity {
	function __construct($name, $health) {
		parent::__construct($name);
		$this->health = $health;
	}
	use hasHealth;
}

$character = new Character("Chondan", 20, 100);
$character->move();
$wall = new Wall("Wall", 100);
$character->attack($wall);


?>