SPOUSE_EDUCATION_POINTS = {
    "High school diploma":2,
    "One-year diploma":6,
    "Two-year diploma":7,
    "Bachelor's degree/ 3-year":8,
    "2+ certificate/diploma/degree":9,
    "Master's degree/ professional degree":10,
    "Doctoral level/ phd": 11
}
def calculate_spouse_education_points(spouse_education):
    return SPOUSE_EDUCATION_POINTS.get(spouse_education,0)