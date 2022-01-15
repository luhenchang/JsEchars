let marginLeft=80
let marginBootom=100
let xText=["北京","天津","河北","山西","四川","广东","上海","深圳","江苏","河南","山西",
    "陕西","甘肃","内蒙","天塌","运城","哈尔滨","日本","台湾","香港"]
function translateCanvas(context) {
    //画布变换到左下角。
    context.translate(marginLeft,canvas.height-marginBootom)
    context.scale(1,-1)
}
//绘制X线和刻度等
function drawXLine(context) {
    //绘制X轴
    context.beginPath();
    //起始点
    context.moveTo(0,0)
    //X轴结束点
    context.lineTo(canvas.width-marginLeft*2,0)
    context.closePath();
    context.strokeStyle = 'rgb(0,0,0)';
    context.shadowBlur = 2;
    context.lineWidth=0.1
    context.shadowColor = 'rgb(100,255,255)';
    context.stroke()


    //绘制平行线
    context.save()
    //计算每一份单位宽度
    let heightOne=(canvas.height-marginBootom*2)/7
    for (let index=0; index<8; index++){
        context.beginPath();
        context.moveTo(0,0)
        context.lineTo(canvas.width-marginLeft*2,0)
        context.closePath();
        context.strokeStyle = 'rgb(0,0,0)';
        context.shadowBlur = 2;
        context.lineWidth=0.1
        context.shadowColor = 'rgb(100,255,255)';
        context.stroke()
        context.translate(0,heightOne)
    }
    context.restore()


    //绘制刻度
    context.save()
    //计算每一份单位宽度
    let widthOne=(canvas.width-marginLeft*2)/20
    for (let index=0; index<21; index++){
        context.beginPath();
        context.moveTo(0,0)
        context.lineTo(0,-5)
        context.closePath();
        context.strokeStyle = 'rgb(0,0,0)';
        context.lineWidth=0.1
        context.stroke()
        context.translate(widthOne,0)
    }
    context.closePath()
    context.restore()
}
//绘制底部文字
function drawXDownText(context){
    //绘制刻度
    context.save()
    context.scale(1,-1)
    context.beginPath();
    //计算每一份单位宽度
    let widthOne=(canvas.width-marginLeft*2)/20
    for (let index=0; index<xText.length; index++){
        const textWidth = context.measureText(xText[index]);
        //计算文字的文字，自己画图看看很简单就是相对位置剪来剪去
        context.strokeStyle = 'rgb(12,12,12)';
        context.fillText(xText[index],widthOne/2-textWidth.width/2,textWidth.emHeightAscent)
        context.stroke()
        context.translate(widthOne,0)
    }
    context.restore()


    //绘制Y轴左边的文字
    context.save()
    //这里很重要,为了字体不反转
    context.scale(1, -1)
    context.translate(-30, 0)
    context.font = "7pt Calibri";
    let heightOne=(canvas.height-marginBootom*2)/7
    //Y轴左边绘制文字
    for (let i = 0; i < 8; i++) {
        //画不是闭合区域 fill是闭合区域
        context.stroke()
        //测量文字
        const textHeight = context.measureText((3000 * i).toString());
        //设置文字绘制的位置
        context.fillText((3000 * i).toString(), 0, textHeight.emHeightAscent / 2);
        //每次绘制完之后继续往上平移
        context.translate(0, -heightOne)
    }
    context.restore()


}
let datas=[[100,2800,9000],[150,2900,600],[300,12000,400],[500,13333,4000],[1300,2000,122],[111,3333,1111],[1111,2111,1111],[111,1611,222],[444,4444,333],[222,11111,2222],[2222,2235,11],[111,1345,1111],[1111,11111,2234],[1122,12223,12],[121,1665,111],[234,334,21]
    ,[112,12134,1211],[1212,12111,134],[124,2021,112],[1222,20345,1212],[1412,17771,1111],[111,12222,1111],[1123,121333,1111],[11112,11212,111],]
//绘制巨型等条状物
function drawRect(context) {
    //绘制刻度
    context.save()
    context.beginPath();
    //计算每一份单位宽度
    let widthOne=(canvas.width-marginLeft*2)/20
    let widthOneRect=widthOne/3
    let heightOne=(canvas.height-marginBootom*2)/7
    let danwei=heightOne/3000
    for (let index=0; index<xText.length; index++){
        //计算文字的文字，自己画图看看很简单就是相对位置剪来剪去
        context.fillStyle = 'rgb(189,119,119)';
        context.fill()
        //第一个条纹
        context.fillRect(0,0,widthOneRect-1,datas[index][0]*danwei)
        context.fillStyle = 'rgb(19,172,172)';
        //第二个条纹
        context.fillRect(widthOneRect,0,widthOneRect-1,datas[index][1]*danwei)
        context.fillStyle = 'rgb(111,73,142)';
        //第三个条纹
        context.fillRect(widthOneRect*2,0,widthOneRect-1,datas[index][2]*danwei)
        context.translate(widthOne,0)
    }
    context.restore()
}




function drawRoundRect(cxt, x, y, width, height, radius){
    cxt.beginPath();
    cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    cxt.lineTo(width - radius + x, y);
    cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    cxt.lineTo(width + x, height + y - radius);
    cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    cxt.lineTo(radius + x, height +y);
    cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    cxt.closePath();
}





















