import config from "../../config";
import { IReqUser } from "../../interfaces";
import { AppError } from "../../utils/appError";
import { signJwt, TJwtPayload } from "../../utils/signJwt";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { hashPassword } from "./user.utils";

const registerUser = async (payload: IUser) => {
  const isUserExists = await User.isUserExists({
    email: payload.email,
    phoneNumber: payload.phoneNumber,
  });
  if (isUserExists) {
    throw new AppError(
      400,
      `User with same ${isUserExists.property} Already exists`
    );
  }
  const result = await User.create(payload);
  const jwtPayload = {
    email: result.email,
    phoneNumber: result.phoneNumber,
    role: result.role,
  };
  const accessToken = signJwt(jwtPayload, config.access_secret as string);

  return { data: result, accessToken };
};

const updateProfile = async (payload: Partial<IUser>, user: IReqUser) => {
  if (payload?.email) {
    const isUserExists = await User.findOne({ email: payload.email });
    if ( isUserExists && isUserExists?.phoneNumber !== user.phoneNumber) {
      throw new AppError(400, "User already exists with same Email");
    }
  }
  if (payload?.phoneNumber) {
    const isUserExists = await User.findOne({ phoneNumber: payload.phoneNumber });
    if ( isUserExists &&  isUserExists?.email !== user.email) {
      throw new AppError(400, "User already exists with same Phone number");
    }
  }
  if (payload?.password) {
    payload.password = await hashPassword(payload.password);
  }
  const jwtPayload: TJwtPayload = {
    phoneNumber: payload?.phoneNumber || user.phoneNumber,
    email: payload?.email || user.email,
    role: user.role,
  };
  delete payload?.role;
  const result = await User.findByIdAndUpdate(
    user._id,
    { ...payload },
    { new: true }
  );
  if (!result) {
    throw new AppError(500, "Something went wrong updating Profile");
  }
  const accessToken = signJwt(jwtPayload, config.access_secret as string);
  return { data: result, accessToken };
};



export const UserServices = {
  registerUser,
  updateProfile,
};
