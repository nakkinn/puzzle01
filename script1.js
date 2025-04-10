let x1, y1, x2, y2, x3, y3, x4, y4;
let r1, r2;

let balls_init, balls;

let mode1 = -1;
let angle0 = 0;
let angle1 = 0;



document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


const btn_shuffle = document.getElementById("btn_shuffle");
btn_shuffle.addEventListener("click", function() {
    let code1 = new Array(10);
    for(let i=0; i<code1.length; i++){
        code1[i] = [Math.round(Math.random()*2), Math.round(Math.random()*11)];
    }
    for(let i=0; i<code1.length; i++){
        if(code1[i][0]==0) f1(code1[i][1]);
        if(code1[i][0]==1) f2(code1[i][1]);
        if(code1[i][0]==2) f3(code1[i][1]);
    }
});



function setup(){
    createCanvas(windowWidth, windowWidth);

    r1 = Math.min(width,height) / 6.2;
    r2 = r1 * sqrt(3);

    x1 = width / 2 + r1 * cos(PI/6);
    y1 = height / 2 + r1 * sin(PI/6);
    x2 = width / 2 + r1 * cos(PI/6 + PI / 3 * 2);
    y2 = height / 2 + r1 * sin(PI/6 + PI / 3 * 2);
    x3 = width / 2 + r1 * cos(PI/6 + PI / 3 * 4);
    y3 = height / 2 + r1 * sin(PI/6 + PI / 3 * 4);


    balls= [
        { name:"A0", pos:"A0", x:x1+r2*cos(PI/6*0), y:y1+r2*sin(PI/6*0), angle:undefined},
        { name:"A1", pos:"A1", x:x1+r2*cos(PI/6*1), y:y1+r2*sin(PI/6*1), angle:undefined},
        { name:"A2", pos:"A2", x:x1+r2*cos(PI/6*2), y:y1+r2*sin(PI/6*2), angle:undefined},
        { name:"A3", pos:"A3", x:x1+r2*cos(PI/6*3), y:y1+r2*sin(PI/6*3), angle:undefined},
        { name:"A5", pos:"A5", x:x1+r2*cos(PI/6*5), y:y1+r2*sin(PI/6*5), angle:undefined},
        { name:"A7", pos:"A7", x:x1+r2*cos(PI/6*7), y:y1+r2*sin(PI/6*7), angle:undefined},
        { name:"A9", pos:"A9", x:x1+r2*cos(PI/6*9), y:y1+r2*sin(PI/6*9), angle:undefined},
        { name:"A11", pos:"A11", x:x1+r2*cos(PI/6*11), y:y1+r2*sin(PI/6*11), angle:undefined},
        { name:"B1", pos:"B1", x:x2+r2*cos(PI/6*1), y:y2+r2*sin(PI/6*1), angle:undefined},
        { name:"B3", pos:"B3", x:x2+r2*cos(PI/6*3), y:y2+r2*sin(PI/6*3), angle:undefined},
        { name:"B4", pos:"B4", x:x2+r2*cos(PI/6*4), y:y2+r2*sin(PI/6*4), angle:undefined},
        { name:"B5", pos:"B5", x:x2+r2*cos(PI/6*5), y:y2+r2*sin(PI/6*5), angle:undefined},
        { name:"B6", pos:"B6", x:x2+r2*cos(PI/6*6), y:y2+r2*sin(PI/6*6), angle:undefined},
        { name:"B7", pos:"B7", x:x2+r2*cos(PI/6*7), y:y2+r2*sin(PI/6*7), angle:undefined},
        { name:"B9", pos:"B9", x:x2+r2*cos(PI/6*9), y:y2+r2*sin(PI/6*9), angle:undefined},
        { name:"B11", pos:"B11", x:x2+r2*cos(PI/6*11), y:y2+r2*sin(PI/6*11), angle:undefined},
        { name:"C1", pos:"C1", x:x3+r2*cos(PI/6*1), y:y3+r2*sin(PI/6*1), angle:undefined},
        { name:"C3", pos:"C3", x:x3+r2*cos(PI/6*3), y:y3+r2*sin(PI/6*3), angle:undefined},
        { name:"C5", pos:"C5", x:x3+r2*cos(PI/6*5), y:y3+r2*sin(PI/6*5), angle:undefined},
        { name:"C7", pos:"C7", x:x3+r2*cos(PI/6*7), y:y3+r2*sin(PI/6*7), angle:undefined},
        { name:"C8", pos:"C8", x:x3+r2*cos(PI/6*8), y:y3+r2*sin(PI/6*8), angle:undefined},
        { name:"C9", pos:"C9", x:x3+r2*cos(PI/6*9), y:y3+r2*sin(PI/6*9), angle:undefined},
        { name:"C10", pos:"C10", x:x3+r2*cos(PI/6*10), y:y3+r2*sin(PI/6*10), angle:undefined},
        { name:"C11", pos:"C11", x:x3+r2*cos(PI/6*11), y:y3+r2*sin(PI/6*11), angle:undefined},
        { name:"D4", pos:"D4", x:x1+r2*cos(PI/6*4), y:y1+r2*sin(PI/6*4), angle:undefined},
        { name:"D8", pos:"D8", x:x1+r2*cos(PI/6*8), y:y1+r2*sin(PI/6*8), angle:undefined},
        { name:"E0", pos:"E0", x:x2+r2*cos(PI/6*0), y:y2+r2*sin(PI/6*0), angle:undefined},
        { name:"E8", pos:"E8", x:x2+r2*cos(PI/6*8), y:y2+r2*sin(PI/6*8), angle:undefined},
        { name:"F0", pos:"F0", x:x3+r2*cos(PI/6*0), y:y3+r2*sin(PI/6*0), angle:undefined},
        { name:"F4", pos:"F4", x:x3+r2*cos(PI/6*4), y:y3+r2*sin(PI/6*4), angle:undefined}
    ];

    balls_init = JSON.parse(JSON.stringify(balls));


}

