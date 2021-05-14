const std::vector<Person*> people;

// Compile error
// The vector is const, therefore
// adding elements is forbidden
people.push_back(&extra_person);
