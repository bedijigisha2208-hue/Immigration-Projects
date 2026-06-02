from .experience import get_foreign_experience_category
EDUCATION_LANGUAGE_POINTS = {
    "One-year diploma": {
        "CLB 7": 13,
        "CLB 9": 25
    },
    "Two-year diploma": {
        "CLB 7": 25,
        "CLB 9": 50
    },
     "Bachelor's degree/ 3-year": {
        "CLB 7": 13,
        "CLB 9": 25
    },
    "2+ certificate/diploma/degree": {
        "CLB 7": 25,
        "CLB 9": 50
    },
    "master's degree": {
        "CLB 7": 25,
        "CLB 9": 50
    },
    "doctoral degree": {
        "CLB 7": 25,
        "CLB 9": 50
    }
}
EDUCATION_CANADIAN_EXPERIENCE_POINTS = {
    "One-year diploma": {
        "1 year": 13,
        "2 years or more": 25
    },
    "Two-year diploma": {
        "1 year": 13,
        "2 years or more": 25
    },
    "Bachelor's degree/ 3-year": {
        "1 year": 13,
        "2 years or more": 25
    },
    "2+ certificate/diploma/degree": {
        "1 year": 25,
        "2 years or more": 50
    },
    "Master's degree/ professional degree": {
        "1 year": 25,
        "2 years or more": 50
    },
    "Doctoral level/ phd": {
        "1 year": 25,
        "2 years or more": 50
    }
}
FOREIGN_LANGUAGE_POINTS = {
    "1-2 years": {
        "CLB 7": 13,
        "CLB 9": 25
    },
    "3 years or more": {
        "CLB 7": 25,
        "CLB 9": 50
    }
}
FOREIGN_CANADIAN_POINTS = {
    "1-2 years": {
        "1 year": 13,
        "2 years or more": 25
    },
    "3 years or more": {
        "1 year": 25,
        "2 years or more": 50
    }
}
CERTIFICATE_POINTS = {
    "CLB 5": 25,
    "CLB 7": 50
}

def get_clb_level(language):
    clb_number = int(language.split()[-1])

    if clb_number >= 9:
        return "CLB 9"

    elif clb_number >= 7:
        return "CLB 7"

    elif clb_number >= 5:
        return "CLB 5"

    return None
def calculate_transferability_points(data):
    education = data.get("education")
    language = data.get("first_language")

    canadian_years = data.get("experience")
    foreign_category = get_foreign_experience_category(data.get("foreign_experience"))

    has_certificate = data.get("certificate_of_qualification", False)

    clb_level = get_clb_level(language)

    total_points = 0

    if education in EDUCATION_LANGUAGE_POINTS and clb_level in ["CLB 7", "CLB 9"]:

        total_points += EDUCATION_LANGUAGE_POINTS[education].get(
            clb_level,
            0
        )

    canadian_experience = data.get("experience")

    canadian_years = int(canadian_experience.split()[0])

    canadian_exp_category = (
        "2 years or more"
        if canadian_years >= 2
        else "1 year"
    )
    

    if education in EDUCATION_CANADIAN_EXPERIENCE_POINTS:

        total_points += EDUCATION_CANADIAN_EXPERIENCE_POINTS[
            education
        ].get(
            canadian_exp_category,
            0
        )


    if (
        foreign_category and
        clb_level in ["CLB 7", "CLB 9"]
    ):

        total_points += FOREIGN_LANGUAGE_POINTS[
            foreign_category
        ].get(
            clb_level,
            0
        )

 

    if foreign_category:

        total_points += FOREIGN_CANADIAN_POINTS[
            foreign_category
        ].get(
            canadian_exp_category,
            0
        )

    if has_certificate:

        if clb_level == "CLB 7":
            total_points += 50

        elif clb_level == "CLB 5":
            total_points += 25

    return min(total_points, 100)