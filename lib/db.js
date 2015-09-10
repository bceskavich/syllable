class User extends Object {
  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
    this.syllabi = [];
  }

  setUserSyllabi(ids) {
    this.syllabi = ids;
  }
}

class Syllabus extends Object {
  constructor(id, title, description) {
    super();
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

let syllabi = [];
syllabi.push(new Syllabus(1, 'HCI', 'A course of user experiences.'));
syllabi.push(new Syllabus(2, 'InfoViz', 'A course of data visualization.'));

let viewer = new User(1, 'Billy');
viewer.setUserSyllabi(syllabi.map(syllabus => syllabus.id));

export function getViewer() {
  return viewer;
}

export function getSyllabus(id) {
  return syllabi.find(syllabus => syllabus.id === id);
}

export function getSyllabi() {
  return syllabi;
}

module.exports.Syllabus;
module.exports.User;
