from zipfile import ZipFile, ZIP_DEFLATED
import argparse
import sys
import os


def compress(input, output):
    with ZipFile(output, 'w', compression=ZIP_DEFLATED) as z:
        z.write(input)

def filesize(file):
    return os.stat(file).st_size

parser = argparse.ArgumentParser()
parser.add_argument('file')
parser.add_argument('-n', type=int, default='5')
args = parser.parse_args()


filenames = [ args.file ]
for i in range(args.n):
    filenames.append(filenames[-1] + '.zip')

for input, output in zip(filenames, filenames[1:]):
    compress(input, output)

maxlen = max(len(filename) for filename in filenames)

for filename in filenames:
    print(f'{filename.rjust(maxlen, " ")} {filesize(filename)}')