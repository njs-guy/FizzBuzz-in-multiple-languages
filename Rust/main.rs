fn main() {
    for x in 1..101 {
        if x % 3 == 0 && x % 5 == 0 {
            println!("Fizzbuzz");
        } else if x % 3 == 0 {
            println!("Fizz");
        } else if x % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", x);
        }
    }
}