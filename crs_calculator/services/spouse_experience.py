SPOUSE_EXPERIENCE_POINTS = {
    "1 year" : 5,
    "2 years": 7,
    "3 years": 8,
    "4 years": 9,
    "5 years or more": 10
}
def calculate_spouse_experience_points(spouse_experience):
    return SPOUSE_EXPERIENCE_POINTS.get(spouse_experience,0)