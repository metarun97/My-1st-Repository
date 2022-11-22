#[Relational/Comparisom Operators]




#Compare one operant to other.
#>,<,>=,<=,==,!=

#Output always be in boolean


print(100>200)                                     # False
print(100<200)                                     # True
print(100>=200)                                    # False
print(100<=200)                                    # True
print(100==200)                                    # False
print(100==100)                                    # True
print(100!=200)                                    # True





#                                           [Membership Operators]


#Basic Operators in Strings
#In => returns TRUE, if char or str-chunk is present  inside the string.

#Input                                              #Output

stringName = 'ball call Bat cat'
print("b"in stringName)                             # True
print("C"in stringName)                             # False
print("bat"in stringName)                           # False
print("at"in stringName)                            # True



stringName = 'ball call Bat cat'
if('ball' in stringName):
	print("Play Cricket")                           # Play Cricket
else:
	print("Play Badminton")



stringName = 'vall call Bat cat'
if('ball' in stringName):
	print("Play Cricket")                           # Play Badminton
else:
	print("Play Badminton")


stringName = 'ball call Bat cat'

print("Hello"not in stringName)                     # True

print("call"not in stringName)                      # False





