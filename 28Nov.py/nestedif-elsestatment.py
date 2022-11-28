## NESTED IF ELSE :-

#   if(expression) :
#   if(vjvcisgvib)
#   hbsdbj
#  esle:
#       osvdsbbb

# else:
#      bbjkjchchjcjh



# Area of the figure
sides = int(input("Enter number of sides : "))

# Area of circle:-
if (sides == 1) :
    rad = imt(input("Enter the radius : "))
    print('Area of circle = ', 3.14 * rad * rad)
    
# Area of triangle
elif (sides == 3) :
    p = int(input("Enter perpendicular : "))
    b = int(input("Enter base : "))
print('Area of triangle = ', 0.5 * p * b)

# Area of quadilateral
elif (sides == 4) :
     shape = ("Enter [R] for Rectangle or [S] for Square : ")
    
    if (shape == 'R') :
        l = int(input("Enter length : "))
        b = int(input("Enter the base : "))
        print('Area of rectangle = ', l * b)
    else:
         S = int(input("Enter side : "))
         print('Area of square = ', s * s)
else:
    print("Try Again...")





  # Area of the figure
sides = int(input("Enter number of sides : "))

# Area of circle:-
if (sides == 1) :
    rad = imt(input("Enter the radius : "))
    print('Area of circle = ', 3.14 * rad * rad)
    
# Area of triangle
elif (sides == 3) :
    p = int(input("Enter perpendicular : "))
    b = int(input("Enter base : "))
print('Area of triangle = ', 0.5 * p * b)

# Area of quadilateral
elif (sides == 4) :
     shape = ("Enter [R] for Rectangle or [S] for Square : ")
    
    if (shape == 'R') :
        l = int(input("Enter length : "))
        b = int(input("Enter the base : "))
        print('Area of rectangle = ', l * b)
    elif(shape = 's'):
         S = int(input("Enter side : "))
         print('Area of square = ', s * s)
else:
    print("Invalid value")  