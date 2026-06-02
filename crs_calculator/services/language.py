SINGLE_LANGUAGE_POINTS = {
    "CLB 4": 6,
    "CLB 5": 6,
    "CLB 6": 9,
    "CLB 7": 17,
    "CLB 8": 23,
    "CLB 9": 31,
    "CLB 10" :34,
    "CLB 11":34,
    "CLB 12":34

}
WITH_SPOUSE_LANGUAGE_POINTS = {
     "CLB 4": 6,
    "CLB 5": 6,
    "CLB 6": 8,
    "CLB 7": 16,
    "CLB 8": 22,
    "CLB 9": 29,
    "CLB 10" :32,
    "CLB 11":32,
    "CLB 12":32
}
SECOND_LANGUAGE_POINTS = {
    "CLB 5": 1,
    "CLB 6": 1,
    "CLB 7": 3,
    "CLB 8": 3,
    "CLB 9": 6,
    "CLB 10": 6,
    "CLB 11": 6,
    "CLB 12": 6

}
def calculate_language_points(first_language,second_language, has_spouse):
    if has_spouse:
        first_language_points = WITH_SPOUSE_LANGUAGE_POINTS.get(first_language,0)
        second_language_points = SECOND_LANGUAGE_POINTS.get(second_language,0)
        return first_language_points + second_language_points
    else:
        first_language_points = SINGLE_LANGUAGE_POINTS.get(first_language,0)
        second_language_points = SECOND_LANGUAGE_POINTS.get(second_language,0)
        return first_language_points + second_language_points

