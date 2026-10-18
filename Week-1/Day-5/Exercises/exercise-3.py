class song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def play(self):
        for line in self.lyrics:
            print(line)

stairway = song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])
stairway.play()