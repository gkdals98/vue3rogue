# 애니메이션

효과 넣을 때 참조할 애니메이션들.

```css
@keyframes matching_start {
    0%{
        transform:scale(0);
        opacity:0;
    }
    100%{
        transform:scale(1);
        opacity:1;
    }
}

@keyframes matching_select {
    0%{
        transform:scale(1.05);
    }
    20%{
        transform:scale(0.8);
    }
    40%{
        transform:scale(1.05);
    }
    60%{
        transform:scale(0.9);
    }
    100%{
        transform:scale(1);
    }
}

@keyframes matching_correct1 {
    0%{
        transform:scale(1);
        opacity:1;
    }
    100%{
        transform:scale(1.2);
        opacity:0;
    }
}

@keyframes matching_correct2_left {
    0%{
        transform:rotate(-14deg);
    }
    10%{
        transform:rotate(0deg) translateX(-20px)
    }
    20%{
        transform:rotate(-10deg) translateX(-40px);
    }
    30%{
        transform:rotate(0deg) translateX(-60px);
    }
    40%{
        transform:rotate(-6deg) translateX(-80px);
    }
    50%{
        transform:rotate(0deg) translateX(-100px);
    }
    60%{
        transform:rotate(-2deg) translateX(-120px);
    }
    70%{
        transform:rotate(0deg) translateX(-140px);
    }
    80%{
        transform:translateX(-160px);
    }
    90%{
        transform:translateX(-180px);
    }
    100%{
        transform:translateX(-200px);
        opacity:0;
    }
}

@keyframes matching_correct2_right {
    0%{
        transform:rotate(14deg);
        opacity:1;
    }
    10%{
        transform:rotate(0deg) translateX(20px)
    }
    20%{
        transform:rotate(10deg) translateX(40px);
    }
    30%{
        transform:rotate(0deg) translateX(60px);
    }
    40%{
        transform:rotate(6deg) translateX(80px);
    }
    50%{
        transform:rotate(0deg) translateX(100px);
    }
    60%{
        transform:rotate(2deg) translateX(120px);
    }
    70%{
        transform:rotate(0deg) translateX(140px);
    }
    80%{
        transform:translateX(160px);
    }
    90%{
        transform:translateX(180px);
    }
    100%{
        transform:translateX(200px);
        opacity:0;
    }
}

@keyframes matching_wrong {
    0%{
        transform:rotate(6deg) translateY(0);
    }
    10%{
        transform:rotate(-6deg) translateY(-10px);
    }
    20%{
        transform:rotate(6deg) translateY(-20px);
    }
    30%{
        transform:rotate(-6deg) translateY(-30px);
    }
    40%{
        transform:rotate(6deg) translateY(-40px);
    }
    50%{
        transform:rotate(-6deg) translateY(-50px);
    }
    60%{
        transform:rotate(6deg) translateY(-40px);
    }
    70%{
        transform:rotate(-6deg) translateY(-30px);
    }
    80%{
        transform:rotate(6deg) translateY(-20px);
    }
    90%{
        transform:rotate(-6deg) translateY(-10px);
    } 
    100%{
        transform:rotate(0deg) translateY(0px);
    } 
}
```
