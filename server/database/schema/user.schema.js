import { Schema } from 'mongoose';
import sha256 from 'sha256';

const userSchema = new Schema({
  email: { type: String },
  hashedPassword: { type: String },
});

/**
 *  @param {*} password
 */
userSchema.methods.comparePassword = function comparePassword(password) {
  return this.hashedPassword === sha256(password);
};

export default userSchema;
