
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("play-button");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
            // if (event.target == modal) {
            //     modal.style.display = "none";
            // }
        }


        //-- Youtube video play on button click
        var player;
        function onYouTubePlayerAPIReady() {
            player = new YT.Player("video", {
                events: {
                onReady: onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            var playButton = document.getElementById("play-button");
            playButton.addEventListener("click", function () {
                player.playVideo();
            });

            var pauseButton = document.getElementById("pause-button");
            pauseButton.addEventListener("click", function () {
                console.log('hello');
                player.pauseVideo();
            });
        }

        // Inject YouTube API script
        var tag = document.createElement("script");
        tag.src = "//www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
