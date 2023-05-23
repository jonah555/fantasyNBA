import sys
import json
import numpy as np

BOX_HEADERS = [
    'MIN', 'FGM', 'FGA', 'FG_PCT', 'FTM', 'FTA', 'FT_PCT', 'FG3M', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PTS'
]


def aggregate_stats(stats):
    total_stats = { header: 0 for header in COUNTING_STATS }
    for player in stats:
        for header, stat in player.items():
            total_stats[header] += stat if stat else 0
    # agg_stats = { header: stat/len(total_stats) for header, stat in total_stats.items() }
    return total_stats

def m_to_s_str(s):
    mins, secs = s.split(':')
    mins = mins.split('.')[0]
    return int(mins)*60 + int(secs)

def clean_averages(data):
    cleaned_data = {}
    
    # MIN
    sec = int(data[0])
    cleaned_data['MIN'] = f'{sec//60}:{sec%60:02d}'

    # FGM/FGA
    cleaned_data['FGM/FGA'] = f'{data[1]:.1f}/{data[2]:.1f}'

    # FG_PCT
    cleaned_data['FG%'] = f'{data[1]/data[2]:.3f}'

    # FTM/FTA
    cleaned_data['FTM/FTA'] = f'{data[7]:.1f}/{data[8]:.1f}'

    # FT_PCT
    cleaned_data['FT%'] = f'{data[7]/data[8]:.3f}'

    # 3PM
    cleaned_data['3PM'] = f'{data[4]:.1f}'

    # REB
    cleaned_data['REB'] = f'{data[12]:.1f}'

    # AST
    cleaned_data['AST'] = f'{data[13]:.1f}'

    # STL
    cleaned_data['STL'] = f'{data[14]:.1f}'

    # BLK
    cleaned_data['BLK'] = f'{data[15]:.1f}'

    # TO
    cleaned_data['TO'] = f'{data[16]:.1f}'

    # PTS
    cleaned_data['PTS'] = f'{data[18]:.1f}'

    return cleaned_data

# currently only writes out file if the input file is in the same directory as this python script
def main(filename):
    with open(filename, 'r') as f:
        print(f'loading {filename} as {f}')
        # print(f.readlines())
        json_file = json.load(f)
    
    for player in json_file:
        cum_avgs = []
        for year, data in player['season'].items():
            if data['game log']:
                game_log = [list(game.values()) for game in data['game log'].values() if not None in game.values()]
                for game in game_log:
                    game[0] = m_to_s_str(game[0])
                    game = [float(c) for c in game]
                if game_log:
                    game_log = np.array(game_log)
                    game_avg = np.mean(game_log, axis=0)
                    cum_avgs.append(game_avg)
                    game_avg = clean_averages(game_avg)
                else:
                    game_avg = [0.0]*12
                data['averages'] = game_avg
        if cum_avgs:
            cum_avg = np.mean(cum_avgs, axis=0)
            cum_avg = clean_averages(cum_avg)
        else:
            cum_avg = [0.0]*12
        player['averages'] = cum_avg

    new_filename = ''.join(filename.split('/')[-1].split('.')[:-1])
    with open(f'{new_filename}_averages.json', 'w') as f:
        json.dump(json_file, f)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        main(str(sys.argv[1]))