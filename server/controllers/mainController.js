import { Range, Map } from 'immutable';
import faker from 'faker';

export function getEmployeeData(req, res) {
  const employees = Range(0, 100)
    .map(id => Map({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      fullTime: faker.random.boolean(),
      img: faker.image.avatar(),
    }))
    .take(10);

  res.json({ employees });
}
