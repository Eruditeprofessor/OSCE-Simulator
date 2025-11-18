// ------------------------ QUESTION BANK (6 topics x 25 q = 150) ------------------------
const questionBank = {
  "Bed Making": [
    { question: "What is the primary purpose of a 'closed bed'?", answers: [{ text: "To keep the patient warm", correct: false }, { text: "To prepare an unoccupied bed for a new admission", correct: true }, { text: "To prevent skin breakdown", correct: false }, { text: "To reduce noise on the ward", correct: false }], explanation: "A closed bed is made for a new admission or a patient away from the bed; linens are tidy and the top sheet/blanket are pulled up and tucked to show it's ready for use." },
    { question: "The term for securing the corners of the linen to provide a smooth, secure fit is:", answers: [{ text: "Folding", correct: false }, { text: "Mitering", correct: true }, { text: "Tucking", correct: false }, { text: "Pleating", correct: false }], explanation: "Mitered corners (mitering) secure sheets at the mattress corners producing a smooth, safe surface that prevents wrinkles and reduces pressure injury risk." },
    { question: "When making an occupied bed, the soiled linen should be rolled:", answers: [{ text: "Toward the nurse, exposed side out", correct: false }, { text: "Away from the nurse, soiled side inwards", correct: true }, { text: "In a ball and thrown on the floor", correct: false }, { text: "Under the foot of the bed", correct: false }], explanation: "Rolling soiled linen inward reduces contamination of clean surfaces and minimizes pathogen spread." },
    { question: "What is the correct height for a bed before starting bed making to prevent back strain?", answers: [{ text: "The lowest position", correct: false }, { text: "The highest comfortable working level for the nurse", correct: true }, { text: "Mid-level position", correct: false }, { text: "Level with the patient's chest", correct: false }], explanation: "Adjusting bed height to the nurse's comfortable working level reduces risk of musculoskeletal injury and allows safe handling." },
    { question: "What is the purpose of the 'toe pleat' when applying top linen?", answers: [{ text: "To keep the sheets taut", correct: false }, { text: "To allow freedom of movement for the patient's feet and prevent pressure", correct: true }, { text: "To make the bed look professional", correct: false }, { text: "To secure the blanket", correct: false }], explanation: "A toe pleat prevents pressure on toes and allows movement, reducing risk of pressure injury at the foot." },
    { question: "Which type of bed is prepared when a patient is expected to return from surgery (Post-Operative)?", answers: [{ text: "Closed bed", correct: false }, { text: "Open bed", correct: false }, { text: "Surgical or Recovery bed (sheets fan-folded to the side)", correct: true }, { text: "Fowler's bed", correct: false }], explanation: "A surgical/recovery bed with linens fan-folded to the side allows easy transfer of the patient back to bed after surgery." },
    { question: "When changing an occupied bed, what is the key safety measure required by the nurse?", answers: [{ text: "Giving the patient a snack", correct: false }, { text: "Ensuring the side rail is up on the side the patient is turning toward", correct: true }, { text: "Turning off the lights", correct: false }, { text: "Applying restraints", correct: false }], explanation: "Raising the side rail on the side toward which the patient turns provides support and fall prevention during the maneuver." },
    { question: "Soiled linen should never be placed on the floor because it:", answers: [{ text: "Causes a tripping hazard", correct: false }, { text: "Contaminates the environment and spreads pathogens", correct: true }, { text: "Increases laundry costs", correct: false }, { text: "Blocks the doorway", correct: false }], explanation: "Placing soiled linen on the floor risks environmental contamination and cross-infection; use a clean chair or container." },
    { question: "The draw sheet is primarily used for:", answers: [{ text: "Making the bed smell better", correct: false }, { text: "Turning, lifting, and preventing soiling of the main mattress linen", correct: true }, { text: "Decorating the bed", correct: false }, { text: "Keeping the patient cool", correct: false }], explanation: "Draw sheets protect the mattress and assist in repositioning and transferring patients safely." },
    { question: "The mattress pad protects the mattress from:", answers: [{ text: "Sunlight", correct: false }, { text: "Moisture and stains", correct: true }, { text: "Dust mites only", correct: false }, { text: "Patient complaints", correct: false }], explanation: "Mattress pads are barriers that protect mattresses from moisture and contamination, prolonging mattress life and infection control." },
    { question: "The technique used to secure the bottom sheet under the mattress corner is called:", answers: [{ text: "The envelope fold", correct: false }, { text: "The mitered corner", correct: true }, { text: "The surgical fold", correct: false }, { text: "The fan fold", correct: false }], explanation: "Mitered corners secure the sheet under the mattress neatly and prevent wrinkling that can cause pressure points." },
    { question: "When changing the pillowcase, the correct method is to:", answers: [{ text: "Stuff the pillow in quickly", correct: false }, { text: "Pull the pillowcase over the pillow, turning it inside out as you go", correct: true }, { text: "Shake the pillow vigorously", correct: false }, { text: "Use staples to secure it", correct: false }], explanation: "Turning the pillowcase inside out over the pillow reduces handling and keeps the cleaner surface on the outside." },
    { question: "The bed is left in the lowest position at the end of the bed making procedure to ensure:", answers: [{ text: "It is easier to clean the floor", correct: false }, { text: "Patient safety and fall prevention", correct: true }, { text: "The sheets stay tight", correct: false }, { text: "The nurse saves energy", correct: false }], explanation: "Lowest bed position reduces risk of falls when the patient leaves or returns to bed; it's part of fall prevention strategies." },
    { question: "An 'open bed' is prepared when:", answers: [{ text: "The bed is empty for a new patient", correct: false }, { text: "The patient is returning from a procedure or is already ambulatory", correct: true }, { text: "The bed is soiled", correct: false }, { text: "The patient is sleeping", correct: false }], explanation: "An open bed has the top sheets folded back to allow patients to easily get into bed following procedures or when ambulatory." },
    { question: "To prevent wrinkles in the bottom sheet, which can cause pressure ulcers, the nurse should ensure the sheet is:", answers: [{ text: "Damp", correct: false }, { text: "Pulled taut and smooth", correct: true }, { text: "Very loose", correct: false }, { text: "Folded only in the middle", correct: false }], explanation: "Smooth, taut sheets minimize friction and pressure points that contribute to skin breakdown." },
    { question: "The primary difference between a closed and an open bed is the position of the:", answers: [{ text: "Pillow", correct: false }, { text: "Top linen (folded down for open bed)", correct: true }, { text: "Bottom sheet", correct: false }, { text: "Mattress pad", correct: false }], explanation: "Open beds have top linen folded down for patient access; closed beds have linens fully arranged for an empty bed." },
    { question: "When changing the bed of a patient with a spinal injury, the linen change should be performed using:", answers: [{ text: "The log-rolling technique", correct: true }, { text: "The high Fowler's position", correct: false }, { text: "Vigorous shaking", correct: false }, { text: "The patient sitting up", correct: false }], explanation: "Log-rolling maintains spinal alignment during turning and linen change to prevent further injury." },
    { question: "What should be checked on the bed structure before applying new linen?", answers: [{ text: "If the bed is red", correct: false }, { text: "If the brakes are locked", correct: true }, { text: "The patient's name", correct: false }, { text: "The television channel", correct: false }], explanation: "Ensuring bed brakes are locked prevents movement during care, protecting both patient and nurse from harm." },
    { question: "If the top sheet is being used as a bath blanket during a bed bath, it is removed:", answers: [{ text: "Before the bath starts", correct: false }, { text: "Only after the bath blanket or new top sheet is in place", correct: true }, { text: "By the visitor", correct: false }, { text: "During the night", correct: false }], explanation: "Maintain patient privacy and warmth by ensuring a replacement covering is ready before removing sheets used as bath blankets." },
    { question: "Which piece of equipment is often used to keep bed linen off the patient's feet?", answers: [{ text: "Bedside table", correct: false }, { text: "Bed cradle (or foot cradle)", correct: true }, { text: "Pillow", correct: false }, { text: "Side rail", correct: false }], explanation: "A bed cradle keeps linen off bony prominences and protects healing areas or sensitive feet." },
    { question: "The order of applying linen to a bed typically starts with the:", answers: [{ text: "Pillowcase", correct: false }, { text: "Bottom sheet (mattress pad first, then fitted/flat sheet)", correct: true }, { text: "Top blanket", correct: false }, { text: "Draw sheet", correct: false }], explanation: "Applying the bottom sheet first ensures a clean, secure base and provides proper layering for patient comfort and safety." },
    { question: "The main reason for performing a quick, efficient bed change is to:", answers: [{ text: "Minimize the duration of patient exertion and exposure", correct: true }, { text: "Save money", correct: false }, { text: "Impress the supervisor", correct: false }, { text: "Avoid talking to the patient", correct: false }], explanation: "A swift and careful linen change reduces patient fatigue, exposure, and risk of hypothermia while maintaining dignity." },
    { question: "Where should the nurse place the clean linen while making the bed?", answers: [{ text: "On the floor", correct: false }, { text: "On a clean chair or bedside stand, away from soiled linen", correct: true }, { text: "Under the patient's pillow", correct: false }, { text: "In the laundry bin", correct: false }], explanation: "Place clean linen on a clean surface away from contamination to maintain asepsis." },
    { question: "What is a major risk when changing linen in a hospital environment?", answers: [{ text: "Running out of sheets", correct: false }, { text: "Needle stick injury from sharps left in the linen", correct: true }, { text: "Losing the pillow", correct: false }, { text: "Static electricity", correct: false }], explanation: "Sharps left in linen can cause needle-stick injuries, so always check and dispose of sharps properly." },
    { question: "The linen that goes directly over the top sheet (but under the blanket) is the:", answers: [{ text: "Contour sheet", correct: false }, { text: "Bedspread/Duvet", correct: true }, { text: "Draw sheet", correct: false }, { text: "Incontinence pad", correct: false }], explanation: "Bedspreads/duvets are outer coverings; ordering of linen matters for comfort and infection control." }
  ],

  "Oral Hygiene": [
    { question: "How should the nurse position an unconscious patient for oral care?", answers: [{ text: "Supine with head elevated", correct: false }, { text: "Side-lying position with head lower than chest (to prevent aspiration)", correct: true }, { text: "High Fowler's position", correct: false }, { text: "Prone position", correct: false }], explanation: "Side-lying with head turned reduces aspiration risk and allows secretions to drain during oral care." },
    { question: "The primary goal of regular mouth care for a dependent patient is to prevent:", answers: [{ text: "Diarrhea", correct: false }, { text: "Pneumonia (specifically VAP) and discomfort", correct: true }, { text: "Hair loss", correct: false }, { text: "Constipation", correct: false }], explanation: "Oral care reduces colonization of respiratory pathogens and can lower ventilator-associated pneumonia risk." },
    { question: "Which item should NOT be used for cleaning the teeth of an unconscious patient?", answers: [{ text: "Soft-bristle toothbrush", correct: false }, { text: "Lemon-glycerine swabs (can dry and erode tissue)", correct: true }, { text: "Toothpaste", correct: false }, { text: "Gauze wrapped around a tongue depressor", correct: false }], explanation: "Lemon-glycerine swabs can dry mucosa and damage tissues; avoid for routine cleaning." },
    { question: "When brushing a conscious patient's teeth, the toothbrush should be held at what angle to the gums?", answers: [{ text: "90 degrees", correct: false }, { text: "45 degrees (Bass technique)", correct: true }, { text: "15 degrees", correct: false }, { text: "0 degrees (flat)", correct: false }], explanation: "A 45° angle helps clean the gum line and removes plaque from the sulcus effectively." },
    { question: "How often should routine mouth care be performed for a patient with an endotracheal tube?", answers: [{ text: "Once per shift", correct: false }, { text: "Every 2-4 hours or more frequently as needed", correct: true }, { text: "Once daily", correct: false }, { text: "Only when the patient requests it", correct: false }], explanation: "Frequent oral care for intubated patients prevents colonization and reduces risk of VAP." },
    { question: "If a patient has dentures, they should be stored when not in use in:", answers: [{ text: "A tissue on the bedside table", correct: false }, { text: "A clearly labeled cup with water or a denture cleaning solution", correct: true }, { text: "The patient's pocket", correct: false }, { text: "The bathroom sink", correct: false }], explanation: "Storing dentures in labeled water prevents warping and loss while keeping them sanitary." },
    { question: "Before reinserting dentures, the nurse should ensure:", answers: [{ text: "The patient is standing up", correct: false }, { text: "The patient's mouth and gums are clean and moist", correct: true }, { text: "The dentures are dry", correct: false }, { text: "The room is dark", correct: false }], explanation: "Clean and moist oral tissues improve comfort and reduce risk of mucosal damage when reinserting dentures." },
    { question: "The nurse must check the mouth of an unconscious patient for:", answers: [{ text: "Temperature", correct: false }, { text: "Mouth sores, dry/cracked lips, and accumulation of secretions", correct: true }, { text: "Blood pressure", correct: false }, { text: "Pulse rate", correct: false }], explanation: "Inspecting the mouth identifies lesions, dryness, or secretions that require attention to prevent complications." },
    { question: "The proper way to clean a patient's tongue is by brushing:", answers: [{ text: "From side to side", correct: false }, { text: "From back to front", correct: true }, { text: "In a circular motion", correct: false }, { text: "Only the tip", correct: false }], explanation: "Brushing from back to front helps remove secretions and debris from the length of the tongue." },
    { question: "Why is it important to wear gloves during all oral care procedures?", answers: [{ text: "To make the patient feel special", correct: false }, { text: "To protect the nurse from exposure to body fluids (blood/saliva)", correct: true }, { text: "To keep hands warm", correct: false }, { text: "To avoid touching the toothbrush", correct: false }], explanation: "Gloves protect healthcare workers from exposure to body fluids and reduce cross-contamination." },
    { question: "What is Xerostomia?", answers: [{ text: "Excessive salivation", correct: false }, { text: "Dry mouth", correct: true }, { text: "Bleeding gums", correct: false }, { text: "Bad breath", correct: false }], explanation: "Xerostomia is dry mouth and may require frequent moisturizing and oral care to prevent mucosal breakdown." },
    { question: "When providing mouth care to a patient who is NPO, the nurse should still provide frequent care because:", answers: [{ text: "NPO patients are always thirsty", correct: false }, { text: "Saliva production decreases when NPO, leading to dry mucosa and cracked lips", correct: true }, { text: "They need something to do", correct: false }, { text: "It helps with digestion", correct: false }], explanation: "NPO reduces salivary flow causing dryness; regular oral care prevents discomfort and mucosal cracking." },
    { question: "When removing dentures, the nurse should use a piece of gauze or a towel to aid in:", answers: [{ text: "Swallowing", correct: false }, { text: "Grasping the dentures firmly to prevent slipping", correct: true }, { text: "Cleaning the nose", correct: false }, { text: "Making noise", correct: false }], explanation: "Gauze improves grip and reduces risk of dropping or damaging dentures during removal." },
    { question: "The primary tool for moisturizing the lips and oral mucosa after cleaning is:", answers: [{ text: "Hand soap", correct: false }, { text: "Petroleum jelly or a water-soluble lubricant", correct: true }, { text: "Alcohol", correct: false }, { text: "Dry gauze", correct: false }], explanation: "Petroleum jelly or water-soluble lubricants relieve chapping and protect mucosa; avoid petroleum if oxygen therapy poses risk of ignition." },
    { question: "Gingivitis is the inflammation of the:", answers: [{ text: "Tongue", correct: false }, { text: "Gums (gingivae)", correct: true }, { text: "Cheeks", correct: false }, { text: "Tonsils", correct: false }], explanation: "Gingivitis involves gum inflammation usually caused by plaque and requires improved oral hygiene and possible dental care." },
    { question: "What should the nurse use to gently open the mouth of an unconscious patient?", answers: [{ text: "Fingers", correct: false }, { text: "A padded tongue blade", correct: true }, { text: "A sharp metal tool", correct: false }, { text: "A spoon", correct: false }], explanation: "A padded tongue blade protects soft tissues while allowing safe access for suction or cleaning." },
    { question: "To prevent cross-contamination during oral care, the nurse must ensure the equipment used for one patient is:", answers: [{ text: "Reused immediately for the next patient", correct: false }, { text: "Cleaned, disinfected, or discarded appropriately", correct: true }, { text: "Shared with the roommate", correct: false }, { text: "Left in the sink", correct: false }], explanation: "Cleaning or discarding single-use items prevents spread of pathogens between patients." },
    { question: "The nurse should check for and remove which dental appliance before surgery?", answers: [{ text: "Braces", correct: false }, { text: "Dentures or removable bridges", correct: true }, { text: "Permanent fillings", correct: false }, { text: "Braces", correct: false }], explanation: "Removable appliances like dentures are removed to reduce aspiration risk and avoid damage during anesthesia." },
    { question: "The oral care of a patient with oxygen therapy requires special attention to the risk of:", answers: [{ text: "Skin tears", correct: false }, { text: "Drying of the oral and nasal mucosa", correct: true }, { text: "Excessive salivation", correct: false }, { text: "Bleeding", correct: false }], explanation: "Oxygen dries mucosa; moistening agents and frequent care prevent cracks and discomfort." },
    { question: "What is the primary indicator of the need for mouth care in a conscious patient?", answers: [{ text: "The time on the clock", correct: false }, { text: "The patient's complaint of a dry mouth or bad taste", correct: true }, { text: "The nurse's appetite", correct: false }, { text: "The color of the toothbrush", correct: false }], explanation: "Patient-reported dryness, discomfort or bad taste are major triggers for immediate mouth care." },
    { question: "How should the nurse provide mouth care to a patient experiencing stomatitis (mouth inflammation)?", answers: [{ text: "Use rough gauze and alcohol", correct: false }, { text: "Use a soft swab or a very soft toothbrush and saline rinse", correct: true }, { text: "Brush vigorously", correct: false }, { text: "Skip all mouth care", correct: false }], explanation: "Gentle cleaning with soft materials and saline helps reduce irritation while keeping the mouth clean." },
    { question: "Rinsing the mouth with plain water after brushing helps to remove:", answers: [{ text: "The toothbrush", correct: false }, { text: "Loose debris and excess toothpaste", correct: true }, { text: "The tongue", correct: false }, { text: "The gums", correct: false }], explanation: "Rinsing clears debris and excess toothpaste which can be irritating if left in the mouth." },
    { question: "If the patient wears glasses, they should be removed and stored before starting the oral care procedure to prevent:", answers: [{ text: "The patient from seeing", correct: false }, { text: "Breakage or soiling", correct: true }, { text: "Headaches", correct: false }, { text: "Losing them", correct: false }], explanation: "Removing glasses prevents accidental damage and keeps them clean while the patient is cared for." },
    { question: "Cleaning the space between the teeth is best accomplished using:", answers: [{ text: "A toothpick", correct: false }, { text: "Dental floss or interdental brushes", correct: true }, { text: "The toothbrush handle", correct: false }, { text: "The fingernail", correct: false }], explanation: "Floss or interdental brushes effectively remove plaque and debris from interdental spaces where a toothbrush cannot reach." },
    { question: "The nurse should protect the patient's clothing with which item during oral care?", answers: [{ text: "A towel or waterproof pad (bib)", correct: true }, { text: "A blanket", correct: false }, { text: "A plastic bag", correct: false }, { text: "Nothing", correct: false }], explanation: "A towel or waterproof bib protects clothing from spills and maintains patient dignity." }
  ],

  "Bed Bath": [
    { question: "When giving a bed bath, the nurse should wash the patient's eyes from:", answers: [{ text: "Outer canthus to inner canthus", correct: false }, { text: "Inner canthus to outer canthus (using a fresh part of the cloth for each eye)", correct: true }, { text: "Top eyelid to bottom eyelid", correct: false }, { text: "In a circular motion", correct: false }], explanation: "Wiping inner to outer with fresh cloth prevents transferring ocular secretions and reduces infection risk." },
    { question: "Before starting a bed bath, the nurse's priority is to ensure:", answers: [{ text: "The patient has watched television", correct: false }, { text: "Patient privacy (by closing curtains/doors) and warmth", correct: true }, { text: "The room is cold", correct: false }, { text: "The water is freezing", correct: false }], explanation: "Privacy and warmth maintain dignity and comfort, reducing risk of chilling during the bath." },
    { question: "The temperature of the water for a bed bath should ideally be between:", answers: [{ text: "20-25°C", correct: false }, { text: "43-46°C (110-115°F)", correct: true }, { text: "50-55°C", correct: false }, { text: "30-32°C", correct: false }], explanation: "Warm water around 43–46°C is comfortable for cleansing but avoid too hot which can burn fragile skin." },
    { question: "When washing the extremities, the nurse should use long, gentle strokes in which direction to promote venous return?", answers: [{ text: "From the wrist/ankle toward the heart", correct: true }, { text: "From the shoulder/hip toward the fingers/toes", correct: false }, { text: "Side to side", correct: false }, { text: "In a circular pattern only", correct: false }], explanation: "Stroking toward the heart supports venous return and reduces edema during bathing." },
    { question: "During the bed bath, what should the nurse cover to maintain the patient's warmth and modesty?", answers: [{ text: "Only the face", correct: false }, { text: "The entire body except the part being washed", correct: true }, { text: "Only the legs", correct: false }, { text: "Nothing", correct: false }], explanation: "Keep non-washed areas covered to preserve warmth and dignity throughout the bath." },
    { question: "After washing a skin area, the nurse should dry the skin by:", answers: [{ text: "Vigorous rubbing", correct: false }, { text: "Air drying", correct: false }, { text: "Patting gently with a soft towel", correct: true }, { text: "Applying alcohol", correct: false }], explanation: "Gentle patting dries skin without friction, which can cause irritation or breakdown." },
    { question: "Perineal care is performed after the rest of the bath and before applying:", answers: [{ text: "Soap", correct: false }, { text: "Lotion and clean gown", correct: true }, { text: "Water", correct: false }, { text: "The bath towel", correct: false }], explanation: "Perineal care last with fresh water helps avoid cross-contamination and is followed by applying clean clothing/lotion as needed." },
    { question: "The primary purpose of applying lotion after a bath is to:", answers: [{ text: "Make the patient smell nice", correct: false }, { text: "Hydrate dry skin and prevent flaking/cracking", correct: true }, { text: "Increase body temperature", correct: false }, { text: "Act as a soap substitute", correct: false }], explanation: "Lotion restores moisture, especially for dry or fragile skin, preventing cracks and discomfort." },
    { question: "The nurse uses a clean washcloth, soap, and water to clean the patient's face, usually omitting soap for which area?", answers: [{ text: "The chin", correct: false }, { text: "Around the eyes", correct: true }, { text: "The ears", correct: false }, { text: "The forehead", correct: false }], explanation: "Avoid soap near the eyes as it can irritate; use plain water and gentle technique instead." },
    { question: "When assisting a male patient with perineal care, the nurse cleans the tip of the penis in which motion?", answers: [{ text: "Base to tip", correct: false }, { text: "Meatus (opening) outwards in a circular motion", correct: true }, { text: "Side to side", correct: false }, { text: "Back and forth", correct: false }], explanation: "Cleaning from meatus outward removes secretions away from the urethral opening and reduces infection risk." },
    { question: "When performing female perineal care, the nurse cleans from:", answers: [{ text: "Back (anus) to front (urethra)", correct: false }, { text: "Front (urethra/meatus) to back (anus)", correct: true }, { text: "Side to side only", correct: false }, { text: "In a circular motion", correct: false }], explanation: "Front-to-back cleaning prevents fecal bacteria from contaminating the urethral area and causing UTIs." },
    { question: "Why should the nurse wear gloves during a bed bath?", answers: [{ text: "To avoid getting wet", correct: false }, { text: "Standard precaution against contact with body fluids", correct: true }, { text: "To prevent wrinkles in the water", correct: false }, { text: "Only if the patient has a rash", correct: false }], explanation: "Gloves protect both nurse and patient from exposure to body fluids and reduce cross-contamination." },
    { question: "Which area is often neglected and must be thoroughly dried after the bath to prevent fungal growth?", answers: [{ text: "Forehead", correct: false }, { text: "Skin folds (under breasts, abdomen, groin, between toes)", correct: true }, { text: "Knees", correct: false }, { text: "Elbows", correct: false }], explanation: "Moist skin folds are prone to fungal growth; thorough drying prevents infections." },
    { question: "Before changing the water during the bath, the nurse should check if the water is still:", answers: [{ text: "Dirty", correct: false }, { text: "Warm and clean", correct: true }, { text: "Cold", correct: false }, { text: "Salty", correct: false }], explanation: "Fresh, warm water is needed for comfort and hygiene; change if it's soiled or cool." },
    { question: "The primary purpose of the bed bath, besides cleaning, is to provide:", answers: [{ text: "Entertainment", correct: false }, { text: "Comfort, relaxation, and skin assessment", correct: true }, { text: "Medication", correct: false }, { text: "Exercise", correct: false }], explanation: "A bed bath offers physical care plus an opportunity to assess skin, circulation, and patient wellbeing." },
    { question: "When shaving a patient who is on blood thinners (anticoagulants), the nurse must use:", answers: [{ text: "A straight razor", correct: false }, { text: "An electric razor (to minimize risk of nicks/bleeding)", correct: true }, { text: "A sharp disposable blade", correct: false }, { text: "Scissors", correct: false }], explanation: "Electric razors reduce risk of cuts and bleeding in anticoagulated patients." },
    { question: "If the patient is able, the nurse should encourage them to perform which part of the bed bath independently?", answers: [{ text: "Washing the nurse's hands", correct: false }, { text: "Washing reachable areas (face, hands, trunk)", correct: true }, { text: "Changing the bed linen", correct: false }, { text: "Washing the patient's back", correct: false }], explanation: "Encouraging independence supports patient dignity and preserves energy when safe." },
    { question: "The nurse washes the chest and abdomen before moving on to the:", answers: [{ text: "Face", correct: false }, { text: "Legs and feet", correct: true }, { text: "Perineum", correct: false }, { text: "Back", correct: false }], explanation: "Sequence follows clean to less-clean areas and supports patient comfort and efficiency." },
    { question: "Before cleaning the back and buttocks, the patient is usually positioned in the:", answers: [{ text: "Supine position", correct: false }, { text: "Side-lying position (lateral)", correct: true }, { text: "High Fowler's", correct: false }, { text: "Prone position", correct: false }], explanation: "Side-lying position allows access to back/buttocks while maintaining safety and privacy." },
    { question: "The first items to be washed in the bed bath sequence are usually the:", answers: [{ text: "Legs", correct: false }, { text: "Face and eyes", correct: true }, { text: "Perineum", correct: false }, { text: "Back", correct: false }], explanation: "Face and eyes are washed first with fresh water to avoid contaminating them with detergent." },
    { question: "When soaking the patient's feet, the water basin should be placed on:", answers: [{ text: "The bedside table", correct: false }, { text: "A waterproof pad on the floor or a padded chair", correct: true }, { text: "The patient's lap", correct: false }, { text: "The window sill", correct: false }], explanation: "Place basin on protected surface to avoid spills and maintain comfort and safety." },
    { question: "The nurse should limit the length of a full bed bath to prevent patient:", answers: [{ text: "Boredom", correct: false }, { text: "Fatigue or chilling", correct: true }, { text: "Hunger", correct: false }, { text: "Anxiety", correct: false }], explanation: "Prolonged baths can cause fatigue or chill; work efficiently while maintaining comfort." },
    { question: "The nurse must check the skin, especially over bony prominences, for:", answers: [{ text: "Hair color", correct: false }, { text: "Redness, pallor, or non-blanching areas (signs of pressure injury)", correct: true }, { text: "Skin elasticity only", correct: false }, { text: "Temperature only", correct: false }], explanation: "Skin inspection identifies early pressure damage so interventions can be applied promptly." },
    { question: "Which cleaning motion should be avoided during a bed bath to prevent friction damage?", answers: [{ text: "Patting", correct: false }, { text: "Vigorous scrubbing or rubbing", correct: true }, { text: "Gentle stroking", correct: false }, { text: "Washing one area at a time", correct: false }], explanation: "Avoid vigorous scrubbing which can damage fragile skin and strip natural oils." },
    { question: "The bath basin and water should be changed after cleaning which area, even if not visibly dirty?", answers: [{ text: "The arms", correct: false }, { text: "The perineum/rectal area", correct: true }, { text: "The chest", correct: false }, { text: "The face", correct: false }], explanation: "Change water after perineal care to avoid cross-contamination to other body areas." }
  ],

  "Catheterization": [
    { question: "The most appropriate position for female catheterization is:", answers: [{ text: "Prone position", correct: false }, { text: "Dorsal Recumbent position", correct: true }, { text: "Sim's position", correct: false }, { text: "Trendelenburg position", correct: false }], explanation: "Dorsal recumbent (supine with knees flexed) provides access to the female urethra while maintaining privacy." },
    { question: "The first step after preparing the patient and field for catheterization is to:", answers: [{ text: "Inflate the balloon", correct: false }, { text: "Cleanse the meatus/perineum with antiseptic solution", correct: true }, { text: "Insert the catheter 5 cm", correct: false }, { text: "Secure the tubing", correct: false }], explanation: "Cleaning the meatus removes pathogens before insertion and reduces infection risk." },
    { question: "If the nurse accidentally inserts the female catheter into the vagina, the correct action is to:", answers: [{ text: "Remove it and try again immediately", correct: false }, { text: "Leave it in place as a marker and insert a new sterile catheter", correct: true }, { text: "Inflate the balloon in the vagina", correct: false }, { text: "Ask the patient to pull it out", correct: false }], explanation: "Leaving it as a marker prevents losing anatomical orientation; use a new sterile catheter for correct placement." },
    { question: "The drainage bag of an indwelling catheter must always be kept:", answers: [{ text: "Above the level of the bladder", correct: false }, { text: "Below the level of the bladder (to prevent backflow/reflux)", correct: true }, { text: "Level with the patient's hip", correct: false }, { text: "Tucked under the bed linen", correct: false }], explanation: "Keeping the bag below bladder level relies on gravity and prevents urine reflux which increases infection risk." },
    { question: "When inserting a catheter in a male patient, the penis should be held at what angle?", answers: [{ text: "90 degrees (perpendicular) to the body", correct: true }, { text: "45 degrees", correct: false }, { text: "Straight down", correct: false }, { text: "180 degrees (parallel)", correct: false }], explanation: "Holding the penis at 90° helps align the urethra for smoother catheter passage in uncircumcised males." },
    { question: "What is the primary risk associated with prolonged indwelling catheter use?", answers: [{ text: "Hypertension", correct: false }, { text: "Catheter-Associated Urinary Tract Infection (CAUTI)", correct: true }, { text: "Hypothermia", correct: false }, { text: "Hair loss", correct: false }], explanation: "Long-term indwelling catheters are a leading cause of CAUTIs; remove catheters when no longer necessary." },
    { question: "The standard amount of sterile water used to inflate the retention balloon for an adult catheter is:", answers: [{ text: "2 mL", correct: false }, { text: "5 mL or 10 mL", correct: true }, { text: "50 mL", correct: false }, { text: "1 mL", correct: false }], explanation: "Adult Foley balloons typically require 5–10 mL of sterile water depending on the catheter type; follow manufacturer instructions." },
    { question: "Before catheter removal, the nurse must ensure the balloon is:", answers: [{ text: "Inflated", correct: false }, { text: "Completely deflated", correct: true }, { text: "Clamped", correct: false }, { text: "Filled with saline", correct: false }], explanation: "Deflating the balloon prevents trauma during catheter removal and allows smooth withdrawal." },
    { question: "When cleaning the male meatus for catheterization, the nurse cleans in which direction?", answers: [{ text: "Base to tip (using a new swab each time)", correct: true }, { text: "Tip to base", correct: false }, { text: "In a circular motion only", correct: false }, { text: "Side to side", correct: false }], explanation: "Cleaning base-to-tip removes contaminants away from the insertion site; use fresh swabs for each pass." },
    { question: "After removing an indwelling catheter, the nurse should monitor the patient for:", answers: [{ text: "Increased appetite", correct: false }, { text: "Urinary retention or difficulty voiding (dysuria)", correct: true }, { text: "Tachycardia", correct: false }, { text: "Excessive sweating", correct: false }], explanation: "Monitor for inability to void or retention following removal; assess bladder fullness and output." },
    { question: "Intermittent catheterization (straight catheter) is primarily used for:", answers: [{ text: "Continuous bladder drainage", correct: false }, { text: "Collecting a sterile specimen or short-term relief of acute retention", correct: true }, { text: "Bladder irrigation", correct: false }, { text: "Administering oral medication", correct: false }], explanation: "Intermittent catheters are used for sterile urine collection and short-term bladder emptying, lowering infection risk compared with indwelling catheters." },
    { question: "If resistance is met during male catheter insertion, the nurse should instruct the patient to:", answers: [{ text: "Hold their breath", correct: false }, { text: "Take deep breaths and bear down gently", correct: true }, { text: "Stand up", correct: false }, { text: "Force the catheter in", correct: false }], explanation: "Deep breaths and bearing down relaxes the external sphincter and may allow easier passage without force." },
    { question: "When securing an indwelling catheter, the tubing is usually secured to the patient's:", answers: [{ text: "Ankle", correct: false }, { text: "Inner thigh (female) or lower abdomen (male)", correct: true }, { text: "Bed rail", correct: false }, { text: "Shoulder", correct: false }], explanation: "Securing tubing to the thigh or abdomen prevents tension on the catheter and reduces urethral trauma." },
    { question: "The volume of urine that should be drained at one time to prevent hypotensive shock is generally limited to:", answers: [{ text: "200 mL", correct: false }, { text: "750 mL to 1000 mL (then clamp/pause)", correct: true }, { text: "1500 mL", correct: false }, { text: "All available urine immediately", correct: false }], explanation: "Draining very large volumes quickly can cause vasodilation and hypotension; intermittent clamping after 750–1000 mL is advised." },
    { question: "Which type of catheter is used for continuous bladder irrigation (CBI) post-surgery?", answers: [{ text: "Straight catheter", correct: false }, { text: "Three-way (triple lumen) catheter", correct: true }, { text: "Condom catheter", correct: false }, { text: "Foley catheter", correct: false }], explanation: "Three-way catheters allow irrigation and drainage simultaneously for post-op bladder irrigation." },
    { question: "A Coude catheter is typically indicated for a male patient with:", answers: [{ text: "A UTI", correct: false }, { text: "Enlarged prostate (BPH)", correct: true }, { text: "Kidney stones", correct: false }, { text: "Diabetes", correct: false }], explanation: "Coude catheters have a curved tip to negotiate obstruction from an enlarged prostate." },
    { question: "When catheterizing a female patient, the nurse uses the non-dominant hand to:", answers: [{ text: "Insert the catheter", correct: false }, { text: "Separate and hold the labia open", correct: true }, { text: "Clean the meatus", correct: false }, { text: "Inflate the balloon", correct: false }], explanation: "Non-dominant hand stabilizes anatomy while the dominant hand performs sterile insertion." },
    { question: "The nurse must use which technique for indwelling catheter insertion?", answers: [{ text: "Clean technique", correct: false }, { text: "Aseptic/Sterile technique", correct: true }, { text: "Dirty technique", correct: false }, { text: "No technique", correct: false }], explanation: "Aseptic technique is required to minimize infection risk during invasive procedures like catheter insertion." },
    { question: "If the catheter is patent, but the patient complains of the urge to void, the nurse should first check for:", answers: [{ text: "A fever", correct: false }, { text: "Kinks or obstruction in the tubing", correct: true }, { text: "A rash", correct: false }, { text: "Diarrhea", correct: false }], explanation: "Kinks or dependent loops in tubing may prevent drainage even though the catheter is present." },
    { question: "Before attempting catheterization, the nurse should confirm the patient has no known allergy to:", answers: [{ text: "Saline", correct: false }, { text: "Latex and Povidone-Iodine (Betadine)", correct: true }, { text: "Water", correct: false }, { text: "Soap", correct: false }], explanation: "Latex allergies or betadine sensitivity must be checked to avoid allergic reactions during the procedure." },
    { question: "What is the purpose of lubricating the catheter tip before insertion?", answers: [{ text: "To prevent infection", correct: false }, { text: "To reduce friction and minimize trauma and discomfort", correct: true }, { text: "To increase drainage speed", correct: false }, { text: "To clean the catheter", correct: false }], explanation: "Lubrication eases passage through the urethra, reducing tissue damage and discomfort." },
    { question: "The most accurate way to measure post-void residual (PVR) volume in the bladder is using a:", answers: [{ text: "Measuring cup", correct: false }, { text: "Bladder scanner or straight catheterization", correct: true }, { text: "Tape measure", correct: false }, { text: "Stethoscope", correct: false }], explanation: "Bladder scanner or catheterization gives objective PVR measurement to assess retention." },
    { question: "After urine flow begins during male catheterization, how much further should the nurse advance the catheter?", answers: [{ text: "1 inch (2.5 cm)", correct: false }, { text: "5 to 7 cm (2 to 3 inches) to ensure the balloon is fully in the bladder", correct: true }, { text: "10 cm", correct: false }, { text: "Stop immediately", correct: false }], explanation: "Advancing slightly after urine flow ensures the balloon is inside the bladder before inflation." },
    { question: "When emptying the drainage bag, the nurse must avoid touching the drainage spigot to:", answers: [{ text: "The toilet water or collecting container (to prevent contamination)", correct: true }, { text: "The patient's leg", correct: false }, { text: "The nurse's shoe", correct: false }, { text: "The floor", correct: false }], explanation: "Avoiding contact with container water and the spigot prevents cross-contamination and CAUTI risk." },
    { question: "A condom catheter is used for:", answers: [{ text: "Female patients", correct: false }, { text: "Incontinent male patients for non-invasive collection", correct: true }, { text: "Continuous bladder irrigation", correct: false }, { text: "Patients in urinary retention", correct: false }], explanation: "Condom catheters are external devices for men to manage incontinence non-invasively, reducing infection risk compared to indwelling catheters." }
  ],

  "Vital Signs": [
    { question: "Normal adult body temperature (oral/tympanic) is typically:", answers: [{ text: "35.0°C - 36.0°C", correct: false }, { text: "36.5°C - 37.5°C", correct: true }, { text: "38.0°C - 39.0°C", correct: false }, { text: "34.0°C - 35.0°C", correct: false }], explanation: "Average normal body temperature ranges around 36.5–37.5°C, though individual variation exists." },
    { question: "The most accurate site for routine pulse measurement in an adult is the:", answers: [{ text: "Carotid artery", correct: false }, { text: "Radial artery", correct: true }, { text: "Femoral artery", correct: false }, { text: "Temporal artery", correct: false }], explanation: "The radial artery is commonly used for routine pulse checks because it is accessible and reliable." },
    { question: "The normal adult respiratory rate is:", answers: [{ text: "8-10 breaths/min", correct: false }, { text: "12-20 breaths/min", correct: true }, { text: "22-28 breaths/min", correct: false }, { text: "30-40 breaths/min", correct: false }], explanation: "Normal adult respiratory rate is typically 12–20 breaths per minute at rest." },
    { question: "Tachycardia is defined as a heart rate greater than:", answers: [{ text: "80 bpm", correct: false }, { text: "100 bpm", correct: true }, { text: "60 bpm", correct: false }, { text: "120 bpm", correct: false }], explanation: "A rate above 100 bpm is commonly regarded as tachycardia in adults." },
    { question: "Blood pressure is measured using a:", answers: [{ text: "Thermometer", correct: false }, { text: "Sphygmomanometer", correct: true }, { text: "Pulse oximeter", correct: false }, { text: "Scalpel", correct: false }], explanation: "A sphygmomanometer (with stethoscope) is used to measure blood pressure accurately." },
    { question: "The nurse should count the respiratory rate immediately after counting the pulse to prevent:", answers: [{ text: "Inaccurate pulse count", correct: false }, { text: "The patient consciously changing their breathing pattern", correct: true }, { text: "Patient anxiety", correct: false }, { text: "Hyperventilation", correct: false }], explanation: "Counting respirations after pulse helps avoid alerting the patient and altering their breathing pattern." },
    { question: "A falsely high blood pressure reading is most likely caused by using a cuff that is:", answers: [{ text: "Too large", correct: false }, { text: "Too small", correct: true }, { text: "Too loose", correct: false }, { text: "Too long", correct: false }], explanation: "A cuff that is too small gives artificially high readings; using correct cuff size is essential." },
    { question: "What is the fifth vital sign that is now routinely assessed?", answers: [{ text: "Height", correct: false }, { text: "Pain level", correct: true }, { text: "Weight", correct: false }, { text: "Level of Consciousness", correct: false }], explanation: "Pain assessment is often called the fifth vital sign to ensure timely recognition and management." },
    { question: "The nurse must wait at least 15 minutes before taking an oral temperature if the patient has just consumed:", answers: [{ text: "Water", correct: false }, { text: "Hot or cold liquids", correct: true }, { text: "Medication", correct: false }, { text: "Air", correct: false }], explanation: "Hot or cold drinks temporarily alter oral temperature readings; waiting yields accurate measurement." },
    { question: "Oxygen saturation (SpO₂) measures the percentage of hemoglobin carrying:", answers: [{ text: "Carbon Dioxide", correct: false }, { text: "Oxygen", correct: true }, { text: "Nitrogen", correct: false }, { text: "Glucose", correct: false }], explanation: "Pulse oximetry estimates the percentage of hemoglobin saturated with oxygen (SpO₂)." },
    { question: "A patient's temperature that fluctuates but never returns to the normal range is termed:", answers: [{ text: "Intermittent fever", correct: false }, { text: "Remittent fever", correct: true }, { text: "Relapsing fever", correct: false }, { text: "Crisis fever", correct: false }], explanation: "Remittent fever fluctuates but does not return to normal during the day." },
    { question: "Systolic blood pressure represents:", answers: [{ text: "Heart relaxation", correct: false }, { text: "The pressure during ventricular contraction (ejection)", correct: true }, { text: "The average pressure in the arteries", correct: false }, { text: "Venous pressure", correct: false }], explanation: "Systolic pressure is produced by ventricular contraction when blood is ejected into the arteries." },
    { question: "The difference between systolic and diastolic blood pressure is called the:", answers: [{ text: "Mean Arterial Pressure (MAP)", correct: false }, { text: "Pulse pressure", correct: true }, { text: "Cardiac output", correct: false }, { text: "Pulse deficit", correct: false }], explanation: "Pulse pressure is the numeric difference between systolic and diastolic pressures and relates to arterial compliance." },
    { question: "Orthostatic hypotension is diagnosed by a drop in SBP of at least how much when changing from supine to standing?", answers: [{ text: "5 mmHg", correct: false }, { text: "20 mmHg (or DBP of 10 mmHg)", correct: true }, { text: "100 mmHg", correct: false }, { text: "15 mmHg", correct: false }], explanation: "A drop in systolic BP ≥20 mmHg (or diastolic ≥10 mmHg) on standing indicates orthostatic hypotension." },
    { question: "A weak, thready peripheral pulse is documented as:", answers: [{ text: "Bounding (+3)", correct: false }, { text: "Weak (+1)", correct: true }, { text: "Normal (+2)", correct: false }, { text: "Absent (0)", correct: false }], explanation: "Pulse strength is graded; +1 indicates a weak, thready pulse which may reflect low stroke volume." },
    { question: "The most common site for checking the pulse of an infant is the:", answers: [{ text: "Radial artery", correct: false }, { text: "Apical site (over the heart)", correct: true }, { text: "Carotid artery", correct: false }, { text: "Temporal artery", correct: false }], explanation: "Apical pulse measured over the precordium is preferred for infants due to peripheral pulse variability." },
    { question: "Bradypnea in an adult is a respiratory rate below:", answers: [{ text: "20 breaths/min", correct: false }, { text: "12 breaths/min", correct: true }, { text: "8 breaths/min", correct: false }, { text: "24 breaths/min", correct: false }], explanation: "Bradypnea is defined as a respiratory rate less than approximately 12 breaths/min in adults." },
    { question: "The Korotkoff sounds are the sounds heard when measuring:", answers: [{ text: "Heart rate", correct: false }, { text: "Blood pressure", correct: true }, { text: "Lung sounds", correct: false }, { text: "Bowel sounds", correct: false }], explanation: "Korotkoff sounds are auscultated while measuring blood pressure with a cuff and stethoscope." },
    { question: "Which organ is the body's 'thermostat' that regulates temperature?", answers: [{ text: "Heart", correct: false }, { text: "Hypothalamus", correct: true }, { text: "Lungs", correct: false }, { text: "Liver", correct: false }], explanation: "The hypothalamus regulates body temperature via thermoregulatory mechanisms." },
    { question: "The nurse should report a blood pressure of 180/110 mmHg to the provider as this indicates:", answers: [{ text: "Normal pressure", correct: false }, { text: "Hypertensive Crisis", correct: true }, { text: "Hypotension", correct: false }, { text: "Pulse pressure", correct: false }], explanation: "Readings this high suggest hypertensive urgency or emergency and require prompt communication." },
    { question: "The absence of breathing is termed:", answers: [{ text: "Dyspnea", correct: false }, { text: "Apnea", correct: true }, { text: "Tachypnea", correct: false }, { text: "Bradypnea", correct: false }], explanation: "Apnea indicates cessation of breathing and is a critical event requiring immediate assessment." },
    { question: "A febrile patient (fever) is at risk for developing:", answers: [{ text: "Bradycardia", correct: false }, { text: "Tachycardia and dehydration", correct: true }, { text: "Hypothermia", correct: false }, { text: "Bradypnea", correct: false }], explanation: "Fever increases metabolic demand leading to potential tachycardia and fluid losses causing dehydration." },
    { question: "Before taking a patient's temperature, the nurse must ensure the equipment is:", answers: [{ text: "Cold", correct: false }, { text: "Clean and properly calibrated", correct: true }, { text: "Warm", correct: false }, { text: "Placed on the floor", correct: false }], explanation: "Clean, calibrated equipment ensures accurate readings and reduces cross-infection risk." },
    { question: "When measuring BP, the arm should be positioned:", answers: [{ text: "Above the heart", correct: false }, { text: "At the level of the heart", correct: true }, { text: "Below the waist", correct: false }, { text: "Straight up", correct: false }], explanation: "Arm at heart level provides accurate arterial pressure readings." },
    { question: "The term for rapid, shallow breathing is:", answers: [{ text: "Hyperpnea", correct: false }, { text: "Tachypnea", correct: true }, { text: "Orthopnea", correct: false }, { text: "Kussmaul breathing", correct: false }], explanation: "Tachypnea refers to increased respiratory rate, which may be shallow and rapid depending on cause." }
  ],

  "Wound Dressing": [
    { question: "What is the primary purpose of a sterile wound dressing change?", answers: [{ text: "To make the wound look neat", correct: false }, { text: "To prevent infection and promote wound healing", correct: true }, { text: "To increase drainage", correct: false }, { text: "To decrease blood supply", correct: false }], explanation: "Sterile dressing changes reduce contamination and maintain a moist healing environment to support recovery." },
    { question: "Before removing an old dressing, the nurse should always assess the patient for:", answers: [{ text: "Hunger", correct: false }, { text: "Pain level and administer analgesia if necessary", correct: true }, { text: "Thirst", correct: false }, { text: "Sleepiness", correct: false }], explanation: "Assess and treat pain before dressing changes to ensure patient comfort and cooperation." },
    { question: "The correct sequence for removing a contaminated dressing is:", answers: [{ text: "Remove gloves, clean wound, apply new gloves", correct: false }, { text: "Hand hygiene, clean gloves, remove old dressing, discard gloves", correct: true }, { text: "Apply new dressing over the old one", correct: false }, { text: "Use scissors to cut the dressing off", correct: false }], explanation: "Perform hand hygiene and use clean gloves to handle contaminated dressings and protect the wound from further contamination." },
    { question: "When cleansing a wound, the nurse should clean from:", answers: [{ text: "Outer edges toward the center", correct: false }, { text: "Cleanest area (wound center) toward the dirtiest area (outer edges)", correct: true }, { text: "Top to bottom only", correct: false }, { text: "Side to side only", correct: false }], explanation: "Cleaning from clean to dirty reduces drag of contaminants into the wound bed." },
    { question: "The appearance of thick, yellow, green, or brown drainage (pus) from a wound is often indicative of:", answers: [{ text: "Normal healing", correct: false }, { text: "Infection (purulent exudate)", correct: true }, { text: "Bleeding", correct: false }, { text: "Serous drainage", correct: false }], explanation: "Purulent exudate suggests bacterial infection and may need culture and antibiotics." },
    { question: "What should the nurse document regarding the removed dressing?", answers: [{ text: "The brand name of the dressing", correct: false }, { text: "Amount, color, consistency, and odor of the drainage (COCA)", correct: true }, { text: "The weather outside", correct: false }, { text: "The nurse's mood", correct: false }], explanation: "Documenting COCA (color, odor, consistency, amount) helps monitor wound progress and detect infection." },
    { question: "Before applying a new sterile dressing, the nurse must ensure:", answers: [{ text: "The patient is standing", correct: false }, { text: "Hand hygiene and sterile technique (using sterile gloves/field)", correct: true }, { text: "The wound is bleeding", correct: false }, { text: "The door is open", correct: false }], explanation: "Aseptic technique prevents introducing pathogens during dressing application." },
    { question: "The term for the development of new tissue (healing) in the wound bed is:", answers: [{ text: "Necrosis", correct: false }, { text: "Granulation", correct: true }, { text: "Dehiscence", correct: false }, { text: "Evisceration", correct: false }], explanation: "Granulation tissue is healthy, pink/red tissue indicating healing with new capillary growth." },
    { question: "If a patient's wound eviscerates (organs protrude), the immediate nursing action is to:", answers: [{ text: "Push the organs back in", correct: false }, { text: "Cover the wound with sterile saline-soaked dressings and notify the provider immediately", correct: true }, { text: "Apply an abdominal binder tightly", correct: false }, { text: "Give the patient food", correct: false }], explanation: "Covering with sterile, moist dressings prevents further contamination while arranging urgent surgical care." },
    { question: "A hydrocolloid dressing is best suited for wounds that are:", answers: [{ text: "Heavily draining and infected", correct: false }, { text: "Clean, partial thickness, and require a moist environment", correct: true }, { text: "Deep with exposed bone", correct: false }, { text: "Actively bleeding", correct: false }], explanation: "Hydrocolloids maintain moisture and support autolytic debridement for shallow, low-exudate wounds." },
    { question: "The edge of a sterile field is considered contaminated if it is within:", answers: [{ text: "1 inch (2.5 cm) of the border", correct: true }, { text: "1 meter of the border", correct: false }, { text: "3 inches of the border", correct: false }, { text: "1 centimeter of the border", correct: false }], explanation: "The outer inch of a sterile field is considered contaminated due to handling or exposure." },
    { question: "When irrigating a wound, the irrigation solution should flow from:", answers: [{ text: "Dirty area to clean area", correct: false }, { text: "Clean area to dirty area", correct: true }, { text: "Bottom to top", correct: false }, { text: "Back to front", correct: false }], explanation: "Irrigating from clean to dirty avoids pushing contaminants into cleaner tissue." },
    { question: "What is the primary intervention to prevent dressing contamination during the procedure?", answers: [{ text: "Wearing a hat", correct: false }, { text: "Maintaining a sterile field and using aseptic technique", correct: true }, { text: "Talking loudly", correct: false }, { text: "Working quickly only", correct: false }], explanation: "A sterile field and aseptic technique are the main defenses against contamination." },
    { question: "If the nurse is unsure about the correct dressing change procedure, they should first:", answers: [{ text: "Guess", correct: false }, { text: "Consult the patient's care plan or policy and procedure manual", correct: true }, { text: "Ask the patient what to do", correct: false }, { text: "Call home", correct: false }], explanation: "Follow established protocols and the care plan to ensure safe, evidence-based practice." },
    { question: "The nurse should apply gentle tension when removing tape from the skin to prevent:", answers: [{ text: "Bleeding", correct: false }, { text: "Skin tears (skin stripping)", correct: true }, { text: "Pain", correct: false }, { text: "Losing the dressing", correct: false }], explanation: "Gentle removal protects fragile skin from tearing; use adhesive remover if needed." },
    { question: "A primary dressing is applied:", answers: [{ text: "Over the secondary dressing", correct: false }, { text: "Directly to the wound bed", correct: true }, { text: "Only to the skin around the wound", correct: false }, { text: "To the patient's pillow", correct: false }], explanation: "Primary dressings contact the wound bed to manage exudate and promote healing." },
    { question: "Which characteristic indicates that a wound is healing by secondary intention?", answers: [{ text: "Clean, approximated edges (sutured)", correct: false }, { text: "Large, open wound with granulation tissue forming from the bottom up", correct: true }, { text: "Minimal tissue loss", correct: false }, { text: "No scar formation", correct: false }], explanation: "Secondary intention involves healing by granulation and contraction from the wound base, common in large or infected wounds." },
    { question: "When opening sterile packages, the nurse should open the furthest flap:", answers: [{ text: "Toward themself", correct: false }, { text: "Away from themself first", correct: true }, { text: "To the side", correct: false }, { text: "Last", correct: false }], explanation: "Opening away first reduces the risk of reaching across the sterile field and contaminating it." },
    { question: "The use of normal saline solution (0.9% NaCl) for wound cleansing is preferred because it is:", answers: [{ text: "Expensive", correct: false }, { text: "Isotonic and non-toxic to wound cells", correct: true }, { text: "Antiseptic", correct: false }, { text: "Cold", correct: false }], explanation: "Normal saline is gentle and isotonic, preserving viable tissues during cleansing." },
    { question: "Sanguineous exudate refers to drainage that is primarily:", answers: [{ text: "Clear and watery", correct: false }, { text: "Bloody (fresh blood)", correct: true }, { text: "Thick and yellow", correct: false }, { text: "Pink and thin", correct: false }], explanation: "Sanguineous drainage indicates presence of fresh blood and may occur with new wounds or bleeding." },
    { question: "If a sterile glove becomes contaminated during the procedure, the nurse should:", answers: [{ text: "Continue the procedure quickly", correct: false }, { text: "Stop, discard the contaminated glove, and apply a new sterile glove", correct: true }, { text: "Wash the outside of the glove", correct: false }, { text: "Ignore it", correct: false }], explanation: "Replace contaminated gloves to maintain asepsis and prevent infection." },
    { question: "The proper disposal container for contaminated dressings is typically:", answers: [{ text: "The kitchen trash can", correct: false }, { text: "A biohazard waste bag", correct: true }, { text: "The patient's bedside table", correct: false }, { text: "The nurse's pocket", correct: false }], explanation: "Contaminated materials belong in biohazard containers to protect staff and environment." },
    { question: "Why is it important to date, time, and initial the dressing tape after a change?", answers: [{ text: "For decoration", correct: false }, { text: "To indicate the next scheduled change or observation point", correct: true }, { text: "To mark the patient's name", correct: false }, { text: "To show off writing skills", correct: false }], explanation: "Documenting dressing changes supports continuity of care and appropriate monitoring intervals." },
    { question: "The primary indication for a dry gauze dressing is a wound that is:", answers: [{ text: "Bleeding profusely", correct: false }, { text: "Clean, has minimal drainage, and needs protection", correct: true }, { text: "Deeply tunneled", correct: false }, { text: "Bad smelling", correct: false }], explanation: "Dry gauze protects clean, minimally exudative wounds and protects from trauma." },
    { question: "A transparent film dressing (e.g., Tegaderm) is primarily used for:", answers: [{ text: "Absorbing high amounts of exudate", correct: false }, { text: "Protecting IV sites or superficial wounds and allowing visualization", correct: true }, { text: "Treating deep pressure ulcers", correct: false }, { text: "Providing moisture", correct: false }], explanation: "Transparent films secure IVs or shallow wounds while permitting inspection and maintaining a barrier." }
  ]
};

