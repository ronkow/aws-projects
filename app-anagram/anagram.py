VOCAB_FILE = './vocab-anagram-10k.txt'

def compute(word):
    word = word.strip()
    word = word.lower()

    file_object1 = open(VOCAB_FILE)

    s = ''
    for line in file_object1:
        w = line.strip()
        w = w.lower()
        if w == word:
            s = compute_anagram(word)
            return s

    if s=='':
        s = '<span style="font-weight:bold">' + word + '</span>' + ' is not in our word list'
        return s


def compute_anagram(word):
    anagram = []
    sorted_word = sorted(word)

    file_object2 = open(VOCAB_FILE)

    for line in file_object2:
        w = line.strip()
        w = w.lower()
        sorted_w = sorted(w)

        if sorted_word == sorted_w and word != w:
            anagram.append(w)

    if len(anagram) == 0:
        s = '<span style="font-weight:bold">' + word + '</span>' + ' has no anagrams in our word list'
    else:
        s = 'Anagrams of ' + '<span style="font-weight:bold">' + word + '</span>' + ':' + '<br><br>'
        anagram = sorted(list(set(anagram)))
        for w in anagram:
            s += w + '<br>'

    return s


