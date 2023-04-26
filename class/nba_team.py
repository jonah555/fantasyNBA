import nba_game
import nba_player

class NBATeam():

    def __init__(self, id, year, location, name, abbreviation, conference, division):
        
        self.id = id
        self.season = year
        self.location = location
        self.name = name
        self.abbreviation = abbreviation
        self.conference = conference
        self.division = division
        self.schedule = [nba_game.NBAGame()]
        self.roster = [nba_player.NBAPlayer()]
        self.record = [0, 0]
        self.stats
