const std::vector<Person*> people;

// Compile error
// The element type is Person* const
// The pointer is const, so
// it cannot be overwritten
people[0] = &replacement_person;
