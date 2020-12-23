public class Example1 {

	public static abstract class Shape {
		protected abstract double area();
	}

	public static class Circle extends Shape {
		private double radius;
		public Circle(double radius) {
			this.radius = radius;
		}
		public double getRadius() {
			return this.radius;
		}
		public void setRadius(double radius) {
			this.radius = radius;
		}
		public double area() {
			return Math.PI * radius * radius;
		}
	}

	public static class Rectangle extends Shape {
		private double width, height;
		public Rectangle(double width, double height) {
			this.width = width;
			this.height = height;
		}
		public void setHeight(double height) {
			this.height = height;
		}
		public double getHeight() {
			return this.height;
		}
		public void setWidth(double width) {
			this.width = width;
		}
		public double getWidth() {
			return this.width;
		}
		public double area() {
			return this.width * this.height;
		}
	}

	public static class AreaCalculation {
		public static double area(Shape[] shapes) {
			double area = 0;
			for (Shape shape: shapes) {
				area += shape.area();
			}
			return area;
		}
	}

	public static void print(String string) {
		System.out.println(string);
	}

	public static void main(String[] args) {
		Circle c = new Circle(10);
		print("Circle's area: " + c.area());
		Rectangle r = new Rectangle(10, 20);
		print("Rectangle's area: " + r.area());
		Shape[] shapes = new Shape[2];
		shapes[0] = c;
		shapes[1] = r;
		print(String.format("Total area: %f.", AreaCalculation.area(shapes)));
	}
}