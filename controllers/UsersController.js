const Users = require('../models').Users;

const getAll = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let err, currentusers;

  let whereStatement = {};
  if (req.query.name) {
    whereStatement.name = {
      $like: '%' + req.query.name + '%'
    };
  }

  [err, currentusers] = await to(Users.findAll({ where: whereStatement }))

  return res.json(currentusers);
}

module.exports.getAll = getAll;

const get = async (req, res) => {
  let err, currentuser;
  let currentuserId = parseInt(req.params.currentuserId)
  res.setHeader('Content-Type', 'application/json');
  console.log('currentuser');
  [err, currentuser] = await to(Users.findById(currentuserId))
  if (!currentuser) {
    res.statusCode = 404;
    console.log('currentuser');
    return res.json({ success: false, error: err });
  }
  console.log('currentuser');
  return res.json(currentuser);
}
module.exports.get = get;

const update = async function (req, res) {
  let err, currentuser, data;
  data = req.body;
  console.log (req.body);
  [err, currentuser] = await to(Users.update(data, {
    where: {
      id: data.id
    }
  }));
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422
    return res.json({ success: false, error: err });
  }
  return res.json(currentuser);
}

module.exports.update = update;

const create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, currentuser, currentuserInfo;

  currentuserInfo = req.body;

  [err, currentuser] = await to(Users.create(currentuserInfo));
  console.log(req.body)
  console.log('currentuserInfo');
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422; // unprocessable entity
    return res.json({ success: false, error: err });
  }
  [err, currentuser] = await to(currentuser.save());
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422
    return res.json({ success: false, error: err });

  }
  res.statusCode = 201;
  return res.json(currentuser);
}

module.exports.create = create;

const deleteuser = async function (req, res) {
  let err, currentuser, data;
  data = req.body;
  console.log (req.body);
  [err, currentuser] = await to(Users.destroy(data, {
    where: {
      id: data.id
    }
  }));
  if (err) {
    if (typeof err == 'object' && typeof err.message != 'undefined') {
      err = err.message;
    }

    if (typeof code !== 'undefined') res.statusCode = code;
    res.statusCode = 422
    return res.json({ success: false, error: err });
  }
  return res.json(currentuser);
}

module.exports.deleteuser = deleteuser;

