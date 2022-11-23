#                             [Bitwise operators]
#Bit level operators
# &,!,<<,>>
#Bitwise and (&)

#    0 & 0 => 0
#    0 & 1 => 0
#    1 & 0 => 0
#    1 & 1 => 1

### Binary representation => 0b
##Type cost a number to binary => bin(number)


#   (Input)                                          (Output)

a = 10
b = 5
a_bin = bin(a)
b_bin = bin(b)
print(a_bin,b_bin)                               # 0b1010 0b101

# 1010 -> a bin
# 0101 -> b bin

0000
print(0b000)                                     # 0
print(int(0b000))                                # 0

0000
print(0b001)                                     # 1
print(int(0b001))                                # 1

# Bitwise or Operator(|)
# Return FALSE, if all are FALSE

# 0 | 0 => 0
# 0 | 1 => 1
# 1 | 0 => 1
# 1 | 1 => 1

a = 10
b = 5
a_bin = bin(a)
b_bin = bin(b)
print(a_bin,b_bin)                               # 0B1010 0B101

print(0b1111)                                    # 15

print(a|b)                                       # 15


#Bitwise negation(~)
#number => -(number + 1)

print(~12)                                       # -13
#Negative derive
# print(~) # -(12+1)

# Bitwise Left operator(<<)
#number << n bits ==> shift binary number by n bits from the left.
#print (100<<10) # shift binry 100 by 10 bits from the left.
#Step1- get the binary value of the number

s1 = 100
print(bin(s1))                                   # 0b1100100

#Step2-get the 34 or 64 bit representation.
#00000000000000000000000001100100
print(len("00000000000000000000000001100100"))

#Step3-shift n bits from the left and insurting n 0's to the left.

finalNum = 0b00000000000000011001000000000000

#Step4-get the int value of the bin final view

print(finalNum)                                   # 102400