function draw(){
    background(255);

    
    noFill();
    strokeWeight(r1*0.026);
    stroke(100);
    stroke(255, 0, 0);
    circle(x1, y1, r1*sqrt(3)*2);

    stroke(0, 200, 0);
    circle(x2, y2, r1*sqrt(3)*2);

    stroke(0, 0, 255);
    circle(x3, y3, r1*sqrt(3)*2);



    noStroke();
    fill(100);
    for(let i=0; i<12; i++){
        circle(x1 + r2*cos(PI/6 + PI/6*i), y1 + r2*sin(PI/6 + PI/6*i), r1*0.125);
    }

    for(let i=0; i<12; i++){
        circle(x2 + r2*cos(PI/6 + PI/6*i), y2 + r2*sin(PI/6 + PI/6*i), r1*0.125);
    }

    for(let i=0; i<12; i++){
        circle(x3 + r2*cos(PI/6 + PI/6*i), y3 + r2*sin(PI/6 + PI/6*i), r1*0.125);
    }
    

    
    //黄色
    noFill();
    strokeWeight(r1*0.026);
    stroke(255, 180, 0);
    circle( x1+r2*cos(PI/6*4), y1+r2*sin(PI/6*4), r1*0.52 );
    circle( x1+r2*cos(PI/6*8), y1+r2*sin(PI/6*8), r1*0.52 );

    //水色
    stroke(0, 200, 255);
    circle( x2+r2*cos(PI/6*0), y2+r2*sin(PI/6*0), r1*0.52 );
    circle( x2+r2*cos(PI/6*8), y2+r2*sin(PI/6*8), r1*0.52 );

    //紫色
    stroke(255, 0, 255);
    circle( x3+r2*cos(PI/6*0), y3+r2*sin(PI/6*0), r1*0.52 );
    circle( x3+r2*cos(PI/6*4), y3+r2*sin(PI/6*4), r1*0.52 );


    // noStroke();
    // let opacity = 70;
    // for(let i=0; i<balls_init.length; i++){
    //     if(balls_init[i].name.charAt(0)=="A")    fill(255, 0, 0, opacity);
    //     if(balls_init[i].name.charAt(0)=="B")    fill(0, 200, 0, opacity);
    //     if(balls_init[i].name.charAt(0)=="C")    fill(0, 0, 255, opacity);
    //     if(balls_init[i].name.charAt(0)=="D")    fill(255, 180, 0, opacity);
    //     if(balls_init[i].name.charAt(0)=="E")    fill(0, 200, 255, opacity);
    //     if(balls_init[i].name.charAt(0)=="F")    fill(255, 0, 255, opacity);
    //     circle(balls_init[i].x, balls_init[i].y, 60);
    // }

    noStroke();
    for(let i=0; i<balls.length; i++){
        if(balls[i].name.charAt(0)=="A")    fill(255, 0, 0);
        if(balls[i].name.charAt(0)=="B")    fill(0, 200, 0);
        if(balls[i].name.charAt(0)=="C")    fill(0, 0, 255);
        if(balls[i].name.charAt(0)=="D")    fill(255, 180, 0);
        if(balls[i].name.charAt(0)=="E")    fill(0, 200, 255);
        if(balls[i].name.charAt(0)=="F")    fill(255, 0, 255);
        circle(balls[i].x, balls[i].y, r1*0.26);
    }


}


