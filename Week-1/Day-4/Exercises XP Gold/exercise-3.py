def calculate_sum(x):
    x_str = str(x)
    
    term1 = int(x_str)        
    term2 = int(x_str * 2)     
    term3 = int(x_str * 3)     
    term4 = int(x_str * 4)      
    
    total = term1 + term2 + term3 + term4
    return total

result = calculate_sum(3)
print("Natija dyal X=3 hiya:", result)  