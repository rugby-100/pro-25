class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,radius/2, options)
        this.paperImg = loadImage("paper.png")
        World.add(world, this.body)
        this.radius = radius

    }

    display() {
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.paperImg, pos.x, pos.y, this.radius, this.radius)
        pop()
    }
}