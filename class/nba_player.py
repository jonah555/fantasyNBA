import nba_stats

class NBAPlayer():

    def __init__(self, id, first_name, last_name, position, team):
        
        self.id = id
        self.name = f'{first_name} {last_name}'
        self.first_name = first_name
        self.last_name = last_name
        self.position = position
        self.team = team
        self.logs = {'22-23', [nba_stats.NBAStats()]}
        self.stats 
