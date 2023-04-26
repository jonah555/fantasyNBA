class NBAGame():

    def __init__(self, id, season, date, away_team, home_team, status, box_score):
        
        self.id = id
        self.season = season
        self.date = date
        self.away_team = away_team
        self.home_team = home_team
        self.status = status
        self.box_score = box_score
        self.play_by_play