import sys
import json

# convert the original json format { id: { player data }, ... } to new format [ { id: , player data, : }, ... ]
def main(filename):
    with open(filename, 'r') as f:
        print(f'loading {filename} as {f}')
        # print(f.readlines())
        json_file = json.load(f)
    
    players = []
    for k, v in json_file.items():
        new_dict = { 'id': k }
        new_dict.update(v)
        players.append(new_dict)

    new_filename = ''.join(filename.split('/')[-1].split('.')[:-1])
    with open(f'{new_filename}_list.json', 'w') as f:
        json.dump(players, f)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        main(str(sys.argv[1]))