SINGLE_EDUCATION_POINTS = {
    "High school diploma":30,
    "One-year diploma":90,
    "Two-year diploma":98,
    "Bachelor's degree/ 3-year":120,
    "2+ certificate/diploma/degree":128,
    "Master's degree/ professional degree":135,
    "Doctoral level/ phd": 150
}
WITH_SPOUSE_EDUCATION_POINTS = {
    "High school diploma":28,
    "One-year diploma":84,
    "Two-year diploma":91,
    "Bachelor's degree/ 3-year":112,
    "2+ certificate/diploma/degree":119,
    "Master's degree/ professional degree":126,
    "Doctoral level/ phd": 140
} 
def calculate_education_points(education, has_spouse):
    if has_spouse:
        return WITH_SPOUSE_EDUCATION_POINTS.get(education,0)
    return SINGLE_EDUCATION_POINTS.get(education,0)