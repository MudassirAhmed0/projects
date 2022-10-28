// LottieInteractivity.create({
//     player:'.lottilines1',
//     // mode:"scroll",
//     //  container: "#benchmarking_tab_and_content",
//     actions: [
//         {
//         visibility: [0.50, 1.0],
//         type: "play"
//         }
//     ]
// });
// LottieInteractivity.create({
//     player:'.lottilines2',
//     // mode:"scroll",
//     //  container: "#benchmarking_tab_and_content",
//     actions: [
//         {
//         visibility: [0.50, 1.0],
//         type: "play"
//         }
//     ]
// });
// LottieInteractivity.create({
//     player:'.lottilines3',
//     // mode:"scroll",
//     //  container: "#benchmarking_tab_and_content",
//     actions: [
//         {
//         visibility: [0.50, 1.0],
//         type: "play"
//         }
//     ]
// });
// LottieInteractivity.create({
//     player:'.lottilines4',
//     // mode:"scroll",
//     //  container: "#benchmarking_tab_and_content",
//     actions: [
//         {
//         visibility: [0.50, 1.0],
//         type: "play"
//         }
//     ]
// });






let player1 = document.getElementById("lottilines1");
let player2 = document.getElementById("lottilines2");
let player3 = document.getElementById("lottilines3");
let player4 = document.getElementById("lottilines4");
let play = document.getElementById("alltabs");

function myanimation() {
    console.log("working.");

    setTimeout(
        () => {
            player1.getLottie().playSegments([0, 60], true);
            player2.getLottie().playSegments([0, 60], true);
            player3.getLottie().playSegments([0, 60], true);
            player4.getLottie().playSegments([0, 60], true);
        }, 50);




}; 
