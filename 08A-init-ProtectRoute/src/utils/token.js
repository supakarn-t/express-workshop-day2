import jwt from 'jsonwebtoken';

const sign = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { sign, verify };
