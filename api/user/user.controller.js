let users = [
  { id: 1, name: "john" },
  { id: 2, name: "jane" },
  { id: 3, name: "mark" },
  { id: 4, name: "paul" } 
]

exports.index = (req, res) => {
  res.send(users);
}

exports.show = (req, res) => {
  let num = parseInt(req.params.id);
  if ( num ) {
    res.send(users.find((u) => {
      return u.id === num;
    }) || "Not found");
  } else {
    res.status(404).send("Not found");
  }
};

exports.create = (req, res) => {
  let body = JSON.parse(req.body)
  if (body.id && body.name) {
    users.push(body);
  }
  res.send(body);
};

exports.destroy = (req, res) => {
  let num = parseInt(req.params.id);
  if ( num ) {
    users = users.filter((user) => {
      return user.id !== num
    })
  }
  res.send(users);
};