use macroquad::prelude::*;

#[macroquad::main("BasicShapes")]
async fn main() {
    let screen_height = screen_height();
    let screen_width = screen_width();
    let gridlength: f32 = 80.0;
    let mut grid: Vec<i32> = vec![0; gridlength as usize * gridlength as usize];
    loop {


        clear_background(WHITE);



        //draw border around shit
        //draw_line(0.0, 0.0, 0.0, screen_height, 8.0, BLACK);
        //draw_line(0.0, screen_height, screen_width, screen_height, 8.0, BLACK);
        //draw_line(screen_width, screen_height, screen_width, 0.0, 8.0, BLACK);
        //draw_line(screen_width, 0.0, 0.0, 0.0, 8.0, BLACK);


        //draw x number of squares 


        for (numcopy, _i) in grid.iter().enumerate(){
            let num = numcopy as f32;
            let mut row: f32 = 0.0;
            if num >= gridlength{
                row = (num/gridlength).floor()
            }
            if *_i == 0{

                draw_rectangle((num % gridlength) *  screen_width/gridlength, row * screen_height/gridlength, screen_width/gridlength, screen_height, Color::new(245.0, 195.0, 150.0, 1.0));
            }
            if *_i == 1{
                draw_rectangle((num % gridlength) *  screen_width/gridlength, row * screen_height/gridlength, screen_width/gridlength, screen_height, BLACK);
            }
            draw_rectangle_lines((num % gridlength) *  screen_width/gridlength, row * screen_height/gridlength, screen_width/gridlength, screen_height, screen_width/gridlength/10.0, BLACK);

        }


        let mut grid_copy = grid.clone();
        if is_mouse_button_down(MouseButton::Left) {
            let mouse_pos = mouse_position();
            for (numcopy, _i) in grid.iter().enumerate(){
                let num = numcopy as f32;
                let mut row: f32 = 0.0;
                if num >= gridlength{
                    row = (num/gridlength).floor()
                }

                //calulate and compare you fucking retard
                let start_x = (num % gridlength) *  screen_width/gridlength;
                let end_x = start_x + screen_width/gridlength;
                let start_y = row * screen_height/gridlength;
                let end_y = row * screen_height/gridlength + screen_height/gridlength;

                println!("{}", start_y);
                if mouse_pos.0 > start_x && mouse_pos.0 < end_x{
                    if mouse_pos.1 > start_y && mouse_pos.1 < end_y{
                        grid_copy[numcopy] = 1;
                    }
                }
            }
        }
        grid = grid_copy;
        //make a selector outline and add it to the first square being pressed, dragging the mouse should hover hte selector and fill boxes it has hovered over.






        next_frame().await
    }
}


#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}