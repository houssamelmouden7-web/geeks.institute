import random

def throw_dice():
    return random.randint(1, 6)

def throw_until_doubles():
    throws = 0
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        throws = throws + 1
        
        if dice1 == dice2:
            break
            
    return throws

def main():
    results = []  
    
    for i in range(100):
        count = throw_until_doubles()
        results.append(count)
    
    total_throws = sum(results)
    average_throws = total_throws / len(results)
    
    print("Total throws:", total_throws)
    print("Average throws to reach doubles:", round(average_throws, 2))

main()