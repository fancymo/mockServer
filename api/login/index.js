module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const ret = {
    token: 'Test-Token',
    expire: (new Date()).getTime() + 24 * 60 * 60 * 1000,
    role: 'admin',
    permission: ['user.add', 'dashboard.view'],
  };
  if (username === 'mx' && password === '123456') {
    res.json(ret);
  } else {
    res.sendStatus(401);
  }
};
