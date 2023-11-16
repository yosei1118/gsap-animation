// カーソルを動かすと発火する
document.addEventListener("mousemove", (e) => {
    // カーソルのX座標、Y座標を取得
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 第1引数に対象、第2引数に変化させたいプロパティーと設定値を指定
    gsap.to(".circle", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
    });

    // setは遅延のないもの
    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })
})