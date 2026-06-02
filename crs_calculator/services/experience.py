SINGLE_EXPERIENCE_POINTS = {
    "1 year" : 40,
    "2 years": 53,
    "3 years": 64,
    "4 years": 72,
    "5 years or more": 84
}
WITH_SPOUSE_EXPERIENCE_POINTS = {
    "1 year" : 35,
    "2 years": 46,
    "3 years": 56,
    "4 years": 63,
    "5 years or more": 70
}
FOREIGN_EXPERIENCE_OPTIONS = [
    "No work or 0 years",
    "1-2 years",
    "3 + years"
]
def calculate_experience_points(experience, has_spouse):
    if has_spouse:
        return WITH_SPOUSE_EXPERIENCE_POINTS.get(experience,0)
    return SINGLE_EXPERIENCE_POINTS.get(experience,0)
def get_foreign_experience_category(foreign_experience):
    years = int(foreign_experience.split()[0])

    if years >= 3:
        return "3 years or more"

    elif years >= 1:
        return "1-2 years"

    return None