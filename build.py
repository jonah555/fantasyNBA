import json

database_team = json.load(open('teams_2021.json'))
database_player = json.load(open('players_2021.json'))
database_stats = json.load(open('stats_2021.json'))
database_games = json.load(open('games_2021.json'))
database_player_id = json.load(open('name_to_id.json'))


def lookup_stats(game_id, player_id):

    game_stats = database_stats[f'{game_id}_{player_id}']
    team = game_stats['TEAM']
    opponent = database_games[game_id]['team'][0] if database_games[game_id]['team'][1] == team else database_games[game_id]['team'][1]
    stats = {'OPP': opponent}
    stats.update(game_stats)

    return stats


def get_player_stats(player_id):

    player_info = database_player[player_id]
    stats = {'Name': player_info['name'], 'Game Log': []}

    for game in player_info['games']:
        stats['Game Log'].append(lookup_stats(game, player_id))
    
    return stats


print('Please type in the full name of the player:')
player_name_to_search = input()

player_id = str(database_player_id[player_name_to_search])

player_stats = get_player_stats(player_id)
with open(f'{player_name_to_search}_2021.json', 'w') as f:
    json.dump(player_stats, f)









