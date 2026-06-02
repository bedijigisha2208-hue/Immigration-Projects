SPOUSE_LANGUAGE_POINTS = {
    "CLB 5": 1,
    "CLB 6": 1,
    "CLB 7": 3,
    "CLB 8": 3,
    "CLB 9": 5,
    "CLB 10": 5,
    "CLB 11": 5,
    "CLB 12": 5
}
def calculate_spouse_language_points(spouse_language):
    return SPOUSE_LANGUAGE_POINTS.get(spouse_language,0)