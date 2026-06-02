from crs_calculator.services.transferability import calculate_transferability_points

from .age_points import get_age_points
from .education import calculate_education_points
from .language import calculate_language_points
from .experience import calculate_experience_points
from .spouse_language import calculate_spouse_language_points
from .spouse_education import calculate_spouse_education_points
from .spouse_experience import calculate_spouse_experience_points
from .additional_points import calculate_additional_points
def calculate_total_score(data):
    has_spouse = data["has_spouse"]
    age_points = get_age_points(data["age"], has_spouse)
    education_points = calculate_education_points(data["education"], has_spouse)
    language_points = calculate_language_points(data["first_language"], data["second_language"], has_spouse)
    experience_points = calculate_experience_points(data["experience"], has_spouse)
    spouse_points = 0
    if has_spouse:
        spouse_points += calculate_spouse_language_points(data["spouse_language"])
        spouse_points += calculate_spouse_education_points(data["spouse_education"])
        spouse_points += calculate_spouse_experience_points(data["spouse_experience"])
    additional_points = calculate_additional_points(data["has_siblings"], data["provincial_nomination"], data["french_language"], data["canadian_study"])
    transferability_points = calculate_transferability_points(data)
    total_score =(age_points + education_points + language_points + experience_points + spouse_points + additional_points + transferability_points) 
    return {
            "total_crs_score" : total_score, 
"breakdown": {
    "age": age_points,
    "education" : education_points,
    "language" : language_points,
    "experience": experience_points ,
    "spouse": spouse_points,
    "transferability": transferability_points,
    "additional": additional_points
      }

}