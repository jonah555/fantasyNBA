from nba_api.stats.library.data import teams
from nba_api.stats.library.data import players
import json

database_team = {}
database_stats = {}
database_games = {}

database_player = {}
database_player_id = {}


for team in teams:
    database_team[team[0]] = {'name': team[1], 'season': {2021: {'roster': {}, 'schedule': []},
                                                          2022: {'roster': {}, 'schedule': []},
                                                          2023: {'roster': {}, 'schedule': []}}}

for player in players:
    if player[4]:
        database_player[player[0]] = {'name': player[3],'season': {2021: {'team':{},'game log': {}},
                                                                   2022: {'team':{},'game log': {}},
                                                                   2023: {'team':{},'game log': {}}}}
        
    database_player_id[player[3]] = player[0]


for i in range(0, 3):

    first = f'0022{i}00001'
    last = '0022001080' if i == 0 else f'0022{i}01230'

    for game_id in range(int(first), int(last) + 1):

        print(f'saving 202{i+1} game {game_id % 10000}...')
        
        id = f'00{game_id}'
        f = open(f'box_score/202{i}-2{1+i}/box_score_{id}.json')
        
        data = json.load(f)

        game_id = data['parameters']['GameID']
        players = data['resultSets'][0]['rowSet']

        database_games[game_id] = {'team':[], 'stats': players}
        

        for player in players:

            team_id = player[1]
            player_id = player[4]

            if player_id in database_player:

                if player_id not in database_team[team_id]['season'][2021+i]['roster']:
                    database_team[team_id]['season'][2021+i]['roster'][player_id] = player[5]
                
                if game_id not in database_team[team_id]['season'][2021+i]['schedule']:
                    database_team[team_id]['season'][2021+i]['schedule'].append(game_id)

                if team_id not in database_player[player_id]['season'][2021+i]['team']:
                    database_player[player_id]['season'][2021+i]['team'][team_id] = database_team[team_id]['name']

                if database_team[team_id]['name'] not in database_games[game_id]['team']:
                    database_games[game_id]['team'].append(database_team[team_id]['name'])
                
                database_stats[f'{game_id}_{player_id}'] = {
                    "PLAYER": player[5], "TEAM": player[2], "START": player[7], "MIN": player[9], 
                    "FGM": player[10], "FGA": player[11], "FG_PCT": player[12], 
                    "FG3M": player[13], "FG3A": player[14], "FG3_PCT": player[15], 
                    "FTM": player[16], "FTA": player[17], "FT_PCT": player[18],
                    "OREB": player[19],"DREB": player[20],"REB": player[21],
                    "AST": player[22],"STL": player[23],"BLK": player[24],
                    "TO": player[25],"PF": player[26],"PTS": player[27],"PLUS_MINUS": player[28]
                }

                database_player[player_id]['season'][2021+i]['game log'][game_id] = {
                    "MIN": player[9],
                    "FGM": player[10], "FGA": player[11], "FG_PCT": player[12], 
                    "FG3M": player[13], "FG3A": player[14], "FG3_PCT": player[15], 
                    "FTM": player[16], "FTA": player[17], "FT_PCT": player[18],
                    "OREB": player[19],"DREB": player[20],"REB": player[21],
                    "AST": player[22],"STL": player[23],"BLK": player[24],
                    "TO": player[25],"PF": player[26],"PTS": player[27],"PLUS_MINUS": player[28]
                }


with open(f'teams.json', 'w') as f:
        json.dump(database_team, f)

with open(f'players.json', 'w') as f:
        json.dump(database_player, f)

with open(f'stats.json', 'w') as f:
        json.dump(database_stats, f)

with open(f'games.json', 'w') as f:
        json.dump(database_games, f)

with open(f'name_to_id.json', 'w') as f:
        json.dump(database_player_id, f)
