CANADIAN_STUDY_POINTS = {
    "1-2 years": 15,
    "3+ years": 30,
}
FRENCH_LANGUAGE_POINTS = {
    "LESS_THAN_CLB4_IN_ENGLISH":25,
    "MORE_THAN_CLB5_IN_ENGLISH":50
}
def calculate_additional_points(canadian_study,french_language,has_siblings,provincial_nomination):
    total=0
    if provincial_nomination:
        total+=600
    if has_siblings:
        total+=15
    total+=CANADIAN_STUDY_POINTS.get(canadian_study,0)
    total+=FRENCH_LANGUAGE_POINTS.get(french_language,0)
    return total        