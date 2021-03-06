const string = `.html *,
.html *::before,
.html *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    position: relative;
}

.skin-top {
    border: 2px solid black;
    width: 360px;
    height: 360px;
    position: relative;
    left: 50%;
    margin-left: -180px;
    border-radius: 60% / 40%;
    top: 20vh;
    border-bottom-color: transparent;
    background-color: rgb(87, 198, 155);
    z-index: -2;
}

.skin-top::before {
    content: '';
    border: 50px solid blue;
    border-color: transparent transparent rgb(255, 251, 190) transparent;
    border-radius: 10px;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: -95px;
    z-index: 2;
}

.skin-top::after {
    content: '';
    border: 55px solid blue;
    border-color: transparent transparent black transparent;
    border-radius: 10px;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    margin-left: -55px;
    top: -103px;
    z-index: 1;

}

.mouth {
    position: absolute;
    border: 2px solid black;
    top: 180px;
    width: 320px;
    height: 112px;
    left: 50%;
    margin-left: -160px;
    border-radius: 50%;
    margin-top: -110px;
    background-color: rgb(229, 158, 176);

}

.mouth::before {
    content: "";
    display: block;
    width: 40px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    background-color: rgb(253, 189, 205);
}

.mouth::after {
    content: "";
    display: block;
    width: 40px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    left: 100%;
    margin-left: -42px;
    background-color: rgb(253, 189, 205);
}

.teeth1 {
    position: absolute;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 0 0 100px 100px;
    background: #fff;
    left: 30%;
    top: 74px;
    transform: rotate(-7deg);
}

.teeth2 {
    position: absolute;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 0 0 100px 100px;
    background: #fff;
    left: 56%;
    top: 74px;
    transform: rotate(7deg);
}

.teeth3 {
    position: absolute;
    border: 2px solid black;
    width: 38px;
    height: 20px;
    border-radius: 0 0 50px 50px;
    background: #fff;
    left: 10%;
    top: 93px;
    transform: rotate(-27deg);
}

.teeth4 {
    position: absolute;
    border: 2px solid black;
    width: 38px;
    height: 20px;
    border-radius: 0 0 50px 50px;
    background: #fff;
    left: 80%;
    top: 94px;
    transform: rotate(27deg);
}

.teeth5 {
    position: absolute;
    border: 2px solid black;
    width: 38px;
    height: 20px;
    border-radius: 50px 50px 0 0;
    background: #fff;
    left: 10%;
    top: 138px;
    transform: rotate(27deg);
}

.teeth6 {
    position: absolute;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 100px 100px 0 0;
    background: #fff;
    left: 30%;
    top: 153px;
    transform: rotate(7deg);
}

.teeth7 {
    position: absolute;
    border: 2px solid black;
    width: 50px;
    height: 25px;
    border-radius: 100px 100px 0 0;
    background: #fff;
    left: 56%;
    top: 153px;
    transform: rotate(-7deg);
}

.teeth8 {
    position: absolute;
    border: 2px solid black;
    width: 38px;
    height: 20px;
    border-radius: 50px 50px 0 0;
    background: #fff;
    left: 80%;
    top: 138px;
    transform: rotate(-27deg);
}

.skin-top .eye-left {
    position: absolute;
    border: 3px solid black;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: transparent;
    width: 15px;
    height: 15px;
    left: 20%;
    top: 35px;
    transform: rotate(100deg);
}

.skin-top .eye-right {
    position: absolute;
    border: 3px solid black;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: transparent;
    width: 15px;
    height: 15px;
    left: 76%;
    top: 35px;
    transform: rotate(165deg);
}

.skin-bottom {
    width: 406px;
    height: 200px;
    border-radius: 20% / 60%;
    border: 2px solid black;
    position: relative;
    left: 50%;
    margin-top: -3%;
    margin-left: -203px;
    border-top-color: transparent;
    border-bottom-color: transparent;
    background-color: rgb(87, 198, 155);
    z-index: -2;
}

.skin-bottom::before {
    content: "";
    width: 65px;
    display: block;
    height: 100px;
    position: absolute;
    border: 2px solid black;
    border-radius: 0 0 20px 50px;
    background-color: rgb(87, 198, 155);
    border-top-color: transparent;
    top: -14%;
    left: 25%;
    transform: rotate(-90deg);
    animation: leftMove 300ms infinite linear;
}

.skin-bottom::after {
    content: "";
    display: block;
    width: 65px;
    height: 100px;
    position: absolute;
    border: 2px solid black;
    border-radius: 0 0 50px 20px;
    background-color: rgb(87, 198, 155);
    border-top-color: transparent;
    top: -14%;
    left: 60%;
    transform: rotate(90deg);
    animation: rightMove 300ms infinite linear;
}

.skin-bottom .belly {
    position: absolute;
    width: 360px;
    height: 160px;
    background: rgb(255, 251, 190);
    border-radius: 50%;
    left: 50%;
    margin-left: -180px;
    top: 6vh;
    z-index: -1;
}

img{
    display: block;
    margin-top: -50%;
}

@keyframes leftMove {
    0% {
        left: 25%;
    }

    50% {
        left: 30%;
    }

    100% {
        left: 25%;
    }

}
@keyframes rightMove {
    0% {
        left: 60%;
    }

    50% {
        left: 55%;
    }

    100% {
        left: 60%;
    }

}
`
export default string;
