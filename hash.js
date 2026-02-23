const bcrypt = require('bcryptjs');
bcrypt.hash('GSMotorsinc', 12).then(hash => console.log(hash));
