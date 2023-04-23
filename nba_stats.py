class NBAStats():

    def __init__(self, game_id, player_id, stats):
        
        self.game_id = game_id
        self.player_id = player_id
        self.stats = stats
        self.header = [ "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT",
                        "OREB","DREB","REB","AST","STL","BLK","TO","PF","PTS","PLUS_MINUS" ]
    