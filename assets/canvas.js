function start() {
    document.getElementById("start").remove();
    document.getElementById("hr").remove();
    console.log("Getting Context...");
    // const pen = NaN;
    const canvas = document.getElementById("canvas");
    canvas.style.visibility = "";
    if (canvas.getContext) {
        const pen = canvas.getContext("2d");
        render(pen, canvas, canvas.width/2, canvas.height/2, Math.random(0, canvas.width), Math.random(0, canvas.width));
        console.log("Got Context.");
    } else {
      console.log("Error getting context. Retrying...");
      start();
    }
}

function render(pen, canvas, playerX, playerY, enemyX, enemyY) {
    pen.font = "10px Arial";
    pen.fillText("Press any key to start.", canvas.width/2 - 40, canvas.height/2);
    pen.fillText("Use arrow keys or WASD to control the player", canvas.width/2 - 50, canvas.height/2);
    pen.fillText("Run away from the enemy!", canvas.width/2 - 60, canvas.height/2);
        window.addEventListener('keydown', function (pressedKey) {
        //   document.querySelector('p').innerHTML = `You pressed ${pressedKey.key}`;
            if (playerX - 15 < canvas.width) {
                if (pressedKey.key == "ArrowRight" || pressedKey.key == "d") {
                    // do {
                        playerX += 5;
                    // } while (pressedKey.key == "ArrowRight");
                }
            } if (playerX + 15 > 0) {
                if (pressedKey.key == "ArrowLeft" || pressedKey.key == "a") {
                    // do {
                        playerX -= 5;
                    // } while (pressedKey.key == "ArrowLeft");
                }
            } if (playerY - 15 < canvas.height) {
                if (pressedKey.key == "ArrowUp" || pressedKey.key == "w") {
                    // do {
                        playerY -= 5;
                    // } while (pressedKey.key == "ArrowUp");
                }
            } if (playerY + 15 > 0) {
                if (pressedKey.key == "ArrowDown" || pressedKey.key == "s") {
                    // do {
                        playerY += 5;
                    // } while (pressedKey.key == "ArrowDown");
                }
            }
            
        if (playerX > enemyX) {
            enemyX += 2;
        } else if (playerX <= enemyX) {
            enemyX -= 2;
        } if (playerY > enemyY) {
            enemyY += 2;
        } else if (playerY <= enemyY) {
            enemyY -= 2;
        } else {
            enemyX = 0;
            enemyY = 0;
        }
        
        // if (tokenCount == Math.random(20, 40)) {
        //     tokenCount = 0
        //     pen.strokeStyle = "#fcf803";
        //     pen.rect(tokenX, tokenY, 10, 10);
        //     pen.fillStyle = "#fcf803";
        //     pen.fill();
        //     pen.stroke();
        // } else {
        //     tokenCount += 1
        // }
        pen.clearRect(0, 0, canvas.width, canvas.height);
        pen.beginPath();
        pen.drawImage(document.getElementById("player"), playerX, playerY);
        pen.drawImage(document.getElementById("enemy"), enemyX, enemyY);
        pen.stroke();
        
        if ((playerX >= enemyX - 15) && (playerX <= enemyX + 15)) {
            if ((playerY >= enemyY - 15) && (playerY <= enemyY + 15)) {
                pen.clearRect(0, 0, canvas.width, canvas.height);
                pen.font = "10px Arial";
                pen.fillText("You Died. Press any key to start again.", canvas.width/2 - 90, canvas.height/2);
                playerX = canvas.width/2;
                playerY = canvas.height/2;
                enemyX = Math.random(0, canvas.width);
                enemyY = Math.random(0, canvas.height);
                // render(pen, canvas, canvas.width/2, canvas.height/2, Math.random(5, 20), Math.random(5, 20));
                // return;
            }
        }
    }, false);
}