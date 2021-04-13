import sys


def compress(string):
    result = ''
    index = 0
    while index < len(string):
        if string[index:index+2] == 'qu':
            result += 'q'
            index += 2
        else:
            result += string[index]
            index += 1
    return result


def decompress(string):
    result = ''
    index = 0
    while index < len(string):
        if string[index] == 'q':
            result += 'qu'
        else:
            result += string[index]
        index += 1
    return result


string = sys.argv[1]
compressed = compress(string)
decompressed = decompress(compressed)

longest = max(len(string), len(compressed), len(decompressed))

print(f'{string.ljust(longest)}  ({len(string)})')
print(f'{compressed.ljust(longest)}  ({len(compressed)})')
print(f'{decompressed.ljust(longest)}  ({len(decompressed)})')
print(string == decompressed)