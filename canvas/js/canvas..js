const Point = {
    createNew: function (x,y) {
        const point = {};
        point.x = x;
        point.y = y;
        return point;
    }
};

//绘制X轴
function drawX(context) {
    context.save()
    const heightOfOne = 35
    //绘制X轴开始
    for (let i = 0; i < 7; i++) {
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(canvas.width, 0)
        context.closePath()
        //画不是闭合区域 fill是闭合区域
        if (i === 0) {
            context.lineWidth = 0.2
        } else {
            context.lineWidth = 0.09

        }
        context.stroke()
        //每次绘制完之后继续往上平移
        context.translate(0, heightOfOne)
    }
    context.restore()

    const widthOfOn = (canvas.width - marginLeft) / 7
    //绘制刻度开始
    context.save()
    context.lineWidth = 0.2
    for (let i = 0; i < 8; i++) {
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(0, -5)
        context.closePath()
        //画不是闭合区域 fill是闭合区域
        context.stroke()
        //每次绘制完之后继续往上平移
        context.translate(widthOfOn, 0)
    }
    context.restore()
}

//绘制文字
function drawText(context) {
    const heightOfOne = 35
    const widthOfOn = (canvas.width - marginLeft) / 7
    //x轴绘制文字数组
    context.save()
    const xText = ["Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun"];
    //这里沿着X轴镜像对称变换。那么Y轴向下为正，X没变向右为正。
    context.scale(1, -1)
    context.font = "7pt Calibri";
    for (let i = 0; i < xText.length; i++) {
        //画不是闭合区域 fill是闭合区域
        context.stroke()
        //每次绘制完之后继续往上平移
        if (i === 0) {
            //分析之后第一次移动了单位长度的一半。后面的每次都平移一个刻度长度,坐标圆心就平移到了每个刻度的中间。y轴向下平移了5个像素。这样就和X轴不会重合。
            context.translate(widthOfOn / 2, 15)

        } else {
            context.translate(widthOfOn, 0)
        }
        const textWidth = context.measureText(xText[i]);
        context.fillText(xText[i], -textWidth.width / 2, 0);
    }
    //还原到远点为左下角状态。
    context.restore()

    context.save()
    //这里很重要,为了字体不反转
    context.scale(1, -1)
    context.translate(-20, 0)
    context.font = "7pt Calibri";
    //Y轴左边绘制文字
    for (let i = 0; i < 7; i++) {
        //画不是闭合区域 fill是闭合区域
        context.stroke()
        //测量文字
        const textHeight = context.measureText((50 * i).toString());
        //设置文字绘制的位置
        context.fillText((50 * i).toString(), 0, textHeight.emHeightAscent / 2);
        //每次绘制完之后继续往上平移
        context.translate(0, -heightOfOne)
    }
    context.restore()
}
//绘制折线
function drawLine(context) {
    //绘制折线段
    const widthOfOn = (canvas.width - marginLeft) / 7
    const danweiHeight=35/50;//每个数字占用的实际像素高度
    const point01 = Point.createNew(widthOfOn/2,150*danweiHeight);
    const point02 = Point.createNew(widthOfOn/2+widthOfOn,250*danweiHeight);
    const point03 = Point.createNew(widthOfOn/2+widthOfOn*2,225*danweiHeight);
    const point04 = Point.createNew(widthOfOn/2+widthOfOn*3,211*danweiHeight);
    const point05 = Point.createNew(widthOfOn/2+widthOfOn*4,140*danweiHeight);
    const point06 = Point.createNew(widthOfOn/2+widthOfOn*5,148*danweiHeight);
    const point07 = Point.createNew(widthOfOn/2+widthOfOn*6,260*danweiHeight);


    const points = [point01, point02, point03, point04, point05, point06, point07];
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
    context.restore();
}
//绘制圆圈
function drawCircle(context) {
    const widthOfOn = (canvas.width - marginLeft) / 7
    const danweiHeight=35/50;//每个数字占用的实际像素高度
    const point01 = Point.createNew(widthOfOn/2,150*danweiHeight);
    const point02 = Point.createNew(widthOfOn/2+widthOfOn,250*danweiHeight);
    const point03 = Point.createNew(widthOfOn/2+widthOfOn*2,225*danweiHeight);
    const point04 = Point.createNew(widthOfOn/2+widthOfOn*3,211*danweiHeight);
    const point05 = Point.createNew(widthOfOn/2+widthOfOn*4,140*danweiHeight);
    const point06 = Point.createNew(widthOfOn/2+widthOfOn*5,148*danweiHeight);
    const point07 = Point.createNew(widthOfOn/2+widthOfOn*6,260*danweiHeight);


    const points = [point01, point02, point03, point04, point05, point06, point07];
    context.save();
    context.beginPath();
    for (let index = 0; index < points.length; index++) {
        context.beginPath();
        context.arc(points[index].x,points[index].y,3, 0, Math.PI * 2, true);

        context.fillStyle = 'rgb(100,255,255)';
        context.shadowBlur = 5;
        context.shadowColor = 'rgb(100,255,255)';
        context.fill()
    }
    context.closePath();
    context.restore();
}

