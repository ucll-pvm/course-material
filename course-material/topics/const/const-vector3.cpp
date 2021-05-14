const std::vector<Person*> people;

// Allowed
// The element type is Person* const
// The pointee itself is not constant,
// only the pointer itself
people[0]->increment_age();
