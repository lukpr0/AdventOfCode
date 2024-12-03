use std::{fs, path::Iter};

pub fn part_one() {
    let file = fs::read_to_string("./2.txt").unwrap();
    let x = file.lines()
        .into_iter()
        .map(|line| line.split_whitespace())
        .map(|line| line.map(|split| split.parse::<i32>().unwrap()))
        .map(|nums| nums.map(|num| (Direction::NONE, num)))
        .map(|nums| nums.reduce(|acc, num|check(acc, num)).unwrap())
        .filter(|report| report.0 != Direction::ERROR)
        .count();
    println!("The Answer is {}", x);
}

pub fn part_two() {
    let file = fs::read_to_string("./2.txt").unwrap();
    let x = file.lines()
        .into_iter()
        .map(|line| line.split_whitespace())
        .map(|line| line.map(|split| split.parse::<i32>().unwrap()))
        .map(|nums| nums.map(|num| (Direction::NONE, num, true)))
        .map(|nums| check2(nums))
        .filter(|report| *report)
        .count();
    println!("The Answer is {}", x);
}

fn check((dir, last ): (Direction, i32), (_, current): (Direction, i32)) -> (Direction, i32) {
    if i32::abs(last-current) > 3 {
        return (Direction::ERROR, current)
    }
    match (dir, last, current)  {
        (Direction::NONE, last, current) if last > current =>
            (Direction::DESC, current),
        (Direction::NONE, last, current) if current > last =>
            (Direction::ASC, current),
        (Direction::ASC, last, current) if current > last => 
            (Direction::ASC, current),
        (Direction::DESC, last, current) if current < last =>
            (Direction::DESC, current),
        (_, _, _) => 
            (Direction::ERROR, current)
    } 
}

fn check2(nums: impl Iterator) -> bool {
    true
}

#[derive(PartialEq, Eq)]
enum Direction {
    NONE,
    ASC,
    DESC,
    ERROR
}