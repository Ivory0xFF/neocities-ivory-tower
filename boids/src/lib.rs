use wasm_bindgen::prelude::*;
use web_sys;
use std::ops::{Add, Sub, Mul, Div};

#[derive(Debug, Copy, Clone, PartialEq)]
struct Vec2 {
    x: f32,
    y: f32,
}

impl Vec2 {
    fn new(x: f32, y: f32) -> Vec2 {
       Vec2 {x, y}
    }
}

impl Add for Vec2 {
    type Output = Vec2;

    fn add(self, other: Self) -> Vec2 {
        Vec2 {x: self.x + other.x, y: self.y + other.y}
    }
}

impl Sub for Vec2 {
    type Output = Vec2;

    fn sub(self, other: Self) -> Vec2 {
        Vec2 {x: self.x - other.x, y: self.y - other.y}
    }
}

impl Mul for Vec2 {
    type Output = Vec2;

    fn mul(self, other: Self) -> Vec2 {
        Vec2 {x: self.x * other.x, y: self.y * other.y}
    }
}

impl Div for Vec2 {
    type Output = Vec2;

    fn div(self, other: Self) -> Vec2 {
        Vec2 {x: self.x / other.x, y: self.y / other.y}
    }
}

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = document)]
    fn getElementById(s: &str);
}

#[wasm_bindgen]
pub fn start() {
    
}
