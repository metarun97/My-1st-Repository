#Input- Take value from the user at real time.

# (Input)                                       (Output)

day = input()                                   # Sunday
print(day)                                      #  I got Sunday


day =input("what is your favorite day : ")      # what is your favorite day : Sunday
print(day)                                      # Sunday


day =input("what is your favorite day : ")      # what is your favorite day : Friday
print(day)                                      # Friday


day = input("what is your favorite day - ")     # what is your favorite day - Wednesday
print(day,type(day))                            # Wednesday <class 'str'>

# Type cast the value to work with some other operations.
# Convert one data type to another.

a = 100
b = str(a)
print(a,type(a))                                # 100 <class 'int'>
print(b,type(b))                                # 100 <class 'str'>


c = float(a)
print(c, type(c))                               # 100.0 <class'float'>


num1 = 14.25
print(num1, type(num1))                         # 14.25 <class 'float'>

num2 = int(num1)
print(num2, type(num2))                         # 14 <class 'int'>


str_1 = str(num1)
print(str_1, type(str_1))                       # 14.25 <class 'str'>

#Integer values of the boolean


p1 = 1
print(p1, type(p1))                             # 1 <class 'int'>

p2 = False
print(p2, type(p2))                             # False <class 'bool'>


q1 = int(True)
print(q1, type(q1))                             # 1 <class 'int'>

q2 = int(False)
print(q2, type(q2))                             # 0 <class 'int'>



r1 = bool(1)
r2 = bool(0)                           
print(r1, type(r1))                             # True <class 'bool'>
print(r2, type(r2))                             # False <class 'bool'>


salary = float(input("what is your salary : "))   # what is your salary : 500
print("salary = ", salary)                        # salary =  500.0

salary = float(input("what is your salary: "))    # what is your salary: 500
print("salary = ", salary + 100)                  # salary =  600.0












