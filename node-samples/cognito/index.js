
import { fileURLToPath } from "url";

import {
  paginateListUserPools,
  CognitoIdentityProviderClient,
  AdminGetUserCommand,
  ListUsersCommand,
  InitiateAuthCommand,
  AuthFlowType
} from "@aws-sdk/client-cognito-identity-provider";

import { CognitoJwtVerifier } from "aws-jwt-verify";

const {
  COGNITO_POLL_ID,
  COGNITO_CLIENT_ID,
  COGNITO_USER,
  COGNITO_PASSWORD
} = process.env

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: COGNITO_POLL_ID,
  tokenUse: "access",
  clientId: COGNITO_CLIENT_ID,
});

const client = new CognitoIdentityProviderClient({});

function arrayToObject(array) {
  return array.reduce((acc, cur) => {
    acc[cur.Name] = cur.Value
    return acc
  }, {})
}

async function listUserPools() {
  const paginator = paginateListUserPools({ client }, {});
  const userPoolNames = [];
  for await (const page of paginator) {
    const names = page.UserPools.map((pool) => pool.Name);
    userPoolNames.push(...names);
  }
  console.log("User pool names: ");
  console.log(userPoolNames.join("\n"));
}

async function listUsers() {
  const result = await client.send(
    new ListUsersCommand({
      UserPoolId: COGNITO_POLL_ID
    })
  );
  const Users = result.Users.map(user => arrayToObject(user.Attributes));
  console.log({ Users });
}

async function getUserInfo() {
  const result = await client.send(
    new AdminGetUserCommand({
      UserPoolId: COGNITO_POLL_ID,
      Username: COGNITO_USER,
    })
  );
  const { Enabled, UserStatus, UserAttributes } = result;
  console.log({ Enabled, UserStatus, UserAttributes: arrayToObject(UserAttributes) });
}

async function autenticate() {
  const result = await client.send(new InitiateAuthCommand({
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: COGNITO_USER,
      PASSWORD: COGNITO_PASSWORD,
    },
    ClientId: COGNITO_CLIENT_ID,
  }))
  console.log(result.AuthenticationResult)
  return result.AuthenticationResult.AccessToken
}

async function tokenVerify({ accessToken }) {
  try {
    const payload = await verifier.verify(accessToken);
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
  }
}

const main = async () => {
  await listUserPools();
  await listUsers();
  await getUserInfo();
  const accessToken = await autenticate()
  await tokenVerify({ accessToken })
};

main()
  .then(() => console.log('ok'))
  .catch(error => console.error(error))



