var _data; // from the previous frame

// drawing out the grid

function draw_grid(data){
    var width = 600;
    var height = 600;
};

// init variables
var grid_legth = 150;
var grid = [];
var temp_grid = [];
var population = [];
var max_ants = 100; // number of ants on the cavas
var interval = 33;  //  time delay between each of the frame in ms

//functions for converting radians and degrees
Math.to_radians = function(degrees){
    return degrees * Math.PI / 180;
};

Math.to_degrees = function(radians){
    return radians * 180 / Math.PI;
};

// function for the cells in the grid
function cell(_x, _y){
    this.x = _x;
    this.y = _y;
    this.ant = null;
    this.food = 0;
    this.signal = 0;
    this.has_ant = function() {
        return this.ant ? true : false;
    };
}

// function for the ant
function ant(){
    this.has_food = false;
    this.last_signal = 0;
    this.orientation = Math.random() * 90;
}

// creating the gird
function init_grid(){
    for(var i = 0; i < grid_legth; i++){
        grid[i] = new [];
        temp_grid[i] = new [];
        for(var j = 0; j < grid_legth; j++){
            grid[i][j]=new cell(i,j);
            temp_grid[i][j]=new cell(i,j);
        }
    }
}

