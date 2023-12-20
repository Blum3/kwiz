import Name_input from "./name_input";



function Home(props) {


    return (

        <div>
            
            <Name_input></Name_input>

            <button> Lancer la partie </button>
        </div>
    );
}


function handleStartGameClick() {
    // Émettre un événement au serveur (par exemple, "start_game")
    socket.emit("start_game", /* données à envoyer au serveur */);
  }

  
export default Home;