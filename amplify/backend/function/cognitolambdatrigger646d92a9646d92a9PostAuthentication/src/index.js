import User from "./models/user.model.js";
import connectToDB from "./db.js";
/**
 * @fileoverview
 *
 * This CloudFormation Trigger creates a handler which awaits the other handlers
 * specified in the `MODULES` env var, located at `./${MODULE}`.
 */

/**
 * The names of modules to load are stored as a comma-delimited string in the
 * `MODULES` env var.
 */

/**
 * This async handler iterates over the given modules and awaits them.
 *
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 *
 */
export const handler = async (event, context) => {
  const { given_name, family_name, name, email, picture } =
    event.request.userAttributes;

  console.log(event, context);

  // send user credentials to mongodb
  try {
    await connectToDB();

    // verify if user exists on the db
    const isUserExists = await User.findOne({
      email,
    });

    if (isUserExists) return event;

    const user = new User({
      firstname: given_name,
      lastname: family_name,
      email,
      picture,
    });

    const res = await user.save();

    if (!res) throw new Error("There was an error in creating the user");

    return event;
  } catch (error) {
    console.error(error.message);
  }
};
