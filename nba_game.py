class NBAGame():

    def __init__(self, id, date, team_1, team_2, status, box_score):
        
        self.id = id
        self.date = date
        self.team_1 = team_1
        self.team_2 = team_2
        self.status = status
        self.box_score = box_score
        self.play_by_play