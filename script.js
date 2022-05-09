const app = new Vue({
    el: "#app",
    data: {
        songs : [
            {

                title : "You make my dreams",
                band : "Hall Oates",
                audio : "Hall_Oates_-_You_Make_My_Dreams__(getmp3.pro).mp3",
                imgLink : "note.png",
                play : false

            },
            {

                title : "Highway to Hell",
                band : "AC DC",
                audio : "Highway_to_Hell_(getmp3.pro).mp3",
                imgLink : "acdc-logo-vector-wallpaper2.jpg",
                play : false

            },
            {

                title : "Kickstar my heart",
                band : "motley crew",
                audio : "Mtley_Cre_-_Kickstart_my_Heart_(getmp3.pro).mp3",
                imgLink : "adesivi-mtley-cre---too-fast-for-love.jpg",
                play : false

            },
            {

                title : "Black betty",
                band : "ram jam",
                audio : "Ram_Jam_-_Black_Betty_(getmp3.pro).mp3",
                imgLink : "71d05JTvamL._AC_SY450_.jpg",
                play : false

            },
            {

                title : "long cool woman",
                band : "The hollies",
                audio : "The_Hollies_Long_Cool_Woman_In_A_(getmp3.pro).mp3",
                imgLink : "D_NQ_NP_659323-MLB40540926852_012020-O.jpg",
                play : false

            },
            {

                title : "sympathie for the devil",
                band : "The Rolling stones",
                audio : "The_Rolling_Stones_-_Sympathy_For_T_(getmp3.pro).mp3",
                imgLink : "TheRollingStones.jpg",
                play : false
            },
            
        ],
        currentSong : null,
        currentSongBar : 0,
    },

    methods: {
        playme(index){
            console.log(index)
            this.currentSongBar = index
            if(this.currentSong != null){
                this.currentSong.pause()
                this.songs.forEach(song => {
                    song.play = false
                });
                this.songs[index].play = false
                this.currentSong = null
                this.currentSong = new Audio( "songs/" + this.songs[index].audio)
                this.currentSong.play()
                this.songs[index].play = true
            }else{

                this.currentSong = new Audio( "songs/" + this.songs[index].audio)
                this.currentSong.play()
                this.songs[index].play = true
                this.play = true

            }
        },
        stopaudio(index){
            this.currentSong.pause()
            this.songs[index].play = false
        }
    },
})