// ------------------------ GLOBAL STATE & UTILITIES ------------------------
const topicNames = Object.keys(questionBank);

let candidateName = "";
let currentTopic = "";
let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 180;
let timer;
let activeQuestions = [];
let userAnswers = []; // store user's answers for review

// DOM references
let screens;
let candidateNameInput;
let examNumberInput;
let welcomeText;
let questionEl;
let answerButtonsContainer;
let nextButton;
let timerDisplay;
let progressIndicator;
let quizTopicEl;
let themeToggle;
let themeIcon;
let retryBtn;

// Helper: show screen
function showScreen(screenId) {
  if (!screens) return;
  Object.values(screens).forEach(s => s.style.display = 'none');
  const target = screens[screenId];
  if (target) target.style.display = 'block';
  if (screenId === 'quiz') {
    if (questionEl) questionEl.classList.add('animate-fade-slide-up');
    setTimeout(()=>questionEl && questionEl.classList.remove('animate-fade-slide-up'), 320);
  }
}

// Shuffle
function shuffleArray(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// NAV FUNCTIONS
function goToLogin() {
  showScreen("login");
}

function goToTopicSelection() {
  if (!candidateNameInput.value.trim() || !examNumberInput.value.trim()) {
    showMessage("⚠", "Please enter your Full Name AND Examination Number to proceed.", "red");
    return;
  }
  candidateName = candidateNameInput.value.trim();
  welcomeText.textContent = `Welcome, ${candidateName}!`;

  const topicButtonsContainer = document.getElementById("topicButtons");
  topicButtonsContainer.innerHTML = '';
  topicNames.forEach(topic => {
    const btn = document.createElement("button");
    btn.textContent = topic;
    btn.onclick = () => startQuiz(topic);
    btn.className = "w-full py-3 font-semibold rounded-lg bg-nunsa-green text-white hover:bg-nunsa-green-dark transition transform hover:-translate-y-0.5 hover:scale-[1.01] shadow-md";
    topicButtonsContainer.appendChild(btn);
  });

  showScreen("topic");
}

function startQuiz(topic) {
  const QUIZ_LENGTH = 10;
  currentTopic = topic;
  score = 0;
  currentQuestionIndex = 0;
  timeLeft = 180;
  userAnswers = [];

  const questionsForTopic = questionBank[topic];
  if (!questionsForTopic || questionsForTopic.length < QUIZ_LENGTH) {
    showMessage("🚨 Error", `Not enough questions in the topic: ${topic}. Please check the question bank.`, "red");
    return;
  }
  const shuffledQuestions = shuffleArray([...questionsForTopic]);
  activeQuestions = shuffledQuestions.slice(0, QUIZ_LENGTH);

  quizTopicEl.textContent = `Topic: ${currentTopic}`;
  showScreen("quiz");
  updateTimerDisplay();
  startTimer();
  showQuestion();
}

function showQuestion() {
  resetState();

  if (currentQuestionIndex >= activeQuestions.length) {
    showScore();
    return;
  }

  const currentQ = activeQuestions[currentQuestionIndex];
  questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;
  progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;

  // animate
  questionEl.classList.add('animate-fade-slide-up');
  setTimeout(()=> questionEl.classList.remove('animate-fade-slide-up'), 320);

  const shuffledAnswers = shuffleArray([...currentQ.answers]);
  shuffledAnswers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans.text;
    btn.classList.add("btn-option", "w-full", "py-3", "px-4", "font-medium", "rounded-lg", "text-left", "text-gray-800", "dark:text-gray-100", "hover:ring-2", "hover:ring-nunsa-green", "transition", "duration-100", "dark:border-gray-500");
    if (document.body.classList.contains('dark')) btn.classList.add('bg-gray-800');
    else btn.classList.add('bg-gray-100');

    btn.dataset.correct = ans.correct ? "true" : "false";
    btn.onclick = () => {
      // store user's answer for this question index
      userAnswers[currentQuestionIndex] = {
        selectedText: ans.text,
        isCorrect: !!ans.correct,
        correctText: currentQ.answers.find(a=>a.correct).text,
        question: currentQ.question,
        explanation: currentQ.explanation || ''
      };
      // neutral visual only
      Array.from(answerButtonsContainer.children).forEach(c => c.disabled = true);
      btn.classList.remove('bg-gray-100','bg-gray-800');
      btn.classList.add('btn-selected','ring-2','ring-nunsa-green');
      nextButton.style.display = 'block';
    };

    answerButtonsContainer.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtonsContainer.innerHTML = "";
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      showScore();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let m = Math.floor(timeLeft/60);
  let s = timeLeft % 60;
  const timeStr = `${m}:${s < 10 ? "0"+s : s}`;
  timerDisplay.textContent = `Time Left: ${timeStr}`;

  if (timeLeft <= 10) {
    timerDisplay.classList.remove('bg-yellow-600', 'bg-red-600');
    timerDisplay.classList.add('bg-red-700', 'animate-pulse');
  } else if (timeLeft <= 60) {
    timerDisplay.classList.remove('bg-red-700', 'bg-red-600');
    timerDisplay.classList.add('bg-yellow-600');
  } else {
    timerDisplay.classList.remove('bg-yellow-600','bg-red-700');
    timerDisplay.classList.add('bg-red-600');
  }
}

function skipQuestion() {
  userAnswers[currentQuestionIndex] = {
    selectedText: null,
    isCorrect: false,
    correctText: activeQuestions[currentQuestionIndex].answers.find(a=>a.correct).text,
    question: activeQuestions[currentQuestionIndex].question,
    explanation: activeQuestions[currentQuestionIndex].explanation || ''
  };
  currentQuestionIndex++;
  showQuestion();
}

function showScore() {
  clearInterval(timer);

  const totalQuestions = activeQuestions.length;
  score = userAnswers.reduce((acc, ua) => acc + (ua && ua.isCorrect ? 1 : 0), 0);
  const incorrect = totalQuestions - score;
  const percentage = (score/totalQuestions)*100;

  document.getElementById("resultText").innerHTML =
    `🎉 Well done, <span class="font-extrabold text-nunsa-green">${candidateName}</span>! You scored ${score}/${totalQuestions}. Your performance on the <span class="font-semibold">${currentTopic}</span> simulation is complete.`;

  document.getElementById("totalQs").textContent = totalQuestions;
  document.getElementById("correctScore").textContent = score;
  document.getElementById("incorrectScore").textContent = incorrect;
  document.getElementById("percentageScore").textContent = `${percentage.toFixed(0)}%`;

  const correctPercent = Math.round((score/totalQuestions)*100);
  const pieChart = document.getElementById("pieChart");
  pieChart.style.background = `conic-gradient(#10b981 0% ${correctPercent}%, #ef4444 ${correctPercent}% 100%)`;
  document.getElementById("pieText").textContent = `${correctPercent}%`;

  showScreen("result");
}

// Build review page
function showReview() {
  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = '';

  activeQuestions.forEach((q, idx) => {
    const ua = userAnswers[idx] || { selectedText: null, isCorrect: false, correctText: q.answers.find(a=>a.correct).text, explanation: q.explanation || '' };
    const chosen = ua.selectedText || "(No answer selected)";
    const correctText = ua.correctText || "(Not provided)";
    const isCorrect = ua.isCorrect === true;
    // If explanation empty, create a concise autogenerated explanation using the correctText
    let explanation = ua.explanation;
    if (!explanation || explanation.trim() === '') {
      explanation = `Correct answer: "${correctText}". This is the best choice because it aligns with standard nursing practice for safety and effectiveness.`;
    }

    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="text-sm text-gray-700 dark:text-gray-200 font-semibold">Q${idx+1}: ${q.question}</div>
        <div class="text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}">${isCorrect ? 'Correct' : (ua.selectedText ? 'Incorrect' : 'Unanswered')}</div>
      </div>
      <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
        <div><span class="font-medium">Your answer:</span> ${escapeHtml(chosen)}</div>
        <div class="mt-1"><span class="font-medium">Correct answer:</span> ${escapeHtml(correctText)}</div>
        <div class="mt-2 bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm text-gray-700 dark:text-gray-200">${escapeHtml(explanation)}</div>
      </div>
    `;
    reviewList.appendChild(card);
  });

  showScreen("review");
}

// small helper to escape html in inserted text
function escapeHtml(text){
  if (text === null || text === undefined) return '';
  return String(text).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
}

// custom overlay message
function showMessage(icon, message, color) {
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  overlay.innerHTML = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-sm w-full text-center">
      <div class="text-4xl mb-4 text-${color}-500">${icon}</div>
      <p class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-6">${message}</p>
      <button id="closeMessageBtn" class="bg-nunsa-green text-white py-2 px-6 rounded-lg font-semibold hover:bg-nunsa-green-dark transition">OK</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('closeMessageBtn').onclick = () => document.body.removeChild(overlay);
}
window.alert = (message) => showMessage("🚨", message, "red");

// INIT
document.addEventListener('DOMContentLoaded', () => {
  screens = {
    login: document.getElementById("login-screen"),
    topic: document.getElementById("topic-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen"),
    review: document.getElementById("review-screen")
  };
  candidateNameInput = document.getElementById("candidateName");
  examNumberInput = document.getElementById("examNumber");
  welcomeText = document.getElementById("welcomeText");
  questionEl = document.getElementById("question");
  answerButtonsContainer = document.getElementById("answer-buttons");
  nextButton = document.getElementById("next-btn");
  timerDisplay = document.getElementById("timer");
  progressIndicator = document.getElementById("progressIndicator");
  quizTopicEl = document.getElementById("quizTopic");
  themeToggle = document.getElementById('themeToggle');
  themeIcon = document.getElementById('themeIcon');
  retryBtn = document.getElementById('retry-btn');

  document.getElementById('skip-btn').onclick = skipQuestion;

  // date & year
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("currentDate").textContent = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });

  // theme init
  const sunIcon = `<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M4.93 19.07l1.41-1.41"></path><path d="M17.66 6.34l1.41-1.41"></path>`;
  const moonIcon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>`;

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
    themeIcon.innerHTML = moonIcon;
  } else {
    document.body.classList.remove('dark');
    themeIcon.innerHTML = sunIcon;
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.theme = 'light';
      themeIcon.innerHTML = sunIcon;
    } else {
      document.body.classList.add('dark');
      localStorage.theme = 'dark';
      themeIcon.innerHTML = moonIcon;
    }
    // update answers bg
    Array.from(answerButtonsContainer.children).forEach(btn => {
      btn.classList.remove('bg-gray-100','bg-gray-800');
      if (document.body.classList.contains('dark')) btn.classList.add('bg-gray-800');
      else btn.classList.add('bg-gray-100');
    });
  });

  nextButton.onclick = ()=> {
    currentQuestionIndex++;
    showQuestion();
  };

  retryBtn.onclick = ()=> {
    startQuiz(currentTopic);
  };

  showScreen("login");
});
