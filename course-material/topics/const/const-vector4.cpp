// Note the extra const!
const std::vector<const Person*> people;

// Compile error
// Now the pointees are also const
// Changes to the pointees are disallowed
people[0]->increment_age();
