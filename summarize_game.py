import sys
import json

HEADERS = [
    "GAME_ID",
    "TEAM_ID",
    "TEAM_ABBREVIATION",
    "TEAM_CITY",
    "PLAYER_ID",
    "PLAYER_NAME",
    "NICKNAME",
    "START_POSITION",
    "COMMENT",
    "MIN",
    "FGM",
    "FGA",
    "FG_PCT",
    "FG3M",
    "FG3A",
    "FG3_PCT",
    "FTM",
    "FTA",
    "FT_PCT",
    "OREB",
    "DREB",
    "REB",
    "AST",
    "STL",
    "BLK",
    "TO",
    "PF",
    "PTS",
    "PLUS_MINUS"]

COUNTING_STATS = [
    "FGM",
    "FGA",
    "FG3M",
    "FG3A",
    "FTM",
    "FTA",
    "OREB",
    "DREB",
    "REB",
    "AST",
    "STL",
    "BLK",
    "TO",
    "PF",
    "PTS"]

def map_stats_to_headers(stats, headers=HEADERS, counting_only=True):
    if counting_only:
        return { header: stat for stat, header in zip(stats, headers) if header in COUNTING_STATS }
    else:
        return { header: stat for stat, header in zip(stats, headers) }


def aggregate_stats(stats):
    total_stats = { header: 0 for header in COUNTING_STATS }
    for player in stats:
        for header, stat in player.items():
            total_stats[header] += stat if stat else 0
    # agg_stats = { header: stat/len(total_stats) for header, stat in total_stats.items() }
    return total_stats


# currently only writes out file if the input file is in the same directory as this python script
def main(filename):
    with open(filename, 'r') as f:
        print(f'loading {filename} as {f}')
        # print(f.readlines())
        json_file = json.load(f)
    
    games = {}
    for game in json_file:
        away_team = game['team'][0]
        home_team = game['team'][1]
        team_stats = { away_team: [], home_team: [] }
        for player in game['stats']:
            player_stats = map_stats_to_headers(player)
            team_stats[player[2]].append(player_stats)
        away_stats = aggregate_stats(team_stats[away_team])
        home_stats = aggregate_stats(team_stats[home_team])
        games[game['id']] = { away_team: away_stats, home_team: home_stats }
    
    new_filename = ''.join(filename.split('/')[-1].split('.')[:-1])
    with open(f'{new_filename}_summary.json', 'w') as f:
        json.dump(games, f)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        main(str(sys.argv[1]))