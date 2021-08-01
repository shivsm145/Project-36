var foodStock

class Milk
{
    constructor(x,y,width,height)
    {
        this.width = width;
        this.height = height;
        this.image = loadImage("Milk.png");
        this.body = Bodies.rectangle(x, y, width,height, options);

    }

}
