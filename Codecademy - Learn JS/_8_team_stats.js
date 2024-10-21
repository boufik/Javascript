// Factory Function of players and games - Constructors
// Destructuring assignment
function Player(firstName, lastName, age){
    return {
        firstName, lastName, age
    }
}

function Game(opponent, teamPoints, opponentPoints){
    return {
        opponent, teamPoints, opponentPoints
    }
}

// Create objects - instances
player1 = Player('Cole', 'Palmer', 20);
player2 = Player('Reece', 'James', 25);
player3 = Player('Christian', 'Nkunku', 28);
game1 = Game('Wolves', 1, 1);
game2 = Game('Crystal Palace', 3, 0);
game3 = Game('Liverpool', 0, 3);

// Create an object
const team = {
    // Attributes
    _players : [player1, player2, player3],
    _games : [game1, game2, game3],
    // Getters (there will be NO setters)
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    // Methods
    addPlayer(newFN, newLN, newAge){
        player = Player(newFN, newLN, newAge);
        this._players.push(player);
    },
    addGame(newO, newTP, newOP){
        game = Game(newO, newTP, newOP);
        this._games.push(game);
    },
    status(){
        console.log(this._players);
        console.log(this._games);
    }
}

// MAIN FUNCTION
team.addPlayer('Enzo', 'Fernandez', 22);
team.addGame('Manchester City', 3, 0);
team.status();
