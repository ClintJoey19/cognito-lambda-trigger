import { connectToDB } from "./db";
import { User } from "./models/user.model";
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  const { given_name, family_name, name, email, picture } =
    event.request.userAttributes;

  // send user credentials to mongodb
  try {
    await connectToDB();

    const user = new User({
      firstname: given_name,
      lastname: family_name,
      email,
      picture,
    });

    const res = await user.save();

    if (!res) throw new Error("There was an error in creating the user");

    return event.requestContext;
  } catch (error) {
    console.error(error.message);
  }
};
