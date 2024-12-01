use std::{collections::{BinaryHeap, HashMap}, fs};



pub fn part_one() {
    let mut heap1: BinaryHeap<i32>= std::collections::BinaryHeap::new();
    let mut heap2: BinaryHeap<i32>= std::collections::BinaryHeap::new();
    let file = fs::read_to_string("./1.txt").unwrap();
    for line in file.lines() {
        let s = line.split("   ").collect::<Vec<&str>>();
        let n1 =  s.get(0).unwrap().parse::<i32>().unwrap();
        let n2 =  s.get(1).unwrap().parse::<i32>().unwrap();
        heap1.push(n1);
        heap2.push(n2);
    }

    let mut sum = 0;
    while heap1.len() > 0 {
        let n1 = heap1.pop().unwrap();
        let n2 = heap2.pop().unwrap();
        sum += i32::abs(n1-n2);
    }
    println!("The result is: {}", sum);
}

pub fn part_two() {
    let mut ms: HashMap<i32, i32> = HashMap::new();
    let mut list: Vec<i32> = Vec::new();
    let file = fs::read_to_string("./1.txt").unwrap();
    for line in file.lines() {
        let s = line.split("   ").collect::<Vec<&str>>();
        let n1 =  s.get(0).unwrap().parse::<i32>().unwrap();
        let n2 =  s.get(1).unwrap().parse::<i32>().unwrap();
        list.push(n1);
        let h = ms.get(&n2).unwrap_or(&0);
        ms.insert(n2, h+1);
    }

    let mut sum = 0;
    for num in list {
        let h = ms.get(&num).unwrap_or(&0);
        sum += num * h;
    }

    println!("The result is: {}", sum);
}

pub fn part_one_functional() {
    let mut heap1: BinaryHeap<i32>= std::collections::BinaryHeap::new();
    let mut heap2: BinaryHeap<i32>= std::collections::BinaryHeap::new();
    let file = fs::read_to_string("./1.txt").unwrap();

    file.lines()
        .into_iter()
        .map(|line| split_parse(line))
        .for_each(|(n1, n2)| {
            heap1.push(n1);
            heap2.push(n2);
        });
    
    let mut sum = 0;
    while heap1.len() > 0 {
        let n1 = heap1.pop().unwrap();
        let n2 = heap2.pop().unwrap();
        sum += i32::abs(n1-n2);
    }
    println!("The result is: {}", sum);
    
}

fn split_parse(line: &str) -> (i32, i32) {
    let s = line.split("   ").collect::<Vec<&str>>();
    let n1 =  s.get(0).unwrap().parse::<i32>().unwrap();
    let n2 =  s.get(1).unwrap().parse::<i32>().unwrap();
    return (n1, n2);
}