/**
 * 绘制曲线
 * @param context
 */
function drawQuaraticLine(context) {
    //绘制折线段
    const widthOfOn = (canvas.width - marginLeft) / 7
    const danweiHeight=35/50;//每个数字占用的实际像素高度
    const point01 = Point.createNew(widthOfOn/2,150*danweiHeight);
    const point02 = Point.createNew(widthOfOn/2+widthOfOn,250*danweiHeight);
    const point03 = Point.createNew(widthOfOn/2+widthOfOn*2,225*danweiHeight);
    const point04 = Point.createNew(widthOfOn/2+widthOfOn*3,211*danweiHeight);
    const point05 = Point.createNew(widthOfOn/2+widthOfOn*4,140*danweiHeight);
    const point06 = Point.createNew(widthOfOn/2+widthOfOn*5,148*danweiHeight);
    const point07 = Point.createNew(widthOfOn/2+widthOfOn*6,260*danweiHeight);


    const dataList = [point01, point02, point03, point04, point05, point06, point07];
    context.save();
    context.beginPath();
    context.lineTo(point01.x,point01.y)
    //500=grid_width-40 每个单位的长度的=像素长度
    const danweiX = widthOfOn;
    const grid_width=widthOfOn;
    const xMoveDistance=20
    const yMoveDistance=30
    for (let index = 0;index < dataList.length-1;index++) {
        if (dataList[index] === dataList[index + 1]) {
            context.lineTo(danweiX*(index+1),0)
        } else if(dataList[index] < dataList[index + 1]){//y1<y2情况
            const centerX=(grid_width * index + grid_width * (1 + index)) / 2
            const centerY=(dataList[index].y + dataList[index + 1].y) / 2
            const controX0=(grid_width * index+centerX)/2
            const controY0=(dataList[index].y+centerY)/2
            const controX1=(centerX+ grid_width * (1 + index))/2
            const controY1=(centerY+dataList[index+1].y)/2
            context.bezierCurveTo(controX0+xMoveDistance,controY0-yMoveDistance,controX1-xMoveDistance,controY1+yMoveDistance,grid_width * (1 + index),dataList[index + 1].y)
        }else{
            const centerX=(grid_width * index + grid_width * (1 + index)) / 2
            const centerY=(dataList[index].y + dataList[index + 1].y) / 2
            const controX0=(grid_width * index+centerX)/2
            const controY0=(dataList[index].y+centerY)/2
            const controX1=(centerX+ grid_width * (1 + index))/2
            const controY1=(centerY+dataList[index+1].y)/2
            context.bezierCurveTo(controX0+xMoveDistance,controY0+yMoveDistance,controX1-xMoveDistance,controY1-yMoveDistance,grid_width * (1 + index),dataList[index + 1].y)
        }
    }
    context.strokeStyle="rgb(93,111,194)"
    context.lineWidth=2
    context.shadowBlur = 5;
    context.stroke();
    context.closePath();
    context.restore();
}