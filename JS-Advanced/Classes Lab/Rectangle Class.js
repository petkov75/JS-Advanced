class Rectangle {
    constructor(width, height ,color){
       this.height = height;
       this.width = width ;
       this.color = color;       
    }
     //deckaraciq na function
    calcArea(){
       return this.height * this.width;
    }

    toString(){
        return `With:${this.width}\nHeight:${this.height}`;
    }
}

let firstRectangle = new Rectangle(3 ,4 ,'red');


//console.log(firstRectangle.height,firstRectangle.width);
///firstRectangle.height=344;
//console.log(firstRectangle.height,firstRectangle.width);
console.log(firstRectangle.calcArea());
console.log(firstRectangle.toString());