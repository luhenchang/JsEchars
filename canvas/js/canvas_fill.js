function drawFillLine(context) {
    //绘制折线段
    const widthOfOn = (canvas.width - marginLeft) / 7
    const danweiHeight=35/50;//每个数字占用的实际像素高度
    const point00 = Point.createNew(0,150*danweiHeight);
    const point01 = Point.createNew(widthOfOn/2,150*danweiHeight);
    const point02 = Point.createNew(widthOfOn/2+widthOfOn,250*danweiHeight);
    const point03 = Point.createNew(widthOfOn/2+widthOfOn*2,225*danweiHeight);
    const point04 = Point.createNew(widthOfOn/2+widthOfOn*3,211*danweiHeight);
    const point05 = Point.createNew(widthOfOn/2+widthOfOn*4,140*danweiHeight);
    const point06 = Point.createNew(widthOfOn/2+widthOfOn*5,148*danweiHeight);
    const point07 = Point.createNew(widthOfOn/2+widthOfOn*6,260*danweiHeight);


    const points = [point00,point01, point02, point03, point04, point05, point06, point07];
    context.save();
    context.beginPath();
    for (let index = 0; index < points.length; index++) {
        context.lineTo(points[index].x,points[index].y);
    }
    context.strokeStyle="rgb(93,111,194)"
    context.lineWidth=1
    context.shadowBlur = 5;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(0,0)
    for (let index = 0; index < points.length; index++) {
        context.lineTo(points[index].x,points[index].y);
    }
    context.lineTo(points[points.length-1].x,0);
    context.lineTo(0,0);
    context.closePath();
    context.fillStyle=getGradient(context,canvas)
    context.lineWidth=3
    context.shadowBlur = 5;
    context.fill();
    context.restore();


}
function getGradient(context,canvas){
    const gradient = context.createLinearGradient(
        0,
        canvas.height,
        0,0 );
    gradient.addColorStop(0, "rgba(200,155,155,1)")
    gradient.addColorStop(0.5, "rgba(200,155,255,1)")
    gradient.addColorStop(0.8, "rgba(200,255,255,1)")
    gradient.addColorStop(1, "rgba(100,255,255,1.0)")
    return gradient
}