function touchStarted(){

    for(let i=0; i<balls.length; i++){
        balls[i].angle = undefined;
    }

    if( dist(mouseX,mouseY,x1,y1)>r2*0.9 && dist(mouseX,mouseY,x1,y1)<r2*1.1 ){
        angle0 = atan2(mouseY-y1, mouseX-x1);
        mode1 = 1;
        for(let i=0; i<balls.length; i++){
            if(balls[i].pos.charAt(0)=="A" || balls[i].pos.charAt(0)=="D" || balls[i].pos.charAt(0)=="F"){
                balls[i].angle = atan2(balls[i].y-y1, balls[i].x-x1);
            }
        }
    }else if( dist(mouseX,mouseY,x2,y2)>r2*0.9 && dist(mouseX,mouseY,x2,y2)<r2*1.1 ){
        angle0 = atan2(mouseY-y2, mouseX-x2);
        mode1 = 2;
        for(let i=0; i<balls.length; i++){
            if(balls[i].pos.charAt(0)=="B" || balls[i].pos.charAt(0)=="D" || balls[i].pos.charAt(0)=="E"){
                balls[i].angle = atan2(balls[i].y-y2, balls[i].x-x2);
            }
        }
    }else if( dist(mouseX,mouseY,x3,y3)>r2*0.9 && dist(mouseX,mouseY,x3,y3)<r2*1.1 ){
        angle0 = atan2(mouseY-y3, mouseX-x3);
        mode1 = 3;
        for(let i=0; i<balls.length; i++){
            if(balls[i].pos.charAt(0)=="C" || balls[i].pos.charAt(0)=="E" || balls[i].pos.charAt(0)=="F"){
                balls[i].angle = atan2(balls[i].y-y3, balls[i].x-x3);
            }
        }
    }

}


function touchMoved(){

    if(mode1==1){
        angle1 = atan2(mouseY-y1, mouseX-x1);
        for(let i=0; i<balls.length; i++){
            if(balls[i].angle != undefined){
                balls[i].x = x1 + r2*cos(balls[i].angle + angle1 - angle0);
                balls[i].y = y1 + r2*sin(balls[i].angle + angle1 - angle0);
            }
        }
    }


    if(mode1==2){
        angle1 = atan2(mouseY-y2, mouseX-x2);
        for(let i=0; i<balls.length; i++){
            if(balls[i].angle != undefined){
                balls[i].x = x2 + r2*cos(balls[i].angle + angle1 - angle0);
                balls[i].y = y2 + r2*sin(balls[i].angle + angle1 - angle0);
            }
        }
    }

    if(mode1==3){
        angle1 = atan2(mouseY-y3, mouseX-x3);
        for(let i=0; i<balls.length; i++){
            if(balls[i].angle != undefined){
                balls[i].x = x3 + r2*cos(balls[i].angle + angle1 - angle0);
                balls[i].y = y3 + r2*sin(balls[i].angle + angle1 - angle0);
            }
        }
    }


}



function touchEnded(){
    if(mode1!=-1){
        let a1 = Math.round( (angle1 + 2*PI - angle0) % (2*PI) * 12 / (2*PI) ) % 12;
        if(mode1==1)   f1(a1);
        if(mode1==2)   f2(a1);
        if(mode1==3)   f3(a1);
    }
    mode1 = -1;
}



function f1(arg){

    const nameMap = {
        "A0": "A1", "A1": "A2", "A2": "A3", "A3": "D4",
        "D4": "A5", "A5": "F4", "F4": "A7", "A7": "D8",
        "D8": "A9", "A9": "F0", "F0": "A11", "A11": "A0"
    };
    
    for(let k=0; k<arg; k++){
        for (let i = 0; i < balls.length; i++) {
            if (nameMap[balls[i].pos]) {
                balls[i].pos = nameMap[balls[i].pos];
            }
        }
    }

    for(let i=0; i<balls.length; i++){
        let tmp = balls_init.find(value => value.pos == balls[i].pos);
        balls[i].x = tmp.x;
        balls[i].y = tmp.y;
    }

}


function f2(arg){

    const nameMap = {
        "E0": "B1", "B1": "D4", "D4": "B3", "B3": "B4",
        "B4": "B5", "B5": "B6", "B6": "B7", "B7": "E8",
        "E8": "B9", "B9": "D8", "D8": "B11", "B11": "E0"
    };
    
    for(let k=0; k<arg; k++){
        for (let i = 0; i < balls.length; i++) {
            if (nameMap[balls[i].pos]) {
                balls[i].pos = nameMap[balls[i].pos];
            }
        }
    }

    for(let i=0; i<balls.length; i++){
        let tmp = balls_init.find(value => value.pos == balls[i].pos);
        balls[i].x = tmp.x;
        balls[i].y = tmp.y;
    }

}


function f3(arg){

    const nameMap = {
        "F0": "C1", "C1": "E0", "E0": "C3", "C3": "F4",
        "F4": "C5", "C5": "E8", "E8": "C7", "C7": "C8",
        "C8": "C9", "C9": "C10", "C10": "C11", "C11": "F0"
    };
    
    for(let k=0; k<arg; k++){
        for (let i = 0; i < balls.length; i++) {
            if (nameMap[balls[i].pos]) {
                balls[i].pos = nameMap[balls[i].pos];
            }
        }
    }

    for(let i=0; i<balls.length; i++){
        let tmp = balls_init.find(value => value.pos == balls[i].pos);
        balls[i].x = tmp.x;
        balls[i].y = tmp.y;
    }

}
