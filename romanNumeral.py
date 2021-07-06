def roman_calculator(roman_string):
    """
        Takes a roman numeral string as input and outputs the numerical value
        :param roman_string:
        :returns: numerical values of roman_string
    """

    running_total = 0
    greatest_letter = ''
    roman_string = roman_string[::-1] #reversing the string to go backwards

    """
        We go backwards through the roman_string because it makes calculations easier
        If we wanted to be more efficient and not reverse the string, we could
        Simply iterate through the string backwards, using pointers
        an example of this in Java would be:
        for(int i = roman_string.length-1; i >= 0; i--)

        I decided to go with the python character iteration just because I like it.
        Although, the overall speed complexity with N being the number of roman numerals
        ends up to be at max 2N, which ends up being N at the limit.
    """
    for letter in roman_string:

        if (letter == 'X'):
            #In the case we hit an X, since X is the greatest value in our example
            #We add X to our running_total, we also keep it as our current greatest letter
            greatest_letter = 'X'
            running_total = running_total + 10
        elif (letter == 'V'):
            if(greatest_letter == 'X'):
                #With the V case, if we already have seen an X then we subtract V
                #Since X is greater than V, X will still by our greatest_letter
                #Example: VX would evaluate to 5 because 10 - 5
                running_total = running_total - 5
            else:
                #If we haven't seen an X yet then we make it the greatest letter
                #and we add it to our running total
                greatest_letter = 'V'
                running_total = running_total + 5
        elif (letter == 'I'):
            if(greatest_letter == 'X' or greatest_letter == 'V'):
                #With the I case, if we already have seen a greater number then we subtract I
                #Since the greatest_letter is greater than I, that number will still by our greatest_letter
                running_total = running_total - 1
            else:
                #If we haven't seen an X yet then we make it the greatest letter
                #and we add it to our running total
                greatest_letter = 'I'
                running_total = running_total + 1
        else:
            print("Not a valid roman numeral!")

    return running_total


#Test cases, should output 14, 8, 5, 13
print(roman_calculator("XIV"))
print(roman_calculator("IIX"))
print(roman_calculator("VX"))
print(roman_calculator("XIII"))

